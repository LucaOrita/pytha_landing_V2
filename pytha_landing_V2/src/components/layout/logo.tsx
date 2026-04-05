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
    <div className={cn('flex items-center gap-3', className)}>
      <Element
        href={href}
        className="flex items-center"
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
      <div className="hidden items-center gap-1.5 border-l border-gray-300 pl-3 sm:flex">
        <Image
          src="/images/logo-adline-min.png"
          alt="AdLine Industries"
          width={80}
          height={24}
          className="h-5 w-auto object-contain opacity-70 md:h-6"
        />
      </div>
    </div>
  );
}
