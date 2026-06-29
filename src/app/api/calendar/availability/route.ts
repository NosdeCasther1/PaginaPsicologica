import { NextResponse } from 'next/server';
import {
  getAvailabilityForDate,
  getRelativeCalendarDate,
} from '@/lib/google-calendar';

function isValidDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const requestedDate = searchParams.get('date');
  const date = requestedDate || getRelativeCalendarDate(0);

  if (!isValidDate(date)) {
    return NextResponse.json(
      { error: 'El parámetro date debe tener formato YYYY-MM-DD.' },
      { status: 400 },
    );
  }

  const availability = await getAvailabilityForDate(date);

  return NextResponse.json(availability);
}
