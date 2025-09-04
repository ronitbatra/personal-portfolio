import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // TODO: integrate with email provider or webhook.
  console.log('Contact form', data);
  return NextResponse.json({ ok: true });
}
