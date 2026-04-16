import dynamic from 'next/dynamic';

import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';

export const revalidate = 3600;

// Below-the-fold - dynamic imports (PERFORMANCE_STANDARDS rule 3)
const FeaturesAlternating = dynamic(() => import('@/components/sections/features-alternating'));
const FeaturesGrid = dynamic(() => import('@/components/sections/features-grid'));
const VideoSection = dynamic(() => import('@/components/sections/video-section'));
const Testimonials = dynamic(() => import('@/components/sections/testimonials'));
const CtaFinal = dynamic(() => import('@/components/sections/cta-final'));

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturesAlternating />
      <FeaturesGrid />
      <VideoSection />
      <Testimonials />
      <CtaFinal />
    </>
  );
}
