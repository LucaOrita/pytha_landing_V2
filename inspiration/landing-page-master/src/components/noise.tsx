import React from 'react';

import { cn } from '@/lib/utils';

const Noise = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-2 md:bg-[url(/images/noise.webp)]',
        className,
      )}
    />
  );
};

export default Noise;
