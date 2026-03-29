'use client';

import { NumberTicker } from '@/components/magicui/number-ticker';

const STATS = [
  {
    value: 100,
    suffix: '%',
    label: 'Eliminarea erorilor de transfer',
    description:
      'Proiectul 3D devine automat fisier CNC, fara interpretari gresite.',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Ani de experienta',
    description:
      'Echipa PYTHA Lab ofera solutii software avansate din 1984.',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Timp de executie redus',
    description:
      'Planificare automata, nesting inteligent si export CAM direct.',
  },
];

export default function Stats() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl font-bold text-[#8a1820] md:text-6xl">
                <NumberTicker
                  value={stat.value}
                  duration={1400}
                  className="text-5xl font-bold text-[#8a1820] md:text-6xl"
                />
                <span>{stat.suffix}</span>
              </div>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#8a1820]" />
              <p className="mt-4 text-lg font-bold">
                {stat.label}
              </p>
              <p className="text-muted-foreground mt-1 text-sm leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
