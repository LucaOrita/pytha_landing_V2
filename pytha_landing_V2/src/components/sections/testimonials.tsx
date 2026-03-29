'use client';

import { InView } from '@/components/ui/in-view';
import { Marquee } from '@/components/magicui/marquee';

const TESTIMONIALS = [
  {
    quote:
      'Programul e clar structurat si ajungi la functii cu doar cateva clickuri. E o placere sa-l recomand.',
    author: 'Marco Muller',
    company: 'Holzmanufaktur Rottweil GmbH, Germania',
  },
  {
    quote:
      'De cand folosim PYTHA, erorile de productie au scazut dramatic. Exportul CNC ne economiseste ore.',
    author: 'Client verificat',
    company: 'Atelier mobilier, Romania',
  },
  {
    quote:
      'Am incercat SketchUp si AutoCAD — nimic nu se compara cu fluxul integrat din PYTHA.',
    author: 'Client verificat',
    company: 'Fabrica mobilier, Romania',
  },
];

const PARTNERS = [
  'Blum', 'Hettich', 'Homag', 'Biesse', 'SCM', 'Felder',
  'Hafele', 'Grass', 'Weeke', 'Holzma',
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        <InView className="mx-auto max-w-3xl text-balance text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Ateliere din toata lumea lucreaza cu{' '}
            <span className="text-gradient">PYTHA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            De la ateliere mici la fabrici cu zeci de angajati — PYTHA se
            adapteaza oricarui flux.
          </p>
        </InView>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-16">
          {TESTIMONIALS.map((t, i) => (
            <InView key={t.author} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <svg
                  className="mb-4 size-8 text-[#8a1820]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.3 2.5c-4 1.2-7 5-7 9.4 0 3.3 2.1 5.6 4.8 5.6 2.3 0 4.2-1.8 4.2-4.1 0-2.2-1.7-3.9-3.8-4-.4 0-.8.1-1.2.2.5-2.5 2.6-5.1 5.2-6.2L11.3 2.5zm11 0c-4 1.2-7 5-7 9.4 0 3.3 2.1 5.6 4.8 5.6 2.3 0 4.2-1.8 4.2-4.1 0-2.2-1.7-3.9-3.8-4-.4 0-.8.1-1.2.2.5-2.5 2.6-5.1 5.2-6.2L22.3 2.5z" />
                </svg>
                <p className="flex-1 text-base leading-relaxed text-gray-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>

      {/* Partner logos marquee */}
      <div className="mt-20">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
          Compatibil cu echipamente si feronerie de la
        </p>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8f8f8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8f8f8] to-transparent" />
          <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="flex items-center rounded-xl border border-gray-100 bg-white px-8 py-4 text-base font-semibold text-gray-400 shadow-sm transition-colors hover:text-[#8a1820]"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
