import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  href?: string;
  noLink?: boolean;
  iconClassName?: string;
}

export default function Logo({
  className,
  href = '/',
  noLink = false,
  iconClassName,
}: LogoProps) {
  const Element = noLink ? 'div' : Link;

  return (
    <Element
      href={href}
      className={cn('flex items-center', className)}
    >
      <Image
        src="/images/pytha-logo.png"
        alt="PYTHA 3D-CAD"
        width={160}
        height={48}
        className={cn('h-10 w-auto object-contain md:h-12', iconClassName)}
        priority
      />
    </Element>
  );
}
