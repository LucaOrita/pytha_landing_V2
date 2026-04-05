import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  href?: string;
  noLink?: boolean;
  iconClassName?: string;
  isTransparent?: boolean;
}

export default function Logo({
  className,
  href = '/',
  noLink = false,
  iconClassName,
  isTransparent = false,
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
          className={cn(
            'h-10 w-auto object-contain md:h-12 transition-all duration-500',
            isTransparent && 'brightness-0 invert',
            iconClassName,
          )}
          priority
        />
      </Element>
      <div className={cn(
        'hidden items-center gap-1.5 border-l pl-3 sm:flex transition-all duration-500',
        isTransparent ? 'border-white/30' : 'border-gray-300',
      )}>
        <Image
          src="/images/logo-adline-min.png"
          alt="AdLine Industries"
          width={80}
          height={24}
          className={cn(
            'h-7 w-auto object-contain md:h-8 transition-all duration-500',
            isTransparent && 'brightness-0 invert',
          )}
        />
      </div>
    </div>
  );
}
