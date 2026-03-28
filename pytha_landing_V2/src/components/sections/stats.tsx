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
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-card text-card-foreground rounded-md border p-6 text-center shadow-sm"
            >
              <div className="text-4xxl font-medium md:text-5xl">
                <NumberTicker
                  value={stat.value}
                  duration={1400}
                  className="text-4xxl font-medium md:text-5xl"
                />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-accent-foreground mt-2 text-lg font-bold">
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
