'use client';

import { useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';

interface TrackedCtaProps extends React.ComponentProps<typeof Button> {
  trackLabel: string;
}

export default function TrackedCta({ trackLabel, onClick, ...props }: TrackedCtaProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      analytics.ctaClick(trackLabel, window.location.pathname);
      onClick?.(e);
    },
    [trackLabel, onClick],
  );

  return <Button onClick={handleClick} {...props} />;
}
