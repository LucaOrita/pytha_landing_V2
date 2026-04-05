'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { usePricing } from '@/components/sections/pricing-toggle';
import { cn } from '@/lib/utils';

export interface ModuleData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  monthlyPrice?: string;
  priceNote: string;
  ctaLabel?: string;
  ctaHref?: string;
  video?: string;
  image?: string;
}

export default function ModuleSection({
  module,
  index,
}: {
  module: ModuleData;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const { isMonthly } = usePricing();
  const displayPrice = isMonthly && module.monthlyPrice ? module.monthlyPrice : module.price;
  const displayNote = isMonthly && module.monthlyPrice ? 'pe luna' : module.priceNote;

  return (
    <section id={module.id} className={cn('scroll-mt-36 py-16 md:py-20', isEven ? '' : 'bg-white')}>
      <div
        className={cn(
          'container flex flex-col gap-10 lg:gap-18',
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse',
        )}
      >
        {/* Media */}
        <div className="group flex-1">
          <div className="overflow-hidden rounded-2xl shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
            {module.video ? (
              <video
                src={module.video}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full object-cover"
              />
            ) : module.image ? (
              <Image
                src={module.image}
                alt={module.title}
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover"
                quality={65}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="bg-muted flex aspect-[4/3] w-full items-center justify-center">
                <span className="text-muted-foreground text-sm">{module.title}</span>
              </div>
            )}
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col gap-4">
          <span className="w-fit rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
            {module.badge}
          </span>

          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {module.title}
          </h2>

          <h3 className="text-lg font-semibold">{module.subtitle}</h3>

          <p className="text-base leading-snug text-gray-500">
            {module.description}
          </p>

          {module.features.length > 0 && (
            <ul className="mt-2 space-y-2">
              {module.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2">
                  <div className="bg-secondary mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="size-3" />
                  </div>
                  <span className="text-sm leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div>
              <span className="font-display text-2xl font-bold md:text-3xl">
                {displayPrice}
              </span>
              <span className="ml-2 text-sm text-gray-500">{displayNote}</span>
            </div>
            <Button
              size="sm"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('module-cart-add', { detail: module.id }));
              }}
            >
              {module.ctaLabel || 'Include in oferta'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
