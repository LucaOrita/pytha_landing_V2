'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, type NavItem } from '@/lib/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  const isActive = (item: NavItem) => {
    if (pathname === item.href) return true;
    if (item.subitems) {
      const allLinks = [...item.subitems.modules, ...item.subitems.addons, ...item.subitems.industries];
      return allLinks.some((sub) => pathname.startsWith(sub.href.split('#')[0]));
    }
    return false;
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl">
      <div className="container flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo className="shrink-0" />

        <nav className="hidden lg:flex lg:items-center lg:gap-2 xl:gap-3">
          {NAV_LINKS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.subitems && handleDropdownEnter(item.label)}
              onMouseLeave={() => item.subitems && handleDropdownLeave()}
            >
              {item.subitems ? (
                <button
                  data-text={item.label}
                  className={cn(
                    'nav-item-stable cursor-pointer items-center gap-1 rounded-md px-4 py-1.5 text-sm transition-colors duration-200',
                    isActive(item)
                      ? 'bg-[var(--nav-active-bg)] font-semibold text-[var(--nav-active-pressed)]'
                      : 'text-muted-foreground hover:font-semibold hover:text-[var(--nav-hover)]',
                  )}
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  <span className="inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200',
                        openDropdown === item.label && 'rotate-180',
                      )}
                    />
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  data-text={item.label}
                  className={cn(
                    'nav-item-stable rounded-md px-4 py-1.5 text-sm transition-colors duration-200',
                    isActive(item)
                      ? 'bg-[var(--nav-active-bg)] font-semibold text-[var(--nav-active-pressed)]'
                      : 'text-muted-foreground hover:font-semibold hover:text-[var(--nav-hover)]',
                  )}
                >
                  {item.label}
                </Link>
              )}

              {item.subitems && (
                <div
                  className={cn(
                    'bg-popover border-border absolute top-full left-1/2 z-50 mt-1 w-[540px] -translate-x-1/2 rounded-lg border p-4 shadow-lg transition-all duration-200',
                    openDropdown === item.label
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0',
                  )}
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="grid grid-cols-[1fr_180px] gap-4">
                    <div>
                      <p className="text-muted-foreground mb-2 px-2 text-xs font-medium uppercase tracking-wider">Module</p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {item.subitems.modules.map((sub) => (
                          <Link key={sub.label} href={sub.href} className="group rounded-md px-2 py-1.5 transition-colors hover:bg-[var(--nav-active-bg)]">
                            <div className="text-sm font-medium group-hover:text-[var(--nav-hover)]">{sub.label}</div>
                            <div className="text-muted-foreground text-xs leading-snug">{sub.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="border-border border-l pl-4">
                      <p className="text-muted-foreground mb-2 px-2 text-xs font-medium uppercase tracking-wider">Add-on</p>
                      <div className="space-y-0.5">
                        {item.subitems.addons.map((sub) => (
                          <Link key={sub.label} href={sub.href} className="block rounded-md px-2 py-1.5 transition-colors hover:bg-[var(--nav-active-bg)]">
                            <div className="text-sm font-medium hover:text-[var(--nav-hover)]">{sub.label}</div>
                            <div className="text-muted-foreground text-xs leading-snug">{sub.description}</div>
                          </Link>
                        ))}
                      </div>
                      {item.subitems.industries.length > 0 && (
                        <>
                          <div className="border-border my-3 border-t" />
                          <p className="text-muted-foreground mb-2 px-2 text-xs font-medium uppercase tracking-wider">Industrii</p>
                          <div className="space-y-0.5">
                            {item.subitems.industries.map((sub) => (
                              <Link key={sub.label} href={sub.href} className="block rounded-md px-2 py-1.5 transition-colors hover:bg-[var(--nav-active-bg)]">
                                <div className="text-sm font-medium hover:text-[var(--nav-hover)]">{sub.label}</div>
                                <div className="text-muted-foreground text-xs leading-snug">{sub.description}</div>
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" asChild className="hidden bg-[var(--nav-active-pressed)] text-white hover:bg-[#6d1319] lg:inline-flex">
            <Link href="/solicita-prezentare">Solicită Prezentare</Link>
          </Button>
          <Button size="sm" asChild className="bg-[var(--nav-active-pressed)] text-white hover:bg-[#6d1319] lg:hidden">
            <Link href="/solicita-prezentare">Demo</Link>
          </Button>
          <button
            className="text-muted-foreground relative flex size-8 cursor-pointer rounded-sm border lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Meniu principal</span>
            <div className="absolute top-1/2 left-1/2 block w-4 -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true" className={cn('absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out', isMenuOpen ? 'rotate-45' : '-translate-y-1.5')} />
              <span aria-hidden="true" className={cn('absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out', isMenuOpen ? 'opacity-0' : '')} />
              <span aria-hidden="true" className={cn('absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out', isMenuOpen ? '-rotate-45' : 'translate-y-1.5')} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'bg-background/95 text-accent-foreground fixed inset-0 top-[var(--header-height)] z-50 flex flex-col justify-between tracking-normal backdrop-blur-md transition-all duration-500 ease-out lg:hidden',
          isMenuOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-full opacity-0',
        )}
      >
        <div className="container overflow-y-auto py-8">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                {item.subitems ? (
                  <>
                    <button
                      className={cn(
                        'flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-3 text-base transition-colors duration-200',
                        isActive(item) ? 'bg-[var(--nav-active-bg)] font-semibold text-[var(--nav-active-pressed)]' : 'hover:text-[var(--nav-hover)]',
                      )}
                      onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                      aria-expanded={mobileAccordion === item.label}
                    >
                      {item.label}
                      <ChevronDown className={cn('size-4 transition-transform duration-300', mobileAccordion === item.label && 'rotate-180')} />
                    </button>
                    <div className={cn('overflow-hidden transition-all duration-300', mobileAccordion === item.label ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0')}>
                      <div className="space-y-1 pb-2 pl-4">
                        <p className="text-muted-foreground px-2 pt-1 text-xs font-medium uppercase tracking-wider">Module</p>
                        {item.subitems.modules.map((sub) => (
                          <Link key={sub.label} href={sub.href} className="text-muted-foreground block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-[var(--nav-active-bg)] hover:text-[var(--nav-hover)]" onClick={() => setIsMenuOpen(false)}>{sub.label}</Link>
                        ))}
                        <p className="text-muted-foreground px-2 pt-3 text-xs font-medium uppercase tracking-wider">Add-on</p>
                        {item.subitems.addons.map((sub) => (
                          <Link key={sub.label} href={sub.href} className="text-muted-foreground block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-[var(--nav-active-bg)] hover:text-[var(--nav-hover)]" onClick={() => setIsMenuOpen(false)}>{sub.label}</Link>
                        ))}
                        {item.subitems.industries.length > 0 && (
                          <>
                            <p className="text-muted-foreground px-2 pt-3 text-xs font-medium uppercase tracking-wider">Industrii</p>
                            {item.subitems.industries.map((sub) => (
                              <Link key={sub.label} href={sub.href} className="text-muted-foreground block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-[var(--nav-active-bg)] hover:text-[var(--nav-hover)]" onClick={() => setIsMenuOpen(false)}>{sub.label}</Link>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className={cn('block rounded-md px-2 py-3 text-base transition-colors duration-200', isActive(item) ? 'bg-[var(--nav-active-bg)] font-semibold text-[var(--nav-active-pressed)]' : 'hover:text-[var(--nav-hover)]')} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex gap-4.5 border-t px-6 py-4">
          <Button asChild className="h-12 flex-1 rounded-sm transition-all hover:scale-105">
            <Link href="/solicita-prezentare" onClick={() => setIsMenuOpen(false)}>Solicită oferta</Link>
          </Button>
          <Button variant="outline" asChild className="h-12 flex-1 rounded-sm transition-all hover:scale-105">
            <Link href="/solicita-prezentare" onClick={() => setIsMenuOpen(false)}>Demo gratuit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
