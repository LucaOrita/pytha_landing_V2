'use client';

import { createContext, useContext, useState } from 'react';

import { cn } from '@/lib/utils';

const PricingContext = createContext<{ isMonthly: boolean }>({ isMonthly: false });

export function usePricing() {
  return useContext(PricingContext);
}

export function PricingToggle({ children }: { children: React.ReactNode }) {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <PricingContext.Provider value={{ isMonthly }}>
      <div className="flex justify-center">
        <div className="bg-muted inline-flex items-center gap-1 rounded-full p-1">
          <button
            className={cn(
              'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition',
              !isMonthly ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground',
            )}
            onClick={() => setIsMonthly(false)}
          >
            Acces pe viata
          </button>
          <button
            className={cn(
              'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition',
              isMonthly ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground',
            )}
            onClick={() => setIsMonthly(true)}
          >
            Lunar
          </button>
        </div>
      </div>
      {children}
    </PricingContext.Provider>
  );
}
