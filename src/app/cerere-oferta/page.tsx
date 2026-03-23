import type { Metadata } from 'next';

import CerereOfertaClient from './cerere-oferta-client';

export const metadata: Metadata = {
  title: {
    absolute: 'Cere ofertă transport | DACODA SRL',
  },
  description:
    'Completează formularul și primești ofertă personalizată pentru transport rutier, ADR, frigorific sau agabaritic în 2 ore. Sau conversează cu agentul nostru AI.',
  alternates: {
    canonical: 'https://dacoda.ro/cerere-oferta',
  },
  openGraph: {
    title: 'Cere ofertă transport | DACODA SRL',
    description:
      'Formular de cerere ofertă pentru transport internațional. Răspuns în 2 ore.',
    url: 'https://dacoda.ro/cerere-oferta',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function CerereOfertaPage() {
  return (
    <>
      {/* Server-rendered hero — instant LCP, no JS needed */}
      <section
        className="pt-28 pb-12 lg:pt-32 lg:pb-16"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="container px-4 text-center lg:px-6">
          <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Cere o ofertă
          </h1>
          <p className="mx-auto max-w-xl text-base text-white/80">
            Completează formularul sau lasă agentul să te ghideze. Răspundem în
            maxim 2 ore în zilele lucrătoare.
          </p>
        </div>
      </section>

      <CerereOfertaClient />
    </>
  );
}
