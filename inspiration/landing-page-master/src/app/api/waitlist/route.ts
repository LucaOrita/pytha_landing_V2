import { NextRequest, NextResponse } from 'next/server';
import { signUpToWaitlist } from '@/lib/waitlist';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await signUpToWaitlist(email);

    return NextResponse.json(
      { message: 'Successfully added to waitlist' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 },
    );
  }
}
