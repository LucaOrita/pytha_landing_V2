import dynamic from 'next/dynamic';

import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import VideoSection from '@/components/sections/video-section';

// Below-the-fold — dynamic imports (PERFORMANCE_STANDARDS rule 3)
const FeaturesAlternating = dynamic(() => import('@/components/sections/features-alternating'));
const PartnerSection = dynamic(() => import('@/components/sections/partner-section'));
const SupportPreview = dynamic(() => import('@/components/sections/support-preview'));
const FaqSection = dynamic(() => import('@/components/sections/faq-section'));

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <VideoSection />
      <FeaturesAlternating />
      <PartnerSection />
      <SupportPreview />
      <FaqSection />
    </>
  );
}
