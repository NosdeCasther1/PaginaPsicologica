export const siteConfig = {
  name: 'Salud Mental',
  description: 'Terapia psicológica 100% online. Atención profesional y cálida para niños, adolescentes, parejas, adultos mayores y ejecutivos.',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://pagina-psicologica.vercel.app',
  links: {
    // URL pública de Google Calendar Appointment Schedule para embeber / redirigir
    // Formato: https://calendar.google.com/calendar/appointments/schedules/<SCHEDULE_ID>
    calendarUrl: process.env.NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL || '',
    whatsapp: 'https://wa.me/5021234567',
  },
  contact: {
    email: process.env.CONTACT_EMAIL || 'contacto@saludmental.com',
  },
  googleCalendar: {
    // ID del calendario donde aparecen las citas de Appointment Schedule
    calendarId: process.env.GOOGLE_CALENDAR_ID || '',
  },
};
