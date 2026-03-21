import posthog from 'posthog-js';
import sdk from './payload';

export async function signUpToWaitlist(email: string): Promise<void> {
  posthog.capture('waitlist_signup');

  await sdk.create({
    collection: 'newsletter',
    data: { email },
  });
}
