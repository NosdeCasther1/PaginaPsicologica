import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import {
  getAvailabilityForDate,
  getEventsByEmail,
  getRelativeCalendarDate,
  isGoogleCalendarConfigured,
} from '@/lib/google-calendar';
import { getUpcomingAppointmentsByEmail } from '@/lib/appointments';
import { siteConfig } from '@/lib/config';

export type ChatPart = {
  type?: string;
  text?: string;
};

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content?: string;
  parts?: ChatPart[];
};

type NormalizedChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const BOOKING_URL = siteConfig.links.calendarUrl;
const CALENDAR_TIME_ZONE = process.env.GOOGLE_CALENDAR_TIME_ZONE || 'America/Guatemala';

export const SYSTEM_PROMPT = `Eres "Luz", asistente de recepción de la clínica "Selah". Eres cálida, empática y concisa. Respondes en español.

Servicios disponibles: Terapia Individual, Terapia de Pareja y Terapia Infantil (100% online).

REGLAS ESTRICTAS:
- NUNCA des diagnósticos médicos.
- NUNCA inventes horarios, fechas ni disponibilidad. Solo puedes hablar de disponibilidad si el sistema consultó Google Calendar.
- NUNCA menciones "Calendly" ni ninguna otra plataforma de terceros.
- Si el usuario quiere agendar o ver horarios disponibles, SIEMPRE dile que vaya a la sección /agendar de la página${BOOKING_URL ? ` o visite directamente: ${BOOKING_URL}` : ''}.
- Si el usuario quiere consultar una cita ya agendada, pídele el correo con el que se registró y Luz consultará el sistema.
- Si no puedes confirmar disponibilidad real, SIEMPRE redirige al calendario público. Es mejor admitir que no sabes que inventar una fecha.
- Mantén las respuestas cortas (máximo 3-4 oraciones) a menos que el usuario pida más detalle.`;

export function normalizeChatMessages(messages: ChatMessage[]): NormalizedChatMessage[] {
  return messages.map((msg) => ({
    role: msg.role,
    content:
      msg.content ||
      (msg.parts && msg.parts.length > 0 ? msg.parts[0].text : '') ||
      '',
  }));
}

export function getRequestedAvailabilityDate(message: string) {
  if (/(mañana|manana)/i.test(message)) {
    return {
      label: 'mañana',
      date: getRelativeCalendarDate(1, CALENDAR_TIME_ZONE),
    };
  }

  if (/(hoy|ahora|esta tarde|este dia|este día)/i.test(message)) {
    return {
      label: 'hoy',
      date: getRelativeCalendarDate(0, CALENDAR_TIME_ZONE),
    };
  }

  return null;
}

export function formatSlotTime(isoDate: string) {
  return new Intl.DateTimeFormat('es-GT', {
    timeZone: CALENDAR_TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(isoDate));
}

export function getMessageIntent(message: string) {
  const email = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];

  const isExistingAppointmentQuestion =
    /(mi cita|mis citas|cita agendada|citas agendadas|revisar mi cita|consultar mi cita|confirmar mi cita|tengo cita)/i.test(
      message,
    );

  const isBookingQuestion =
    /(quiero reservar|quiero agendar|agendar cita|reservar cita|cita disponible|citas disponibles|horarios disponibles|disponibilidad|para manana|para mañana|mañana|manana|cuando puedo|qué horarios|que horarios)/i.test(
      message,
    );

  const isAvailabilityQuestion =
    /(hay citas|citas para hoy|citas hoy|horarios hoy|hay horarios|disponibilidad|horarios disponibles|citas disponibles|para mañana|para manana|mañana|manana)/i.test(
      message,
    );

  return {
    email,
    isExistingAppointmentQuestion,
    isBookingQuestion,
    isAvailabilityQuestion,
  };
}

async function generateGeneralReply(messages: NormalizedChatMessage[]) {
  const modelId = process.env.GOOGLE_GENERATIVE_AI_MODEL || 'gemini-2.5-flash';
  const result = await generateText({
    model: google(modelId),
    messages,
    system: SYSTEM_PROMPT,
  });

  return result.text;
}

export async function generateLuzReply(messages: ChatMessage[]): Promise<string> {
  const safeMessages = normalizeChatMessages(messages);
  const lastUserMessage = [...safeMessages]
    .reverse()
    .find((msg) => msg.role === 'user')?.content || '';

  const {
    email,
    isExistingAppointmentQuestion,
    isBookingQuestion,
    isAvailabilityQuestion,
  } = getMessageIntent(lastUserMessage);

  const requestedAvailabilityDate = getRequestedAvailabilityDate(lastUserMessage);

  if (isAvailabilityQuestion && requestedAvailabilityDate) {
    const availability = await getAvailabilityForDate(requestedAvailabilityDate.date);

    if (!availability.configured) {
      return BOOKING_URL
        ? `Todavía no puedo consultar disponibilidad real desde el chat. Para ver horarios confirmados y reservar, entra aquí: ${BOOKING_URL}`
        : 'Todavía no puedo consultar disponibilidad real desde el chat. Para ver horarios confirmados y reservar, entra a la sección /agendar.';
    }

    if (availability.availableSlots.length === 0) {
      return BOOKING_URL
        ? `No veo espacios libres en el calendario interno para ${requestedAvailabilityDate.label} dentro del horario configurado. Para confirmar otras fechas disponibles, entra aquí: ${BOOKING_URL}`
        : `No veo espacios libres en el calendario interno para ${requestedAvailabilityDate.label} dentro del horario configurado. Para confirmar otras fechas disponibles, visita la sección /agendar.`;
    }

    const slots = availability.availableSlots
      .slice(0, 3)
      .map((slot) => formatSlotTime(slot.start))
      .join(', ');

    return BOOKING_URL
      ? `Según el calendario interno, veo posibles espacios libres para ${requestedAvailabilityDate.label}: ${slots}. Para confirmar disponibilidad real y reservar, entra aquí: ${BOOKING_URL}`
      : `Según el calendario interno, veo posibles espacios libres para ${requestedAvailabilityDate.label}: ${slots}. Para confirmar disponibilidad real y reservar, entra a la sección /agendar.`;
  }

  if (isBookingQuestion && !isExistingAppointmentQuestion) {
    return BOOKING_URL
      ? `Para ver los horarios disponibles y reservar tu sesión, puedes acceder directamente a nuestro calendario en: ${BOOKING_URL}\n\nTambién puedes ir a la sección /agendar de nuestra página. Allí verás la disponibilidad real y podrás confirmar tu cita en segundos.`
      : 'Para ver los horarios disponibles y reservar tu sesión, visita la sección /agendar de nuestra página. Allí encontrarás el calendario con la disponibilidad real.';
  }

  if (isExistingAppointmentQuestion && !email) {
    return 'Claro, puedo revisar tu cita. ¿Podrías indicarme el correo electrónico con el que te registraste al agendar?';
  }

  if (isExistingAppointmentQuestion && email) {
    let appointments: Array<{
      summary?: string;
      serviceName?: string;
      start?: string;
      startTime?: string;
    }> = [];
    let source: 'google' | 'local' | 'none' = 'none';

    if (isGoogleCalendarConfigured()) {
      const events = await getEventsByEmail(email);
      appointments = events;
      source = events.length > 0 ? 'google' : 'none';
    } else {
      const localAppts = await getUpcomingAppointmentsByEmail(email);
      appointments = localAppts;
      source = localAppts.length > 0 ? 'local' : 'none';
    }

    if (source === 'none' && !isGoogleCalendarConfigured()) {
      return `No pude verificar citas en este momento porque el sistema de calendario no está completamente configurado. Para confirmar tu reserva, visita${BOOKING_URL ? ` ${BOOKING_URL}` : ' la sección /agendar'} o revisa tu correo de confirmación de Google Calendar.`;
    }

    if (appointments.length === 0) {
      return `No encontré citas próximas para ${email}. Si acabas de reservar, es posible que tarde unos minutos en aparecer. También puedes revisar tu correo de confirmación de Google Calendar.`;
    }

    const listItems = appointments
      .map((appt) => {
        const title = ('summary' in appt ? appt.summary : appt.serviceName) ?? 'Sesión';
        const dateStr = ('start' in appt ? appt.start : appt.startTime) ?? '';
        const date = new Date(dateStr).toLocaleString('es-ES', {
          dateStyle: 'full',
          timeStyle: 'short',
        });
        return `• ${title} — ${date}`;
      })
      .join('\n');

    const count = appointments.length;
    return `Encontré ${count} cita${count === 1 ? '' : 's'} próxima${count === 1 ? '' : 's'} para ${email}:\n\n${listItems}\n\nSi necesitas cancelar o modificar tu cita, revisa el correo de confirmación de Google Calendar que recibiste al reservar.`;
  }

  return generateGeneralReply(safeMessages);
}
