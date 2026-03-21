'use client';

import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const SERVICII_LINKS = [
  { title: 'Transport Rutier', href: '/servicii/transport-rutier' },
  { title: 'Transport ADR', href: '/servicii/transport-adr' },
  { title: 'Transport Frigorific', href: '/servicii/transport-frigorific' },
  { title: 'Transport Agabaritic', href: '/servicii/transport-agabaritic' },
  { title: 'Aerian & Maritim', href: '/servicii/aerian-maritim' },
];

const NAV_LINKS = [
  { label: 'Servicii', href: '/servicii', hasDropdown: true },
  { label: 'Rute', href: '/rute' },
  { label: 'Blog', href: '/blog' },
  { label: 'Despre noi', href: '/despre-noi' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviciiOpen, setServiciiOpen] = useState(false);
  const [desktopServiciiOpen, setDesktopServiciiOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServiciiOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 lg:h-20 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-dacoda-orange text-xl font-bold tracking-wide">
            DACODA
          </span>
          <span
            className={cn(
              'text-[10px] tracking-wider transition-colors duration-300',
              scrolled ? 'text-dacoda-gray' : 'text-white/70',
            )}
          >
            Expediții Rutiere
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDesktopServiciiOpen(true)}
                onMouseLeave={() => setDesktopServiciiOpen(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300',
                    isActive('/servicii')
                      ? 'text-dacoda-orange'
                      : scrolled
                        ? 'text-dacoda-navy hover:text-dacoda-orange'
                        : 'text-white hover:text-white/80',
                  )}
                  onClick={() => setDesktopServiciiOpen(!desktopServiciiOpen)}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      desktopServiciiOpen ? 'rotate-180' : '',
                    )}
                  />
                </button>

                {/* Desktop Dropdown */}
                <div
                  className={cn(
                    'absolute top-full left-0 pt-2 transition-all duration-200',
                    desktopServiciiOpen
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0',
                  )}
                >
                  <div className="w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                    {SERVICII_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block rounded-lg px-3 py-2.5 text-sm transition-colors',
                          isActive(item.href)
                            ? 'bg-dacoda-orange-light text-dacoda-orange font-medium'
                            : 'text-dacoda-navy hover:bg-dacoda-orange-light hover:text-dacoda-orange',
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300',
                  isActive(link.href)
                    ? 'text-dacoda-orange'
                    : scrolled
                      ? 'text-dacoda-navy hover:text-dacoda-orange'
                      : 'text-white hover:text-white/80',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/transportatori"
            className="border-dacoda-orange text-dacoda-orange hover:bg-dacoda-orange-light rounded-xl border px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            Devino transportator
          </Link>
          <Link
            href="/cerere-oferta"
            className="bg-dacoda-orange hover:bg-dacoda-orange-dark rounded-xl px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
          >
            Cere ofertă
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className={cn(
            'relative flex size-10 items-center justify-center rounded-lg md:hidden',
            scrolled ? 'text-dacoda-navy' : 'text-white',
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meniu principal"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white transition-all duration-300 md:hidden',
          mobileOpen
            ? 'pointer-events-auto translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-full opacity-0',
        )}
      >
        <nav className="container flex flex-col gap-1 px-4 pt-6">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setServiciiOpen(!serviciiOpen)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg px-3 py-3 text-lg font-medium',
                    isActive('/servicii')
                      ? 'text-dacoda-orange'
                      : 'text-dacoda-navy',
                  )}
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      'h-5 w-5 transition-transform duration-200',
                      serviciiOpen ? 'rotate-90' : '',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    serviciiOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  <div className="border-dacoda-orange-light ml-3 space-y-1 border-l-2 pb-2 pl-3">
                    {SERVICII_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block rounded-lg px-3 py-2 text-sm transition-colors',
                          isActive(item.href)
                            ? 'text-dacoda-orange font-medium'
                            : 'text-dacoda-gray hover:text-dacoda-navy',
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-3 text-lg font-medium',
                  isActive(link.href)
                    ? 'text-dacoda-orange'
                    : 'text-dacoda-navy',
                )}
              >
                {link.label}
              </Link>
            ),
          )}

          {/* Mobile CTA Buttons */}
          <div className="mt-6 flex flex-col gap-3 px-3 pb-10">
            <Link
              href="/transportatori"
              className="border-dacoda-orange text-dacoda-orange rounded-xl border py-3 text-center text-sm font-medium transition-colors"
            >
              Devino transportator
            </Link>
            <Link
              href="/cerere-oferta"
              className="bg-dacoda-orange rounded-xl py-3 text-center text-sm font-medium text-white transition-colors"
            >
              Cere ofertă
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
