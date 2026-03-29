'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { InView } from '@/components/ui/in-view';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    subtitle: 'Modelare libera',
    title: 'Creeaza orice forma — fara limitari',
    description:
      'De la corpuri simple la geometrii organice complexe. Modelarea 3D solida in PYTHA iti ofera libertatea de a proiecta exact ce ai in minte, cu precizie industriala.',
    link: '/module-pytha#modeler-basic',
    image: '/images/home/section3/Modelare 3D liberă și intuitivă.jpg',
  },
  {
    subtitle: 'Productie automata',
    title: 'Automatizare totala — de la model la CNC',
    description:
      'Gauri, imbinari, aplicare cant, prelucrari CNC — generate automat direct din modelul 3D. Fara munca manuala, fara erori de transfer.',
    link: '/module-pytha#workshop',
    image: '/images/home/section3/Automatizare totală a producției.jpg',
  },
  {
    subtitle: 'Nesting inteligent',
    title: 'Optimizeaza fiecare panou, elimina risipa',
    description:
      'Algoritm integrat de asezare a pieselor pe panouri — minimizeaza pierderile de material cu pana la 30% si creste randamentul la taiere.',
    link: '/module-pytha#nesting',
    image: '/images/home/section3/Nesting optimizat pentru economie de material.jpg',
  },
  {
    subtitle: 'Integrare CNC',
    title: 'Export direct catre orice utilaj CNC',
    description:
      'WoodWop, AlphaCam, bSolid, Biesse, SCM, Felder, G-code — PYTHA exporta fara conversii suplimentare sau softuri intermediare.',
    link: '/module-pytha#cam-interface',
    image: '/images/home/section3/Integrare directă cu utilajele CNC.jpg',
  },
  {
    subtitle: 'Randare realista',
    title: 'Impresioneaza clientii cu randari fotorealiste',
    description:
      'Prezinta proiecte cu iluminare reala, texturi HD si animatii interactive. RadioLab transforma modelul 3D in imagini de prezentare care vand.',
    link: '/module-pytha#radiolab',
    image: '/images/home/section3/Randare fotorealistă pentru vânzare rapidă.png',
  },
  {
    subtitle: 'Control total',
    title: 'De la schita la productie — un singur soft',
    description:
      'Liste piese, etichete cu coduri QR, documentatie tehnica, export CSV — totul generat automat dintr-un singur click, direct din modelul 3D.',
    link: '/module-pytha#parts-list',
    image: '/images/home/section3/Control complet – De la schiță la producție.jpg',
  },
];

export default function FeaturesAlternating() {
  return (
    <section className="section-padding">
      <div className="container space-y-20 md:space-y-30">
        <InView className="mx-auto max-w-3xl text-balance text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Tot ce ai nevoie pentru{' '}
            <span className="text-gradient">productie digitala</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-snug">
            De la prima schita pana la piesa finisata — PYTHA acopera intreg fluxul.
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
              <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover"
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <span className="bg-muted text-accent-foreground w-fit rounded-full px-3 py-1 text-xs font-medium">
                  {feature.subtitle}
                </span>
                <h3 className="text-accent-foreground text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground max-w-lg text-lg leading-snug">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="text-accent-foreground group mt-2 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                >
                  Afla mai multe
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </InView>
        ))}
      </div>
    </section>
  );
}
