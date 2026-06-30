import { google } from 'googleapis';
import { readFileSync } from 'node:fs';

export type CalendarEvent = {
  id: string;
  summary: string;
  description?: string;
  start: string;
  end: string;
  attendeeEmail?: string;
  attendeeName?: string;
  status: 'confirmed' | 'tentative' | 'cancelled';
  htmlLink?: string;
};

export type AvailabilitySlot = {
  start: string;
  end: string;
};

export type CalendarAvailability = {
  date: string;
  timeZone: string;
  configured: boolean;
  availableSlots: AvailabilitySlot[];
  busyCount: number;
};

const DEFAULT_TIME_ZONE = 'America/Guatemala';
const DEFAULT_UTC_OFFSET = '-06:00';
const DEFAULT_WORKDAY_START = '09:00';
const DEFAULT_WORKDAY_END = '18:00';
const DEFAULT_SLOT_MINUTES = 60;

function parseServiceAccountKey(rawKey: string) {
  const normalizedKey = rawKey.trim();

  try {
    const decoded = Buffer.from(normalizedKey, 'base64').toString('utf-8');
    if (decoded.trim().startsWith('{')) {
      return JSON.parse(decoded) as { client_email?: string; private_key?: string };
    }
  } catch {
    // No era Base64 válido; probamos los otros formatos abajo.
  }

  if (normalizedKey.startsWith('{')) {
    return JSON.parse(normalizedKey) as { client_email?: string; private_key?: string };
  }

  return {
    private_key: normalizedKey.replace(/\\n/g, '\n'),
  };
}

function getCalendarClient() {
  const configuredEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey =
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY ||
    (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE
      ? readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE, 'utf8')
      : '');

  if (!rawKey) {
    throw new Error(
      'Falta GOOGLE_SERVICE_ACCOUNT_KEY o GOOGLE_SERVICE_ACCOUNT_KEY_FILE',
    );
  }

  const credentials = parseServiceAccountKey(rawKey);
  const email = configuredEmail || credentials.client_email;

  if (!email || !credentials.private_key) {
    throw new Error(
      'Faltan credenciales de Google Calendar: client_email/private_key',
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: credentials.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  return google.calendar({ version: 'v3', auth });
}

/**
 * Busca eventos futuros en el calendario filtrados por email del asistente.
 * Devuelve un array vacío si la API no está configurada (modo fallback).
 */
export async function getEventsByEmail(
  attendeeEmail: string,
  maxResults = 5,
): Promise<CalendarEvent[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!calendarId) return [];

  try {
    const calendar = getCalendarClient();

    const now = new Date().toISOString();

    const response = await calendar.events.list({
      calendarId,
      timeMin: now,
      maxResults,
      singleEvents: true,
      orderBy: 'startTime',
      q: attendeeEmail,
    });

    const events = response.data.items ?? [];

    return events
      .filter((event) => {
        // Verificar que el email del asistente coincide exactamente
        const attendees = event.attendees ?? [];
        return (
          attendees.some(
            (a) => a.email?.toLowerCase() === attendeeEmail.toLowerCase(),
          ) ||
          (event.description ?? '').toLowerCase().includes(attendeeEmail.toLowerCase()) ||
          (event.summary ?? '').toLowerCase().includes(attendeeEmail.toLowerCase())
        );
      })
      .filter((event) => event.status !== 'cancelled')
      .map((event) => {
        const matchingAttendee = (event.attendees ?? []).find(
          (a) => a.email?.toLowerCase() === attendeeEmail.toLowerCase(),
        );
        return {
          id: event.id ?? crypto.randomUUID(),
          summary: event.summary ?? 'Cita psicológica',
          description: event.description ?? undefined,
          start: event.start?.dateTime ?? event.start?.date ?? now,
          end: event.end?.dateTime ?? event.end?.date ?? now,
          attendeeEmail: matchingAttendee?.email ?? attendeeEmail,
          attendeeName: matchingAttendee?.displayName ?? undefined,
          status: (event.status as CalendarEvent['status']) ?? 'confirmed',
          htmlLink: event.htmlLink ?? undefined,
        };
      });
  } catch (err) {
    // No lanzar error en producción; devolver array vacío para que Luz
    // dirija al calendario público en lugar de fallar silenciosamente.
    console.error('[google-calendar] Error consultando eventos:', err instanceof Error ? err.message : err);
    return [];
  }
}

function getLocalDate(timeZone = DEFAULT_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;

  return `${year}-${month}-${day}`;
}

export function getRelativeCalendarDate(offsetDays = 0, timeZone = DEFAULT_TIME_ZONE) {
  const today = getLocalDate(timeZone);
  const baseDate = new Date(`${today}T00:00:00${process.env.GOOGLE_CALENDAR_UTC_OFFSET || DEFAULT_UTC_OFFSET}`);
  baseDate.setUTCDate(baseDate.getUTCDate() + offsetDays);

  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(baseDate);
}

function dateTimeForCalendarDate(date: string, time: string) {
  const offset = process.env.GOOGLE_CALENDAR_UTC_OFFSET || DEFAULT_UTC_OFFSET;
  return new Date(`${date}T${time}:00${offset}`);
}

function overlaps(
  slotStart: Date,
  slotEnd: Date,
  busyStart: Date,
  busyEnd: Date,
) {
  return slotStart < busyEnd && slotEnd > busyStart;
}

/**
 * Calcula espacios libres contra eventos reales del calendario usando freeBusy.
 * Importante: esto valida ocupación del calendario, no crea reservas.
 */
export async function getAvailabilityForDate(date: string): Promise<CalendarAvailability> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const timeZone = process.env.GOOGLE_CALENDAR_TIME_ZONE || DEFAULT_TIME_ZONE;
  const workdayStart = process.env.APPOINTMENT_WORKDAY_START || DEFAULT_WORKDAY_START;
  const workdayEnd = process.env.APPOINTMENT_WORKDAY_END || DEFAULT_WORKDAY_END;
  const slotMinutes = Number(process.env.APPOINTMENT_SLOT_MINUTES) || DEFAULT_SLOT_MINUTES;

  if (!calendarId || !isGoogleCalendarConfigured()) {
    return {
      date,
      timeZone,
      configured: false,
      availableSlots: [],
      busyCount: 0,
    };
  }

  try {
    const calendar = getCalendarClient();
    const timeMin = dateTimeForCalendarDate(date, workdayStart);
    const timeMax = dateTimeForCalendarDate(date, workdayEnd);

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        timeZone,
        items: [{ id: calendarId }],
      },
    });

    const busy = response.data.calendars?.[calendarId]?.busy ?? [];
    const availableSlots: AvailabilitySlot[] = [];

    for (
      let slotStart = new Date(timeMin);
      slotStart.getTime() + slotMinutes * 60_000 <= timeMax.getTime();
      slotStart = new Date(slotStart.getTime() + slotMinutes * 60_000)
    ) {
      const slotEnd = new Date(slotStart.getTime() + slotMinutes * 60_000);
      const isBusy = busy.some((busySlot) => {
        if (!busySlot.start || !busySlot.end) return false;
        return overlaps(
          slotStart,
          slotEnd,
          new Date(busySlot.start),
          new Date(busySlot.end),
        );
      });

      if (!isBusy) {
        availableSlots.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString(),
        });
      }
    }

    return {
      date,
      timeZone,
      configured: true,
      availableSlots,
      busyCount: busy.length,
    };
  } catch (err) {
    console.error(
      '[google-calendar] Error consultando disponibilidad:',
      err instanceof Error ? err.message : err,
    );
    return {
      date,
      timeZone,
      configured: false,
      availableSlots: [],
      busyCount: 0,
    };
  }
}

/**
 * Devuelve true si Google Calendar API está configurada.
 * Útil para que Luz sepa si puede consultar citas reales.
 */
export function isGoogleCalendarConfigured(): boolean {
  return !!(
    process.env.GOOGLE_CALENDAR_ID &&
    (process.env.GOOGLE_SERVICE_ACCOUNT_KEY ||
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE)
  );
}
