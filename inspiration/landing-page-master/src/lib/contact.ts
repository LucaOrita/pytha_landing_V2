import posthog from 'posthog-js';
import sdk from './payload';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  posthog.capture('contact_form_submission', {
    company: data.company,
  });

  await sdk.create({
    collection: 'contact',
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
    },
  });
}
