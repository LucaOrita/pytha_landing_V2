'use client';

import { ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { usePricing } from '@/components/sections/pricing-toggle';
import { cn } from '@/lib/utils';

const MODULE_NAV = [
  { id: 'modul-basic', label: 'Basic', price: '4.950€', monthly: '99€' },
  { id: 'modul-generators', label: 'Generatoare', price: '1.150€', monthly: '26€' },
  { id: 'modul-workshop', label: 'Workshop', price: '2.450€', monthly: '55€' },
  { id: 'modul-parts-list', label: 'Parts List', price: '1.290€', monthly: '29€' },
  { id: 'modul-parametrics', label: 'Parametrizare', price: '640€', monthly: '14€' },
  { id: 'modul-library', label: 'Biblioteca', price: '820€', monthly: null },
  { id: 'modul-freeform', label: 'Freeform', price: '590€', monthly: '13€' },
  { id: 'modul-nesting', label: 'Nesting', price: '1.100€', monthly: '25€' },
  { id: 'modul-cam', label: 'Interfata CAM', price: '1.950€', monthly: '44€' },
  { id: 'modul-radiolab', label: 'RadioLab', price: '980€', monthly: '42€' },
];

export default function ModuleSidebar() {
  const [activeId, setActiveId] = useState('');
  const [cart, setCart] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMonthly, setIsMonthly } = usePricing();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    MODULE_NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-30% 0px -60% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleCart = (id: string) => {
    setCart((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  // Listen for "Include in oferta" clicks from module sections
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail;
      setCart((prev) => prev.includes(id) ? prev : [...prev, id]);
    };
    window.addEventListener('module-cart-add', handler);
    return () => window.removeEventListener('module-cart-add', handler);
  }, []);

  const cartModules = MODULE_NAV.filter((m) => cart.includes(m.id));
  const totalPrice = cartModules.reduce((sum, m) => {
    const priceStr = isMonthly && m.monthly ? m.monthly : m.price;
    return sum + parseFloat(priceStr.replace(/[^\d]/g, ''));
  }, 0);
  const totalFormatted = totalPrice.toLocaleString('de-DE') + '€';
  const totalLabel = isMonthly ? '/luna' : ' total';

  return (
    <>
    <aside className="hidden space-y-4 xl:block xl:sticky xl:top-36 xl:self-start xl:w-64 xl:shrink-0">
      {/* Module navigation */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Module</h3>
          <div className="bg-muted inline-flex items-center rounded-full p-0.5">
            <button
              className={cn(
                'cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-medium transition-all',
                !isMonthly ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground',
              )}
              onClick={() => setIsMonthly(false)}
            >
              Viata
            </button>
            <button
              className={cn(
                'cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-medium transition-all',
                isMonthly ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground',
              )}
              onClick={() => setIsMonthly(true)}
            >
              Lunar
            </button>
          </div>
        </div>
        <nav className="space-y-0.5">
          {MODULE_NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={cn(
                'flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-1.5 text-sm transition-all duration-200',
                activeId === id
                  ? 'bg-[#fff1f2] font-semibold text-[#8a1820]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#8a1820]',
              )}
            >
              {label}
              {cart.includes(id) && (
                <span className="size-1.5 rounded-full bg-[#8a1820]" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Cart / Oferta */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
        <div className="mb-3 flex items-center gap-2">
          <ShoppingCart className="size-4 text-[#8a1820]" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Oferta ta {cart.length > 0 && <span className="text-[#8a1820]">({cart.length})</span>}
          </h3>
        </div>

        {cart.length === 0 ? (
          <p className="text-xs leading-snug text-gray-400">
            Apasa &ldquo;Include in oferta&rdquo; la modulele dorite pentru a construi pachetul tau.
          </p>
        ) : (
          <div className="space-y-2">
            {cartModules.map((m) => (
              <div key={m.id} className="flex items-center justify-between text-sm">
                <span className="font-medium">{m.label}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-gray-500">
                    {isMonthly && m.monthly ? m.monthly : m.price}
                  </span>
                  <button
                    onClick={() => toggleCart(m.id)}
                    className="cursor-pointer rounded-full p-0.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-3 border-t border-gray-100 pt-3">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold">Total</span>
                <span className="text-lg font-bold text-[#8a1820]">{totalFormatted}<span className="text-xs font-normal text-gray-500">{totalLabel}</span></span>
              </div>
            </div>
            <Button size="sm" className="mt-2 w-full" asChild>
              <Link href={`/solicita-prezentare?module=${cart.join(',')}`}>
                Solicita oferta
              </Link>
            </Button>
          </div>
        )}
      </div>
    </aside>

      {/* Mobile floating cart button */}
      <div className="fixed right-4 bottom-6 z-50 xl:hidden">
        {mobileOpen && (
          <div className="mb-3 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold">Oferta ta</h3>
              <button onClick={() => setMobileOpen(false)} className="cursor-pointer rounded-full p-1 text-gray-400 hover:bg-gray-100">
                <X className="size-4" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-xs text-gray-400">Adauga module apasand &ldquo;Include in oferta&rdquo;.</p>
            ) : (
              <>
                <div className="max-h-48 space-y-1.5 overflow-y-auto">
                  {cartModules.map((m) => (
                    <div key={m.id} className="flex items-center justify-between text-xs">
                      <span className="font-medium">{m.label}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">{isMonthly && m.monthly ? m.monthly : m.price}</span>
                        <button onClick={() => toggleCart(m.id)} className="cursor-pointer text-gray-300 hover:text-red-500"><X className="size-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-baseline justify-between border-t border-gray-100 pt-2">
                  <span className="text-xs font-bold">Total</span>
                  <span className="text-base font-bold text-[#8a1820]">{totalFormatted}<span className="text-[10px] font-normal text-gray-500">{totalLabel}</span></span>
                </div>
                <Button size="sm" className="mt-2 w-full text-xs" asChild>
                  <Link href={`/solicita-prezentare?module=${cart.join(',')}`}>Solicita oferta</Link>
                </Button>
              </>
            )}
          </div>
        )}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            'flex size-14 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all',
            cart.length > 0
              ? 'bg-[#8a1820] text-white hover:bg-[#6d1319]'
              : 'bg-white text-[#8a1820] border border-gray-200 hover:shadow-xl',
          )}
        >
          <ShoppingCart className="size-5" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#8a1820] shadow">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </>
  );
}

// Export toggleCart hook for module sections to use
export function useModuleCart() {
  // This is managed via a global event system
  return {
    addToCart: (id: string) => {
      window.dispatchEvent(new CustomEvent('module-cart-toggle', { detail: id }));
    },
  };
}
