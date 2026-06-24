import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { getEventsByEmail, isGoogleCalendarConfigured } from '@/lib/google-calendar';
import { getUpcomingAppointmentsByEmail } from '@/lib/appointments';
import { siteConfig } from '@/lib/config';

type ChatPart = {
  type?: string;
  text?: string;
};

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content?: string;
  parts?: ChatPart[];
};

function textStreamResponse(delta: string) {
  return new Response(
    [
      'data: {"type":"start"}',
      '',
      'data: {"type":"start-step"}',
      '',
      'data: {"type":"text-start","id":"0"}',
      '',
      `data: ${JSON.stringify({ type: 'text-delta', id: '0', delta })}`,
      '',
      'data: {"type":"text-end","id":"0"}',
      '',
      'data: {"type":"finish-step"}',
      '',
      'data: {"type":"finish","finishReason":"stop"}',
      '',
      'data: [DONE]',
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      },
    },
  );
}

const BOOKING_URL = siteConfig.links.calendarUrl;

const SYSTEM_PROMPT = `Eres "Luz", asistente de recepción de la clínica "Salud Mental". Eres cálida, empática y concisa. Respondes en español.

Servicios disponibles: Terapia Individual, Terapia de Pareja y Terapia Infantil (100% online).

REGLAS ESTRICTAS:
- NUNCA des diagnósticos médicos.
- NUNCA inventes horarios, fechas ni disponibilidad. No tienes acceso directo al calendario en tiempo real.
- NUNCA menciones "Calendly" ni ninguna otra plataforma de terceros.
- Si el usuario quiere agendar o ver horarios disponibles, SIEMPRE dile que vaya a la sección /agendar de la página${BOOKING_URL ? ` o visite directamente: ${BOOKING_URL}` : ''}.
- Si el usuario quiere consultar una cita ya agendada, pídele el correo con el que se registró y Luz consultará el sistema.
- Si no puedes confirmar disponibilidad real, SIEMPRE redirige al calendario público. Es mejor admitir que no sabes que inventar una fecha.
- Mantén las respuestas cortas (máximo 3-4 oraciones) a menos que el usuario pida más detalle.`;

export async function POST(req: Request) {
  try {
    const { messages = [] }: { messages?: ChatMessage[] } = await req.json();
    const modelId = process.env.GOOGLE_GENERATIVE_AI_MODEL || 'gemini-2.5-flash';

    const safeMessages = messages.map((msg) => ({
      role: msg.role,
      content:
        msg.content ||
        (msg.parts && msg.parts.length > 0 ? msg.parts[0].text : '') ||
        '',
    }));

    const lastUserMessage = [...safeMessages]
      .reverse()
      .find((msg) => msg.role === 'user')?.content || '';

    const emailMatch = lastUserMessage.match(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    );
    const email = emailMatch?.[0];

    const isExistingAppointmentQuestion =
      /(mi cita|mis citas|cita agendada|citas agendadas|revisar mi cita|consultar mi cita|confirmar mi cita|tengo cita)/i.test(
        lastUserMessage,
      );

    const isBookingQuestion =
      /(quiero reservar|quiero agendar|agendar cita|reservar cita|cita disponible|citas disponibles|horarios disponibles|disponibilidad|para manana|para mañana|mañana|manana|cuando puedo|qué horarios|que horarios)/i.test(
        lastUserMessage,
      );

    // El usuario quiere agendar → redirigir al calendario público
    if (isBookingQuestion && !isExistingAppointmentQuestion) {
      const bookingMsg = BOOKING_URL
        ? `Para ver los horarios disponibles y reservar tu sesión, puedes acceder directamente a nuestro calendario en: ${BOOKING_URL}\n\nTambién puedes ir a la sección /agendar de nuestra página. Allí verás la disponibilidad real y podrás confirmar tu cita en segundos.`
        : `Para ver los horarios disponibles y reservar tu sesión, visita la sección /agendar de nuestra página. Allí encontrarás el calendario con la disponibilidad real.`;
      return textStreamResponse(bookingMsg);
    }

    // El usuario quiere consultar una cita existente pero no dio correo
    if (isExistingAppointmentQuestion && !email) {
      return textStreamResponse(
        'Claro, puedo revisar tu cita. ¿Podrías indicarme el correo electrónico con el que te registraste al agendar?',
      );
    }

    // El usuario dio su correo → consultar Google Calendar (o JSON local en dev)
    if (isExistingAppointmentQuestion && email) {
      let appointments: Array<{ summary?: string; serviceName?: string; start?: string; startTime?: string }> = [];
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
        // API no configurada → redirigir al calendario
        return textStreamResponse(
          `No pude verificar citas en este momento porque el sistema de calendario no está completamente configurado. Para confirmar tu reserva, visita${BOOKING_URL ? ` ${BOOKING_URL}` : ' la sección /agendar'} o revisa tu correo de confirmación de Google Calendar.`,
        );
      }

      if (appointments.length === 0) {
        return textStreamResponse(
          `No encontré citas próximas para ${email}. Si acabas de reservar, es posible que tarde unos minutos en aparecer. También puedes revisar tu correo de confirmación de Google Calendar.`,
        );
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
      return textStreamResponse(
        `Encontré ${count} cita${count === 1 ? '' : 's'} próxima${count === 1 ? '' : 's'} para ${email}:\n\n${listItems}\n\nSi necesitas cancelar o modificar tu cita, revisa el correo de confirmación de Google Calendar que recibiste al reservar.`,
      );
    }

    // Conversación general → Gemini con el system prompt actualizado
    const result = streamText({
      model: google(modelId),
      messages: safeMessages,
      system: SYSTEM_PROMPT,
    });

    return result.toUIMessageStreamResponse();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : error;
    console.error('ERROR FATAL EN EL SERVIDOR:', message);
    return new Response(
      JSON.stringify({ error: 'Hubo un problema al contactar a la IA.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
