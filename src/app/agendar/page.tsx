import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import CalendarEmbed from '@/components/ui/CalendarEmbed';

export const metadata: Metadata = {
  title: 'Agendar Cita',
  description: 'Reserva tu sesión de terapia online en minutos. Elige el horario que mejor se adapte a ti. Proceso 100% confidencial y seguro.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/agendar`,
  },
  openGraph: {
    title: 'Agendar Cita | Salud Mental',
    description: 'Reserva tu sesión de terapia online en minutos. Elige el horario que mejor se adapte a ti.',
    url: `${siteConfig.baseUrl}/agendar`,
  },
};

export default function AgendarPage() {
  const calendarUrl = siteConfig.links.calendarUrl;

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Agendar Cita
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Selecciona el mejor horario para tu sesión
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Elige una fecha y hora en el calendario a continuación para reservar tu espacio.
            Todo el proceso es 100% confidencial y seguro.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-2 sm:p-4 border border-gray-100">
          <CalendarEmbed calendarUrl={calendarUrl} />
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Al agendar recibirás un correo de confirmación de Google Calendar con los detalles de tu sesión.
        </p>
      </div>
    </main>
  );
}
