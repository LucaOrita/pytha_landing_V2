'use client';

import { Check, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const canExpand = Boolean(module.video || module.image);

  return (
    <section id={module.id} className={cn('scroll-mt-36 py-16 md:py-20', isEven ? '' : 'bg-card')}>
      <div
        className={cn(
          'container flex flex-col gap-10 lg:gap-18',
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse',
        )}
      >
        {/* Media */}
        <div className="group flex-1">
          <button
            type="button"
            onClick={() => canExpand && setLightboxOpen(true)}
            className={cn(
              'relative block w-full overflow-hidden rounded-2xl shadow-xl transition-shadow duration-300 group-hover:shadow-2xl',
              canExpand ? 'cursor-pointer' : 'cursor-default',
            )}
            aria-label={canExpand ? `Mareste ${module.title}` : module.title}
          >
            {module.video ? (
              <video
                src={module.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
              />
            ) : module.image ? (
              <Image
                src={module.image}
                alt={module.title}
                width={640}
                height={360}
                className="aspect-video w-full object-cover"
                quality={65}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="bg-muted flex aspect-video w-full items-center justify-center">
                <span className="text-muted-foreground text-sm">{module.title}</span>
              </div>
            )}
            {canExpand && (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#8a1820] shadow-lg">
                  <Maximize2 className="size-4" />
                  Click pentru marire
                </span>
              </span>
            )}
          </button>
        </div>

        {canExpand && (
          <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
            <DialogContent className="max-w-6xl border-0 bg-black p-0 sm:rounded-xl">
              <DialogTitle className="sr-only">{module.title}</DialogTitle>
              <div className="aspect-video w-full overflow-hidden sm:rounded-xl">
                {module.video ? (
                  <video
                    src={module.video}
                    autoPlay
                    loop
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />
                ) : module.image ? (
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-contain"
                    quality={85}
                    sizes="100vw"
                  />
                ) : null}
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Text content */}
        <div className="flex flex-1 flex-col gap-4">
          <span className="w-fit rounded-full bg-[#fef3c7] px-3 py-1 text-xs font-semibold text-[#92400e]">
            {module.badge}
          </span>

          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {module.title}
          </h2>

          <h3 className="text-lg font-semibold">{module.subtitle}</h3>

          <p className="text-base leading-snug text-muted-foreground">
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
              <span className="ml-2 text-sm text-muted-foreground">{displayNote}</span>
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
