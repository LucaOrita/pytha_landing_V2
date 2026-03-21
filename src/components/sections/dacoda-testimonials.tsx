'use client';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: 'Drum lung și realizări frumoase.',
    name: 'Carmen Canada',
  },
  {
    quote:
      'Doresc să-mi exprim mulțumirile de bună colaborare și să felicit pentru cele realizate!',
    name: 'Veres Arpad',
  },
  {
    quote:
      'Felicit pe Dl. Cotenescu pentru realizările sale și pentru profesionalismul echipei.',
    name: 'Maria-Livia',
  },
  {
    quote: 'Sunt extrem de mulțumit de firmă și o recomand cu căldură!',
    name: 'Marius Crăciun',
    location: 'România',
  },
  {
    quote:
      'Aș fi foarte interesată să colaborez cu dumneavoastră. Un partener serios și profesional.',
    name: 'Irina Severin',
    location: 'Istanbul',
  },
];

export default function DacodaTestimonials() {
  return (
    <section style={{ backgroundColor: 'var(--dacoda-light)' }}>
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="text-dacoda-navy mb-10 text-center text-3xl font-bold md:text-4xl">
          Ce spun cei cu care lucrăm
        </h2>

        <div className="mx-auto max-w-4xl">
          <Carousel
            opts={{ loop: true, align: 'start' }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.name}
                  className="basis-full md:basis-1/2 lg:basis-1/2"
                >
                  <div className="relative mx-2 rounded-lg border border-gray-100 bg-white p-6 md:p-8">
                    {/* Decorative quote */}
                    <span
                      className="text-dacoda-orange/20 pointer-events-none absolute top-2 left-4 font-serif leading-none select-none"
                      style={{ fontSize: '80px' }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    <p className="text-dacoda-gray relative z-10 mt-8 text-base leading-relaxed italic">
                      {t.quote}
                    </p>

                    <div className="bg-dacoda-orange mt-4 h-0.5 w-8" />

                    <p className="text-dacoda-navy mt-3 text-sm font-medium">
                      {t.name}
                    </p>
                    {t.location && (
                      <p className="text-dacoda-gray text-xs">{t.location}</p>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden lg:-left-14 lg:flex" />
            <CarouselNext className="-right-4 hidden lg:-right-14 lg:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
