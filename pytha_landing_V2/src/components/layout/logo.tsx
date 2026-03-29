import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  href?: string;
  noLink?: boolean;
  showPartner?: boolean;
  iconClassName?: string;
  wordmarkClassName?: string;
}

export default function Logo({
  className,
  href = '/',
  noLink = false,
  showPartner = true,
  iconClassName,
  wordmarkClassName,
}: LogoProps) {
  const Element = noLink ? 'div' : Link;

  return (
    <Element
      href={href}
      className={cn('flex items-center gap-2', className)}
    >
      <Image
        src="/images/pytha-theoram-logo.png"
        alt="PYTHA Logo"
        width={120}
        height={32}
        className={cn('h-8 w-auto object-contain', iconClassName)}
        priority
      />
      {showPartner && (
        <>
          <span className={cn('text-muted-foreground text-lg font-bold', wordmarkClassName)}>&times;</span>
          <a
            href="https://adlineindustries.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/adline-logo-full.jpg"
              alt="AdLine Industries"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </a>
        </>
      )}
    </Element>
  );
}
