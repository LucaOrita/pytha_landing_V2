import DacodaBlogPreview from '@/components/sections/dacoda-blog-preview';
import DacodaCta from '@/components/sections/dacoda-cta';
import DacodaHero from '@/components/sections/dacoda-hero';
import DacodaServices from '@/components/sections/dacoda-services';
import DacodaStats from '@/components/sections/dacoda-stats';
import DacodaTestimonials from '@/components/sections/dacoda-testimonials';
import DacodaTrustBar from '@/components/sections/dacoda-trust-bar';
import DacodaWhy from '@/components/sections/dacoda-why';

export default function Home() {
  return (
    <>
      <DacodaHero />
      <DacodaTrustBar />
      <DacodaWhy />
      <DacodaServices />
      <DacodaStats />
      <DacodaTestimonials />
      <DacodaBlogPreview />
      <DacodaCta />
    </>
  );
}
