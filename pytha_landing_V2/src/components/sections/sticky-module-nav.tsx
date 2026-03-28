'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const MODULE_NAV = [
  { id: 'modul-basic', label: 'Basic' },
  { id: 'modul-generators', label: 'Generators' },
  { id: 'modul-workshop', label: 'Workshop' },
  { id: 'modul-parts-list', label: 'Parts List' },
  { id: 'modul-parametrics', label: 'Parametrics' },
  { id: 'modul-library', label: 'Library' },
  { id: 'modul-freeform', label: 'Freeform' },
  { id: 'modul-nesting', label: 'Nesting' },
  { id: 'modul-cam', label: 'CAM' },
  { id: 'modul-radiolab', label: 'RadioLab' },
  { id: 'modul-cadbid', label: 'CadBid' },
];

export default function StickyModuleNav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    MODULE_NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-background/80 sticky top-[var(--header-height)] z-40 border-b backdrop-blur-xl">
      <div className="container">
        <div className="scrollbar-none flex gap-1 overflow-x-auto py-2">
          {MODULE_NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={cn(
                'cursor-pointer whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors',
                activeId === id
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
