'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CalendarEmbedProps {
  calendarUrl: string;
  className?: string;
}

/**
 * CalendarEmbed Component
 * Renders an optimized iframe for Google Calendar Appointment Scheduling.
 */
const CalendarEmbed: React.FC<CalendarEmbedProps> = ({ calendarUrl, className }) => {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl",
        className
      )}
    >
      <iframe
        src={calendarUrl}
        width="100%"
        height="700"
        frameBorder="0"
        scrolling="no"
        className="min-h-[700px] w-full"
        title="Agenda tu cita - Google Calendar"
      />
    </div>
  );
};

export default CalendarEmbed;
