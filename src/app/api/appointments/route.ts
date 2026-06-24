import { NextResponse } from 'next/server';
import { getEventsByEmail, isGoogleCalendarConfigured } from '@/lib/google-calendar';
import { getUpcomingAppointmentsByEmail } from '@/lib/appointments';

/**
 * GET /api/appointments?email=paciente@ejemplo.com
 *
 * Consulta citas próximas.
 * Fuente primaria: Google Calendar API (si está configurada).
 * Fuente secundaria: archivo JSON local (solo en desarrollo).
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { error: 'El correo es obligatorio para consultar citas.' },
      { status: 400 },
    );
  }

  // Fuente primaria: Google Calendar API
  if (isGoogleCalendarConfigured()) {
    const events = await getEventsByEmail(email);
    return NextResponse.json({
      source: 'google_calendar',
      appointments: events.map((event) => ({
        id: event.id,
        serviceName: event.summary,
        startTime: event.start,
        endTime: event.end,
        status: event.status,
        htmlLink: event.htmlLink,
      })),
    });
  }

  // Fuente secundaria: JSON local (solo útil en desarrollo)
  const appointments = await getUpcomingAppointmentsByEmail(email);
  return NextResponse.json({
    source: 'local_json',
    appointments: appointments.map((appointment) => ({
      id: appointment.id,
      patientName: appointment.patientName,
      serviceName: appointment.serviceName,
      startTime: appointment.startTime,
      endTime: appointment.endTime,
      status: appointment.status,
    })),
  });
}
