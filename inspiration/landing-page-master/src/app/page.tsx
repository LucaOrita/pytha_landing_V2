import { Cta15 } from '@/components/cta15';
import FAQSection from '@/components/sections/faq-section';
import FeaturesGrid from '@/components/sections/features-grid';
import FeaturesShowcase from '@/components/sections/features-showcase';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';
import { getGlobals } from '@/lib/globals';

export default async function Home() {
  const global = await getGlobals();

  return (
    <>
      <Hero />
      <Logos />
      {/* <FeaturesCarousel /> */}
      <FeaturesShowcase />
      <FeaturesGrid />
      <Cta15 />
      <Testimonials />
      <Pricing />
      <FAQSection faqData={global.FAQ} />
    </>
  );
}
