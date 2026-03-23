import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import DacodaBlogPreview from '@/components/sections/dacoda-blog-preview';
import DacodaHero from '@/components/sections/dacoda-hero';
import DacodaPartners from '@/components/sections/dacoda-partners';
import DacodaServices from '@/components/sections/dacoda-services';
import DacodaTrustBar from '@/components/sections/dacoda-trust-bar';
import DacodaWhy from '@/components/sections/dacoda-why';

const DacodaStats = dynamic(() => import('@/components/sections/dacoda-stats'));
const DacodaTestimonials = dynamic(
  () => import('@/components/sections/dacoda-testimonials'),
);
const DacodaCta = dynamic(() => import('@/components/sections/dacoda-cta'));

export const metadata: Metadata = {
  title: {
    absolute: 'DACODA SRL | Transport Rutier Internațional din 1993',
  },
  description:
    'Casă de expediții cu capital 100% românesc. Transport rutier FTL/LTL, ADR, frigorific, agabaritic în Europa, CSI și Asia. 32 ani experiență. Cerere ofertă în 2 ore.',
  alternates: {
    canonical: 'https://dacoda.ro',
  },
  openGraph: {
    title: 'DACODA SRL | Transport Rutier Internațional din 1993',
    description:
      'Transport marfă rutier, ADR, frigorific, agabaritic în 40+ țări. 32 ani experiență. Capital 100% românesc.',
    url: 'https://dacoda.ro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DACODA SRL casă de expediții transport rutier internațional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DACODA SRL | Transport Rutier Internațional',
    description: 'Transport marfă în Europa, CSI și Asia. 32 ani experiență.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <DacodaHero />
      <DacodaTrustBar />
      <DacodaWhy />
      <DacodaServices />
      <DacodaStats />
      <DacodaTestimonials />
      <DacodaPartners />
      <DacodaBlogPreview />
      <DacodaCta />
    </>
  );
}
