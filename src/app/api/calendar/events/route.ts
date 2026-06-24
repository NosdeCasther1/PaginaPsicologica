import { NextResponse } from 'next/server';
import { getEventsByEmail, isGoogleCalendarConfigured } from '@/lib/google-calendar';

/**
 * GET /api/calendar/events?email=paciente@ejemplo.com
 *
 * Consulta los próximos eventos de Google Calendar para un correo dado.
 * Requiere que la Service Account esté configurada y que el calendario
 * haya sido compartido con ella (ver README).
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { error: 'El parámetro ?email es obligatorio.' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Formato de correo inválido.' },
      { status: 400 },
    );
  }

  if (!isGoogleCalendarConfigured()) {
    return NextResponse.json(
      {
        configured: false,
        events: [],
        message:
          'Google Calendar API no está configurada. Agrega GOOGLE_CALENDAR_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL y GOOGLE_SERVICE_ACCOUNT_KEY en Vercel.',
      },
      { status: 200 },
    );
  }

  const events = await getEventsByEmail(email);

  return NextResponse.json({
    configured: true,
    events: events.map((event) => ({
      id: event.id,
      summary: event.summary,
      start: event.start,
      end: event.end,
      status: event.status,
      htmlLink: event.htmlLink,
    })),
  });
}
