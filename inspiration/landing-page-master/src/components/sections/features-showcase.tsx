'use client';

// import iconuri theme - import { Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { FileUp, ScanSearch, ListChecks, Workflow } from 'lucide-react';

import { motion } from 'motion/react';
import Image from 'next/image';

import Noise from '@/components/noise';
import { Card, CardContent } from '@/components/ui/card';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'upload',
    icon: FileUp,
    title: '1. Încarci documentele de transport',
    description:
      'Dispecerii încarcă rapid CMR-uri, polițe de asigurare, licențe sau alte documente relevante, din birou sau din teren.',
    image: {
      src: '/images/features-showcase/1.webp',
      alt: 'Încărcare documente de transport în platformă',
      width: 500,
      height: 400,
    },
  },
  {
    id: 'analysis',
    icon: ScanSearch,
    title: '2. AI analizează și identifică potențiale riscuri',
    description:
      'Rețeaua neurală a platformei evidențiază modificări, neconcordanțe și elemente ce pot semnala un risc operațional.',
    image: {
      src: '/images/features-showcase/2.webp',
      alt: 'Analiză automată a documentelor cu AI',
      width: 500,
      height: 400,
    },
  },
  {
    id: 'results',
    icon: ListChecks,
    title: '3. Primești rezultatele și datele extrase automat',
    description:
      'Vezi într-un singur ecran scorul de risc, diferențele detectate și câmpurile importante extrase automat din documente.',
    image: {
      src: '/images/features-showcase/3.webp',
      alt: 'Afișarea rezultatelor și a datelor extrase din documente',
      width: 500,
      height: 400,
    },
  },
  {
    id: 'validation',
    icon: Workflow,
    title: '4. Urmezi pașii recomandați pentru validare',
    description:
      'Platforma te ghidează printr-o procedură clară pentru validarea furnizorilor și salvează automat datele și documentele în baza internă.',
    image: {
      src: '/images/features-showcase/4.webp',
      alt: 'Ghidare în pașii de validare și salvarea în baza de date',
      width: 500,
      height: 400,
    },
  },
];

export default function FeaturesShowcase() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Animation variants
  const featureItem = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(2px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 25,
        mass: 1,
        duration: 0.6,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: 'blur(1px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="features-showcase"
      className="section-padding bg-section-alt relative overflow-hidden"
    >
      <Noise />
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl space-y-6 md:space-y-8"
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30, filter: 'blur(2px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 25,
                duration: 0.6,
              },
            },
          }}
        >
          <h2 className="text-4xl tracking-tight lg:text-5xl">
            Verificarea documentelor, simplificată în 4 pași
          </h2>
          <p className="text-muted-foreground text-lg leading-snug">
            <span className="text-primary font-semibold">DOCO</span> transformă
            procesul de verificare a documentelor de transport într-un flux clar
            și asistat de AI, astfel încât echipele tale pot identifica mai ușor
            potențialele riscuri și pot lua decizii operaționale mai sigure.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-8 space-y-8 md:mt-14 md:space-y-14 lg:mt-24 lg:space-y-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isReverse = index >= 2;

            return (
              <motion.div
                key={feature.id}
                className={cn(
                  `grid items-center gap-4 lg:grid-cols-2 lg:gap-16`,
                  !isReverse && 'lg:grid-flow-col-dense',
                )}
                variants={featureItem}
                initial={prefersReducedMotion ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Content */}
                <motion.div
                  className={cn(
                    `space-y-4 md:space-y-6 lg:space-y-8`,
                    !isReverse && 'lg:col-start-2',
                  )}
                  variants={contentVariants}
                >
                  <div className="flex items-center gap-4">
                    <Card
                      className={cn(
                        `hover:text-primary ease--out flex size-12 shrink-0 items-center justify-center rounded-sm !p-0 transition-all duration-300 hover:scale-[1.1] md:size-16`,
                      )}
                    >
                      <IconComponent className="size-6" strokeWidth={2.1} />
                    </Card>
                    <h3 className="text-2xl tracking-tight md:hidden lg:text-3xl">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <h3 className="hidden text-2xl tracking-tight md:block lg:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground/70 text-sm leading-relaxed md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className={cn('relative', !isReverse && 'lg:col-start-1')}
                  variants={imageVariants}
                >
                  {/* Background circles for first and third images */}
                  {(index === 0 || index === 2) && (
                    <>
                      <div
                        className={cn(
                          'bg-chart-2 absolute size-40 rounded-full opacity-30 blur-3xl will-change-transform md:opacity-80',
                          index === 0 && 'top-0 left-0 -translate-x-1/5',
                          index === 2 && 'top-0 right-0 translate-y-1/2',
                        )}
                      />
                      <div
                        className={cn(
                          'bg-chart-3 absolute size-40 rounded-full opacity-50 blur-3xl will-change-transform md:opacity-100',
                          index === 0 && 'top-0 left-0 translate-y-1/2',
                          index === 2 && 'top-0 right-0 translate-x-1/5',
                        )}
                      />
                    </>
                  )}
                  <Card className="bg-chart-4 relative overflow-hidden !py-0">
                    <CardContent className="px-0 !py-0 !pe-0">
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        width={feature.image.width}
                        height={feature.image.height}
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 90vw, 500px"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
