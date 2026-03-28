'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-up-scale';
  delay?: number;
  threshold?: number;
}

export function InView({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animation : 'opacity-0',
        className,
      )}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
