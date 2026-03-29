import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PricingTable from '@/components/sections/pricing-table';

export const metadata: Metadata = {
  title: 'Preturi PYTHA 3D-CAD — Licenta de la 99€/luna',
  description:
    'Preturi transparente PYTHA: licenta permanenta sau abonament lunar. Module individuale sau pachet complet. Fara costuri ascunse.',
  openGraph: {
    title: 'Preturi PYTHA 3D-CAD — Licenta de la 99€/luna',
    type: 'website',
  },
};

const PACKAGES = [
  {
    name: 'Starter',
    subtitle: 'Ideal pentru ateliere mici',
    monthly: '99',
    permanent: '4.950',
    highlighted: false,
    features: [
      'Modelare 2D/3D solida',
      'Cotare automata si planse tehnice',
      'Randare raytracer integrata',
      'Export DWG/DXF/STL/PDF',
    ],
    href: '/solicita-oferta?pachet=starter',
  },
  {
    name: 'Profesional',
    subtitle: 'Flux complet de la design la CNC',
    monthly: '253',
    permanent: '~11.840',
    highlighted: true,
    features: [
      'Tot din Starter',
      'Workshop — imbinari automate, cant, CNC',
      'Liste piese cu coduri QR',
      'Nesting — optimizare debitare',
      'Export CNC (Homag, Biesse, SCM)',
    ],
    href: '/solicita-oferta?pachet=profesional',
  },
  {
    name: 'Enterprise',
    subtitle: 'Solutia completa pentru fabrici',
    monthly: '342',
    permanent: '~15.870',
    highlighted: false,
    features: [
      'Tot din Profesional',
      'Suprafete libere (Freeform)',
      'Biblioteca 35.000+ obiecte',
      'Randare fotorealista (RadioLab)',
      'Proiectare parametrica',
    ],
    href: '/solicita-oferta?pachet=enterprise',
  },
];

const FAQS = [
  {
    question: 'Ce include licenta permanenta?',
    answer:
      'Dreptul de utilizare fara limita de timp. Nu include actualizari — acestea sunt disponibile prin Acordul de Service anual (840€/an).',
  },
  {
    question: 'Pot adauga module ulterior?',
    answer:
      'Da, modulele sunt independente. Poti incepe cu pachetul de baza si adauga Workshop, Nesting sau CAM oricand.',
  },
  {
    question: 'Exista discount pentru mai multe licente?',
    answer:
      'Da, la achizitia a 2+ module identice aplicam discount progresiv. Contacteaza-ne pentru oferta personalizata.',
  },
  {
    question: 'Oferiti trial gratuit?',
    answer:
      'Oferim demonstratii live gratuite de 15 minute unde iti aratam exact cum functioneaza PYTHA pe proiectele tale.',
  },
  {
    question: 'Ce sistem de operare este necesar?',
    answer:
      'PYTHA functioneaza pe Windows 10/11 (64-bit). Cerinte hardware minime: procesor modern, 8GB RAM, placa video dedicata pentru randare.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'PYTHA 3D-CAD',
  description: 'Software CAD/CAM 3D complet pentru proiectare mobilier',
  brand: { '@type': 'Brand', name: 'PYTHA Lab GmbH' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 99,
    highPrice: 15870,
    offerCount: 3,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function PreturiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Preturi transparente,{' '}
              <span className="text-gradient">fara surprize</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
              Alege modulele potrivite. Licenta permanenta sau abonament lunar — tu decizi.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  pkg.highlighted
                    ? 'border-2 border-[#8a1820] bg-white shadow-xl md:scale-105'
                    : 'border-gray-100 bg-white shadow-md'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#8a1820] px-4 py-1 text-xs font-semibold text-white">
                    Recomandat
                  </span>
                )}

                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{pkg.subtitle}</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#8a1820]">
                      {pkg.monthly}€
                    </span>
                    <span className="text-sm text-gray-500">/luna</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">
                    sau {pkg.permanent}€ licenta permanenta
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fff1f2]">
                        <Check className="size-3 text-[#8a1820]" />
                      </div>
                      <span className="text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 w-full"
                  variant={pkg.highlighted ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={pkg.href}>Solicita oferta</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module table (client component for toggle) */}
      <section className="section-padding">
        <div className="container">
          <PricingTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Intrebari despre <span className="text-gradient">preturi</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl md:mt-16">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md md:p-12">
              <Accordion type="single" collapsible>
                {FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-base font-semibold hover:text-[#8a1820]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-relaxed text-gray-500">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Nu esti sigur ce pachet ti se potriveste?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Echipa noastra analizeaza nevoile tale si iti recomanda solutia optima — gratuit.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/solicita-prezentare">Programeaza o consultanta gratuita</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
