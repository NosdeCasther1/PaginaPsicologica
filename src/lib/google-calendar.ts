/**
 * Cliente de Google Calendar API usando Service Account.
 *
 * Requiere las siguientes variables de entorno en Vercel:
 *   GOOGLE_CALENDAR_ID            - ID del calendario (ej: abc123@group.calendar.google.com)
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL  - Email de la cuenta de servicio (ej: bot@project.iam.gserviceaccount.com)
 *   GOOGLE_SERVICE_ACCOUNT_KEY    - Clave privada JSON en Base64 (ver README para generarla)
 */

import { google } from 'googleapis';

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

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const keyBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!email || !keyBase64) {
    throw new Error(
      'Faltan variables de entorno: GOOGLE_SERVICE_ACCOUNT_EMAIL y/o GOOGLE_SERVICE_ACCOUNT_KEY',
    );
  }

  // La clave se almacena en Base64 para evitar problemas con saltos de línea en Vercel
  const keyJson = Buffer.from(keyBase64, 'base64').toString('utf-8');
  const key = JSON.parse(keyJson) as { private_key: string };

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: key.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });
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
    const auth = getAuth();
    const calendar = google.calendar({ version: 'v3', auth });

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

/**
 * Devuelve true si Google Calendar API está configurada.
 * Útil para que Luz sepa si puede consultar citas reales.
 */
export function isGoogleCalendarConfigured(): boolean {
  return !!(
    process.env.GOOGLE_CALENDAR_ID &&
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  );
}
