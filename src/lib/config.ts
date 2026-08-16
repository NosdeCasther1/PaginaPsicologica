export const siteConfig = {
  name: 'Selah',
  description: 'Terapia psicológica online en toda Guatemala y presencial exclusivamente en Huehuetenango. Atención profesional y humana para adultos, parejas, niños, adolescentes, familias y adultos mayores.',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://selahpsicologiagt.vercel.app',
  links: {
    // URL pública de Google Calendar Appointment Schedule para embeber / redirigir
    // Formato: https://calendar.google.com/calendar/appointments/schedules/<SCHEDULE_ID>
    calendarUrl:
      process.env.NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL ||
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0C26pVwMpuPTFnWqlsf5mIyNZPlKqsLTmdttDctx338p4QBFrIwJSi1VeLPVlKpeRokyJz2_ej?gv=true',
    whatsapp: 'https://wa.me/50251455816',
    facebook: 'https://www.facebook.com/SelahPsicologiaGt',
  },
  contact: {
    email: process.env.CONTACT_EMAIL || 'selahpsicologiagt@gmail.com',
  },
  googleCalendar: {
    // ID del calendario donde aparecen las citas de Appointment Schedule
    calendarId: process.env.GOOGLE_CALENDAR_ID || '',
  },
};
