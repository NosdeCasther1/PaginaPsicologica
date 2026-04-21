'use client';

import React from 'react';
import CalendarEmbed from '@/components/ui/CalendarEmbed';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactoPage() {
  const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AQUI_VA_EL_ID_REAL";

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reserva tu Primera Sesión
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el horario que mejor se adapte a tus necesidades. La sesión se realizará vía Google Meet de forma totalmente privada y segura.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-blue-600" />
                ¿Cómo funciona?
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-600">Selecciona un día y hora disponible en el calendario.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-600">Completa tus datos básicos para confirmar la cita.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-600">Recibirás un correo de confirmación con el enlace de Google Meet.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 opacity-80" />
                  <span>contacto@saludmental.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 opacity-80" />
                  <span>+52 (55) 1234 5678</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 opacity-80" />
                  <span>Consulta Online / CDMX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Column */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
            <CalendarEmbed 
              calendarUrl={calendarUrl} 
              className="h-[800px]" 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
