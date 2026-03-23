'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 32, suffix: '', label: 'ani de activitate' },
  { prefix: '~', target: 8400, suffix: '', label: 'curse/an organizate' },
  { target: 1100, suffix: '+', label: 'clienți activi' },
  { target: 3500, suffix: '+', label: 'transportatori parteneri' },
  { target: 40, suffix: '+', label: 'țări acoperite' },
];

function formatNumber(n: number): string {
  return n.toLocaleString('ro-RO');
}

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (start) animate();
  }, [start, animate]);

  return value;
}

function StatCounter({ stat, inView }: { stat: StatItem; inView: boolean }) {
  const value = useCountUp(stat.target, inView);
  return (
    <div className="text-center">
      <p className="text-dacoda-orange text-4xl font-bold md:text-5xl">
        {stat.prefix ?? ''}
        {formatNumber(value)}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-white/70">{stat.label}</p>
    </div>
  );
}

export default function DacodaStats() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: 'var(--dacoda-navy)' }}>
      <div className="container px-4 py-16 lg:px-6 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-8">
              <StatCounter stat={stat} inView={inView} />
              {i < stats.length - 1 && (
                <div className="hidden h-12 w-px bg-white/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
