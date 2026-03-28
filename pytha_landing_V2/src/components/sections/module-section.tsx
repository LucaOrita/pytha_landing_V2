import { Check } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ModuleData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ModuleSection({
  module,
  index,
}: {
  module: ModuleData;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section id={module.id} className="scroll-mt-36 py-12 md:py-16">
      <div
        className={cn(
          'container flex flex-col gap-10 lg:gap-18',
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse',
        )}
      >
        {/* Image placeholder */}
        <div className="flex-1">
          <div className="bg-card dark:via-muted/10 dark:to-muted/30 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border shadow-sm bg-gradient-to-br from-transparent">
            <span className="text-muted-foreground text-sm">Screenshot {module.title}</span>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col gap-4">
          <span className="bg-muted text-accent-foreground w-fit rounded-full px-3 py-1 text-xs font-medium">
            {module.badge}
          </span>

          <h2 className="text-accent-foreground text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {module.title}
          </h2>

          <h3 className="text-lg font-medium">{module.subtitle}</h3>

          <p className="text-muted-foreground text-base leading-snug">
            {module.description}
          </p>

          {/* Features list */}
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

          {/* Price + CTA */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div>
              <span className="font-azeret-mono text-2xl font-medium md:text-3xl">
                {module.price}
              </span>
              <span className="text-muted-foreground ml-2 text-sm">{module.priceNote}</span>
            </div>
            <Button size="sm" asChild>
              <Link href={module.ctaHref || `/solicita-oferta?modul=${module.id}`}>
                {module.ctaLabel || 'Include in oferta'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
