import FAQSection from '@/components/sections/faq-section';
import { getGlobals } from '@/lib/globals';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Întrebări frecvente',
  description: 'Răspunsuri la cele mai frecvente întrebări despre serviciile și soluțiile DOCO pentru verificarea CMR-urilor și a documentelor de transport.',
}

export default async function FAQPage() {
  const globals = await getGlobals();

  return (
    <div className="min-h-screen">
      <FAQSection faqData={globals.FAQ} />
      {/* <TestimonialsMarquee /> */}
    </div>
  );
}
