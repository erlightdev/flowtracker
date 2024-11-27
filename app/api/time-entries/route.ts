import { NextResponse } from 'next/server';
import { createTimeEntry, getTimeEntries } from '@/lib/time-entries';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const timeEntry = await createTimeEntry(data);
    return NextResponse.json(timeEntry);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create time entry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const entries = await getTimeEntries();
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch time entries' }, { status: 500 });
  }
}