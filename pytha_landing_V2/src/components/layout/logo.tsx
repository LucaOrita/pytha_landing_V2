import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
  noLink?: boolean;
  showPartner?: boolean;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = '/',
  noLink = false,
  showPartner = false,
}: LogoProps) {
  const Element = noLink ? 'div' : Link;

  return (
    <Element
      href={href}
      className={cn(
        'flex items-center gap-2 text-xl font-medium',
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 30"
        fill="none"
        className={cn('w-7 object-contain', iconClassName)}
        aria-hidden="true"
      >
        <path
          d="M20 0L0 30h10l10-17.5L30 30h10L20 0z"
          fill="#9A5CD0"
        />
      </svg>
      <div className="flex items-baseline gap-1.5">
        <span className={cn('font-semibold tracking-tight', wordmarkClassName)}>PYTHA 3D</span>
        {showPartner && (
          <span className="text-muted-foreground text-xs font-normal tracking-normal">
            &times; AdLine Industries
          </span>
        )}
      </div>
    </Element>
  );
}
