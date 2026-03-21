import { ArrowRight, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import DacodaServiceCta from '@/components/sections/dacoda-service-cta';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Breadcrumb from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title:
    'Transport Agabaritic — Mărfuri Grele și Supradimensionate | DACODA SRL',
  description:
    'Transport agabaritic specializat în Europa. Mărfuri grele, supradimensionate — autorizații, escortă, ancorare. Cazuri reale DACODA.',
};

const criteria = [
  { emoji: '📏', text: 'Lungime > 12 m sau lățime > 2,55 m' },
  { emoji: '⬆️', text: 'Înălțime > 4 m (cu marfă)' },
  { emoji: '⚖️', text: 'Greutate totală > 40 tone' },
  { emoji: '🔄', text: 'Formă sau echilibru neobișnuit' },
];

const caseStudies = [
  {
    route: 'AT → BG',
    routeFull: 'Austria → Bulgaria',
    dimensions: '11.7 × 2.5 × 3.1 m',
    weight: '15 tone',
    client: 'GOWEIL Maschinenbau GmbH',
  },
  {
    route: 'DE → RO',
    routeFull: 'Germania → România',
    dimensions: '13.7 × 2.55 × 3.2 m (depășit)',
    weight: '17 tone',
    client: 'FARMTECH',
  },
  {
    route: 'BE → RO',
    routeFull: 'Belgia → România',
    dimensions: '11 × 2.85 × 3.4 m (depășit)',
    weight: '32 tone',
    client: 'REMAT MARAMURES',
  },
];

const serviceIncludes = [
  'Calculul rutei optime (poduri, înălțimi, restricții)',
  'Obținerea autorizațiilor de transport special',
  'Vehicul specializat (lowboy, platformă extensibilă)',
  'Ancorare profesională a mărfii',
  'Escortă (acolo unde e obligatorie)',
  'Documentație completă CMR + autorizații',
  'Coordonare cu autoritățile rutiere',
];

const faqs = [
  {
    q: 'Cât durează obținerea autorizațiilor?',
    a: 'Depinde de rută și de țările tranzitate. În general 3–7 zile lucrătoare. Planificați din timp!',
  },
  {
    q: 'Organizați și escortă?',
    a: 'Da, pentru transporturile care depășesc limitele legale și necesită escortă poliție sau pilot car.',
  },
  {
    q: 'Care e dimensiunea maximă transportabilă?',
    a: 'Nu există o limită fixă — depinde de autorizațiile obținute. Am transportat mărfuri de până la 32 tone cu gabarit depășit.',
  },
];

export default function TransportAgabariticPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative"
        style={{ backgroundColor: 'var(--dacoda-navy)' }}
      >
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Acasă', href: '/' },
                { label: 'Servicii', href: '/servicii' },
                { label: 'Transport Agabaritic' },
              ]}
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transport Agabaritic
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Mărfuri grele și supradimensionate — organizăm tot procesul de la
            autorizații până la livrare.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/cerere-oferta"
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              Cere ofertă
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>

      {/* Ce este transportul agabaritic */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-6 text-center text-3xl font-bold md:text-4xl">
            Ce este transportul agabaritic?
          </h2>

          <p className="text-dacoda-gray mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed md:text-lg">
            Transportul agabaritic implică mărfuri care depășesc dimensiunile
            sau greutatea standard admise în trafic normal. Necesită autorizații
            speciale, vehicule specializate (lowboy, platforme extensibile) și
            uneori escortă.
          </p>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {criteria.map((c) => (
              <div
                key={c.text}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <span className="text-2xl">{c.emoji}</span>
                <span className="text-dacoda-navy text-sm font-medium">
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cazuri reale */}
      <section className="bg-[var(--dacoda-light)]">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Cazuri reale
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                {/* Placeholder image */}
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-500">
                      {cs.route}
                    </p>
                    <p className="text-xs text-gray-400">
                      Imagine transport agabaritic
                    </p>
                  </div>
                  <span className="bg-dacoda-orange absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white">
                    Caz real
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-dacoda-navy mb-3 text-base font-bold">
                    {cs.routeFull}
                  </h3>
                  <div className="text-dacoda-gray space-y-1 text-sm">
                    <p>
                      <strong className="text-dacoda-navy">Gabarit:</strong>{' '}
                      {cs.dimensions}
                    </p>
                    <p>
                      <strong className="text-dacoda-navy">Greutate:</strong>{' '}
                      {cs.weight}
                    </p>
                    <p>
                      <strong className="text-dacoda-navy">Client:</strong>{' '}
                      {cs.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce includem în serviciu */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Ce includem în serviciu
          </h2>

          <div className="mx-auto max-w-2xl space-y-4">
            {serviceIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-dacoda-navy text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <DacodaServiceCta title="Ai o marfă agabaritică de transportat?" />

      {/* FAQ */}
      <section className="bg-white">
        <div className="container px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
            Întrebări frecvente
          </h2>

          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-dacoda-navy text-left text-base font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-dacoda-gray text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
