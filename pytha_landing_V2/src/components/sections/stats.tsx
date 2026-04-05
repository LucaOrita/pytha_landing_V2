'use client';

import { NumberTicker } from '@/components/magicui/number-ticker';

const STATS = [
  {
    value: 30,
    suffix: '%',
    label: 'Reducere erori producție',
    description:
      'Fluxul integrat CAD-CNC elimină erorile de transfer manual.',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Timp de proiectare economisit',
    description:
      'Generatoare, parametrizare și automatizare în fiecare pas.',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Țări cu utilizatori PYTHA',
    description:
      'De la ateliere mici la fabrici mari, pe tot globul.',
  },
  {
    value: 32500,
    suffix: '+',
    label: 'Ateliere și fabrici',
    description:
      'Profesioniști care proiectează zilnic cu PYTHA.',
  },
];

export default function Stats() {
  return (
    <section className="section-padding bg-card">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-[#8a1820] md:text-5xl">
                <NumberTicker
                  value={stat.value}
                  duration={1400}
                  className="text-4xl font-bold text-[#8a1820] md:text-5xl"
                />
                <span>{stat.suffix}</span>
              </div>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#8a1820]" />
              <p className="mt-4 text-base font-bold">
                {stat.label}
              </p>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}