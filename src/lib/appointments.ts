import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export type AppointmentStatus = 'scheduled' | 'canceled';

export type Appointment = {
  id: string;
  calendlyEventUri?: string;
  calendlyInviteeUri?: string;
  patientName: string;
  patientEmail: string;
  serviceName: string;
  startTime: string;
  endTime?: string;
  status: AppointmentStatus;
  createdAt: string;
  updatedAt: string;
};

const dataDir = path.join(process.cwd(), 'data');
const appointmentsPath = path.join(dataDir, 'appointments.json');

async function readAppointments(): Promise<Appointment[]> {
  try {
    const file = await readFile(appointmentsPath, 'utf8');
    return JSON.parse(file) as Appointment[];
  } catch {
    return [];
  }
}

async function writeAppointments(appointments: Appointment[]) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(appointmentsPath, JSON.stringify(appointments, null, 2), 'utf8');
}

export async function upsertAppointment(appointment: Appointment) {
  const appointments = await readAppointments();
  const index = appointments.findIndex(
    (item) =>
      item.calendlyInviteeUri === appointment.calendlyInviteeUri ||
      item.calendlyEventUri === appointment.calendlyEventUri ||
      item.id === appointment.id,
  );

  if (index >= 0) {
    appointments[index] = {
      ...appointments[index],
      ...appointment,
      updatedAt: new Date().toISOString(),
    };
  } else {
    appointments.push(appointment);
  }

  await writeAppointments(appointments);
  return appointment;
}

export async function cancelAppointmentByCalendlyUri(uri?: string) {
  if (!uri) return null;

  const appointments = await readAppointments();
  const index = appointments.findIndex(
    (item) => item.calendlyInviteeUri === uri || item.calendlyEventUri === uri,
  );

  if (index < 0) return null;

  appointments[index] = {
    ...appointments[index],
    status: 'canceled',
    updatedAt: new Date().toISOString(),
  };

  await writeAppointments(appointments);
  return appointments[index];
}

export async function getUpcomingAppointmentsByEmail(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const now = Date.now();

  const appointments = await readAppointments();
  return appointments
    .filter((appointment) => appointment.patientEmail.toLowerCase() === normalizedEmail)
    .filter((appointment) => appointment.status === 'scheduled')
    .filter((appointment) => new Date(appointment.startTime).getTime() >= now)
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
    );
}
