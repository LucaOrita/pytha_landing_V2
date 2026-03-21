'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Noise from '@/components/noise';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// Types
interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    title: string;
    company: string;
    companyLogo?: {
      src: string;
      width: number;
      height: number;
    };
    testimonial: string;
    featured?: boolean;
    className?: string;
  };
}

// Constants
const COMMON_CARDS_CLASSNAMES = {
  big: 'col-span-4 lg:[&_blockquote]:text-base lg:[&_blockquote]:leading-loose lg:[&_blockquote]:text-foreground',
};

const testimonials = [
  {
    id: '1',
    name: 'Flavius',
    title: 'Operator Logistică',
    company: '',
    testimonial:
      'Doco este o platformă modernă care ne ajută să automatizăm procesele operaționale folosind inteligență artificială și analiză de date. Am redus semnificativ timpul de verificare a documentelor și avem un nivel mult mai ridicat de siguranță și control în activitatea zilnică. Este un instrument foarte util în munca de zi cu zi și în alegerea partenerilor potriviți.',
    className: 'col-span-4',
  },
  {
    id: '2',
    name: 'Liliana',
    title: 'Manager Transport',
    company: '',
    testimonial:
      'Doco este o aplicație care mă ghidează în verificarea asigurărilor cărăușilor și îmi face munca mult mai ușoară. Oferă rapid răspunsuri clare privind valabilitatea asigurărilor, iar analiza se face în câteva secunde. O folosesc zilnic pentru verificarea zecilor de asigurări care îmi trec prin față.',
    className: 'col-span-4',
  },
  {
    id: '8',
    name: 'Dragoș',
    title: 'Manager transport',
    company: '',
    // companyLogo: {
    //   src: '/images/logos/zapiar.png',
    //   width: 105,
    //   height: 28,
    // },
    testimonial:
      'Verificarea asigurărilor CMR este rapidă și detaliată, inclusiv din poze, nu doar din PDF-uri. Este o platformă dedicată și folositoare, pe care o utilizăm zilnic.',
    className: cn(COMMON_CARDS_CLASSNAMES.big, ''),
  },
  {
    id: '9',
    name: 'Dana',
    title: 'Operator Logistică',
    company: '',
    // companyLogo: {
    //   src: '/images/logos/tailwindcss.png',
    //   width: 130,
    //   height: 20,
    // },
    testimonial:
      'Doco are funcții simple, prietenoase și intuitive, ușor de folosit în activitatea zilnică.',
    className: cn(
      COMMON_CARDS_CLASSNAMES.big,
      'lg:[&_blockquote]:text-4xl lg:[&_blockquote]:leading-tight lg:shadow-lg',
    ),
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="section-padding relative overflow-x-hidden">
      <Noise />
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl space-y-3 lg:space-y-4 lg:text-center">
          <h2 className="text-4xl tracking-tight lg:text-5xl">
            Ales de echipe care pun siguranța pe primul loc
          </h2>
          <p className="text-muted-foreground text-lg leading-snug lg:text-balance">
            Manageri de transport, dispeceri și operatori logistici folosesc
            DOCO pentru procese mai rapide, decizii mai sigure și mai puține
            erori operaționale.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="mx-auto mt-8 hidden max-w-6xl grid-cols-8 gap-2 lg:mt-12 lg:grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-8 -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] lg:hidden">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 lg:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-9/10 pl-2 sm:basis-1/2 lg:pl-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>

          {/* Carousel Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'size-2 rounded-full transition-all duration-200',
                  index === current
                    ? 'bg-foreground scale-110'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const isBigCard = testimonial.className?.includes('col-span-4');
  const withGradientBorder = testimonial.id === '1' || testimonial.id === '9';

  return (
    <Card
      className={cn(
        'hover:shadow-primary/5 relative h-full transition-all duration-300 hover:shadow-lg',
        withGradientBorder &&
          'lg:before:from-chart-1 lg:before:via-chart-2 lg:before:to-chart-3 lg:border-0 lg:before:absolute lg:before:inset-[-1px] lg:before:z-[-1] lg:before:rounded-xl lg:before:bg-gradient-to-tr lg:before:content-[""]',
        testimonial.className,
      )}
    >
      <CardHeader>
        {/* Author Info at Top for Small Cards */}
        {!isBigCard && (
          <div className="flex items-center gap-3">
            {/* <Image
              src={testimonial.image}
              alt={`${testimonial.name} profile`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            /> */}
            <div className="min-w-0 flex-1">
              <div className="text-card-foreground truncate text-sm font-medium">
                {testimonial.name}
              </div>
              <div className="text-muted-foreground truncate text-xs">
                {testimonial.title}
                {/* at {testimonial.company} */}
              </div>
            </div>
          </div>
        )}

        {/* Company Logo for Big Cards Only */}
        {testimonial?.companyLogo?.src && (
          <Image
            src={testimonial.companyLogo.src}
            alt={`${testimonial.company} logo`}
            width={testimonial.companyLogo.width}
            height={testimonial.companyLogo.height}
            className="object-contain dark:invert"
          />
        )}
      </CardHeader>

      <CardContent className="h-full">
        {/* Testimonial Text */}
        <blockquote
          className={cn('lg:text-muted-foreground leading-relaxed lg:text-sm')}
        >
          “{testimonial.testimonial}”
        </blockquote>
      </CardContent>

      {/* Author Info at Bottom for Big Cards */}
      {isBigCard && (
        <CardFooter className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="text-card-foreground truncate text-sm font-medium">
              {testimonial.name}
            </div>
            <div className="text-muted-foreground truncate text-xs">
              {testimonial.title}
              {/* at {testimonial.company} */}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
