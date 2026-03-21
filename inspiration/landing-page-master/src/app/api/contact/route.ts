import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/contact';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ error: 'Phone is required' }, { status: 400 });
    }

    if (!company || typeof company !== 'string') {
      return NextResponse.json(
        { error: 'Company is required' },
        { status: 400 },
      );
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      );
    }

    await submitContactForm({ name, email, phone, company, message });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 },
    );
  }
}
