'use client';

import Image from 'next/image';

import Noise from '@/components/noise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const FEATURES_DATA = [
  {
    id: 1,
    image: '/images/features-grid/1.webp',
    imageAlt: 'Distributed verification flow',
    title: 'Verificări distribuite în echipă',
    description:
      'Atribuie verificări colegilor, urmărește progresul și vezi clar cine validează documentele fiecărui transport.',
    className: 'lg:col-span-3',
    width: 423,
    height: 228,
  },
  {
    id: 2,
    image: '/images/features-grid/2.webp',
    imageAlt: 'Team collaboration dashboard',
    title: 'Colaborare între dispeceri și personal intern',
    description:
      'Centralizezi comunicarea cu note, observații și mesaje interne direct pe documente și transporturi.',
    className: 'lg:col-span-3',
    width: 435,
    height: 228,
  },
  {
    id: 3,
    image: '/images/features-grid/3.webp',
    imageAlt: 'Supplier analytics',
    title: 'Rapoarte și vizibilitate asupra furnizorilor',
    description:
      'Analizezi istoricul verificărilor, vezi pattern-uri de risc și iei decizii mai bune în selectarea furnizorilor.',
    className: 'lg:col-span-4',
    width: 599,
    height: 218,
  },
  {
    id: 4,
    image: '/images/features-grid/4.webp',
    imageAlt: 'Document status overview',
    title: 'Statusuri clare pentru fiecare document',
    description:
      'Fiecare document are un status precis: valid, în verificare sau necesită atenție; ca să știi instant ce urmează.',
    className: 'lg:col-span-2',
    width: 292,
    height: 215,
  },
  {
    id: 5,
    image: '/images/features-grid/5.webp',
    imageAlt: 'Workflow integration',
    title: 'Integrare cu procesele interne',
    description:
      'DOCO se conectează natural la fluxurile tale interne și sincronizează verificările cu procesele operaționale.',
    className: 'lg:col-span-3',
    width: 417,
    height: 175,
  },
  {
    id: 6,
    image: '/images/features-grid/6.webp',
    imageAlt: 'Document expiration notifications',
    title: 'Notificări pentru expirarea documentelor',
    description:
      'Primești alerte automate atunci când polițele, licențele sau alte documente se apropie de expirare, ca să eviți întârzieri și incidente operaționale.',
    className: 'lg:col-span-3',
    width: 433,
    height: 155,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features-grid" className="section-padding relative">
      <Noise />
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-5xl space-y-3 lg:space-y-4 lg:text-center">
          <h2 className="text-4xl tracking-tight lg:text-5xl">
            Instrumente care îți simplifică munca în dispecerat
          </h2>
          <p className="text-muted-foreground text-lg leading-snug lg:text-balance">
            <span className="text-primary font-semibold">DOCO</span> aduce
            într-un singur loc verificările, comunicarea internă, statusurile și
            rapoartele, astfel încât echipele tale să poată lucra mai repede,
            mai clar și mai organizat.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 gap-2 lg:mt-12 lg:grid-cols-6">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  width: number;
  height: number;
}

function FeatureCard({
  image,
  imageAlt,
  title,
  description,
  className,
  width,
  height,
}: FeatureCardProps) {
  return (
    <Card className={cn('h-full', className)}>
      {/* Image Section */}
      <CardContent>
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={imageAlt}
            width={width}
            height={height}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            className="w-full object-cover"
          />
        </div>
      </CardContent>

      {/* Content Section */}
      <CardHeader>
        <CardTitle className="text-xl leading-tight font-semibold">
          {title}
        </CardTitle>
        <p className="text-muted-foreground/70 leading-relaxed">
          {description}
        </p>
      </CardHeader>
    </Card>
  );
}
