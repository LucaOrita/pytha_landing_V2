import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';
interface LogoProps {
  className?: string;
  wrapperClassName?: string;
  onlyLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  wrapperClassName = '',
  onlyLogo = false,
}) => {
  if (onlyLogo) {
    return (
      <Link
        href="/"
        className={cn(
          'relative flex h-10 w-10 items-center justify-center dark:invert',
          className,
        )}
      >
        <Image
          src="/layout/logo_only.svg"
          alt="Lumen Logo"
          fill
          priority
          className="object-contain dark:invert"
        />
      </Link>
    );
  }
  return (
    <div className={cn(``, wrapperClassName)}>
      <Link href="/" className={cn(`relative block h-32 w-25`, className)}>
        <Image
          src="/layout/logo.svg"
          alt="Lumen Logo"
          fill
          priority
          className="object-contain dark:invert"
        />
      </Link>
    </div>
  );
};

export default Logo;
