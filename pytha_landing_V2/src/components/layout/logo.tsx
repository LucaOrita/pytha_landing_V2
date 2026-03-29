'use client';

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
        width={160}
        height={48}
        className={cn('h-10 w-auto object-contain md:h-12', iconClassName)}
        priority
      />
      {showPartner && (
        <>
          <span className={cn('text-xl font-bold text-[#8a1820]', wordmarkClassName)}>&times;</span>
          <span
            role="link"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open('https://adlineindustries.ro/', '_blank', 'noopener,noreferrer');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                window.open('https://adlineindustries.ro/', '_blank', 'noopener,noreferrer');
              }
            }}
            className="cursor-pointer"
          >
            <Image
              src="/images/adline-logo-full.jpg"
              alt="AdLine Industries"
              width={160}
              height={48}
              className="h-10 w-auto object-contain md:h-12"
            />
          </span>
        </>
      )}
    </Element>
  );
}
