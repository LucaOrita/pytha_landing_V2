'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { InView } from '@/components/ui/in-view';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    subtitle: 'Modelare liberă',
    title: 'Creează orice formă, fără limitări',
    description:
      'De la corpuri simple la geometrii organice complexe. Modelarea 3D solidă în PYTHA îți oferă libertatea de a proiecta exact ce ai în minte, cu precizie industrială.',
    link: '/module-pytha#modeler-basic',
    image: '/images/home/section3/Modelare 3D liberă și intuitivă.jpg',
    blendClean: false,
  },
  {
    subtitle: 'Producție automată',
    title: 'Automatizare totală, de la model la CNC',
    description:
      'Găuri, îmbinări, aplicare cant, prelucrări CNC generate automat direct din modelul 3D. Fără muncă manuală, fără erori de transfer.',
    link: '/module-pytha#workshop',
    image: '/images/home/section3/Automatizare totală a producției.jpg',
    blendClean: false,
  },
  {
    subtitle: 'Integrare CNC',
    title: 'Export direct către orice utilaj CNC',
    description:
      'WoodWop, AlphaCam, bSolid, Biesse, SCM, Felder, G-code. PYTHA exportă fără conversii suplimentare sau softuri intermediare.',
    link: '/module-pytha#cam-interface',
    image: '/images/home/section3/Integrare directă cu utilajele CNC.jpg',
    blendClean: true,
  },
  {
    subtitle: 'Randare realistă',
    title: 'Impresionează clienții cu randări fotorealiste',
    description:
      'Prezintă proiecte cu iluminare reală, texturi HD și animații interactive. RadioLab transformă modelul 3D în imagini de prezentare care vând.',
    link: '/module-pytha#radiolab',
    image: '/images/home/section3/Randare fotorealistă pentru vânzare rapidă.png',
    blendClean: false,
  },
];

export default function FeaturesAlternating() {
  return (
    <section className="section-padding bg-card">
      <div className="container space-y-20 md:space-y-30">
        <InView className="mx-auto max-w-3xl text-balance text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Tot ce ai nevoie pentru{' '}
            <span className="text-[#8a1820]">fluxul tău de producție digitalizat</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            De la prima schiță până la piesa finisată. PYTHA acoperă întregul flux.
          </p>
        </InView>

        {FEATURES.map((feature, index) => (
          <InView key={feature.title} delay={index > 2 ? 0 : 80}>
            <div
              className={cn(
                'flex flex-col items-center gap-10 lg:gap-18',
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
              )}
            >
              <div className="group flex-1">
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl shadow-xl transition-shadow duration-300 group-hover:shadow-2xl',
                    feature.blendClean && 'bg-white',
                  )}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={640}
                    height={480}
                    className={cn(
                      'aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105',
                      feature.blendClean && 'mix-blend-multiply',
                    )}
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <span className="w-fit rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
                  {feature.subtitle}
                </span>
                <h3 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {feature.title}
                </h3>
                <p className="max-w-lg text-lg leading-snug text-muted-foreground">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="group/link mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#8a1820] transition-colors hover:text-[#a1131d]"
                >
                  <span className="underline decoration-[#8a1820]/30 underline-offset-4 transition-all group-hover/link:decoration-[#8a1820]">
                    Află mai multe
                  </span>
                  <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </InView>
        ))}
      </div>
    </section>
  );
}
