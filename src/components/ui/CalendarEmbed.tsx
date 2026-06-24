'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CalendarDays, ExternalLink } from 'lucide-react';

interface CalendarEmbedProps {
  calendarUrl: string;
  className?: string;
}

/**
 * CalendarEmbed Component
 * Embeds a Google Calendar Appointment Schedule booking page via iframe.
 * Falls back to a link button when the URL is not configured.
 */
const CalendarEmbed: React.FC<CalendarEmbedProps> = ({ calendarUrl, className }) => {
  const hasUrl = calendarUrl && calendarUrl.trim() !== '';

  if (!hasUrl) {
    return (
      <div
        className={cn(
          'w-full flex flex-col items-center justify-center gap-6 py-20 rounded-2xl border border-dashed border-gray-300 bg-gray-50',
          className,
        )}
      >
        <div className="flex flex-col items-center gap-3 text-center px-4">
          <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
            <CalendarDays className="text-teal-600" size={28} />
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            El calendario de citas aún no está configurado. Por favor, agrega la variable{' '}
            <code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">
              NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL
            </code>{' '}
            en Vercel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-300',
        className,
      )}
    >
      {/* Enlace externo de respaldo, visible en dispositivos donde el iframe pueda bloquearse */}
      <div className="flex justify-end px-4 pt-3 pb-1">
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-800 font-medium transition-colors"
        >
          <ExternalLink size={13} />
          Abrir en nueva pestaña
        </a>
      </div>

      <iframe
        src={calendarUrl}
        title="Agendar cita — Google Calendar"
        className="w-full"
        style={{ height: '660px', border: 'none' }}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
      />
    </div>
  );
};

export default CalendarEmbed;
