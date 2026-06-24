import { NextResponse } from 'next/server';

/**
 * Este endpoint de webhook de Calendly ya no está en uso.
 * La integración de agendamiento migró a Google Calendar Appointment Schedule.
 * Se mantiene el archivo para evitar errores 404 en caso de que Calendly
 * siga enviando notificaciones a esta URL.
 */
export async function POST() {
  return NextResponse.json(
    { message: 'Endpoint deprecado. La clínica usa Google Calendar Appointment Schedule.' },
    { status: 410 },
  );
}
