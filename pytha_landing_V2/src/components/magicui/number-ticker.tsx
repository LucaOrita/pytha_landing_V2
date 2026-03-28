'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  startValue?: number;
  duration?: number;
  decimalPlaces?: number;
  suffix?: string;
  className?: string;
}

export function NumberTicker({
  value,
  startValue = 0,
  duration = 1200,
  decimalPlaces = 0,
  suffix = '',
  className,
}: NumberTickerProps) {
  const [display, setDisplay] = useState(startValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animate = useCallback(() => {
    const start = startValue;
    const end = value;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setDisplay(current);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [startValue, value, duration]);

  useEffect(() => {
    if (hasAnimated) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, animate]);

  const formatted = decimalPlaces > 0
    ? display.toFixed(decimalPlaces)
    : Math.round(display).toString();

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {formatted}
      {suffix}
    </span>
  );
}
