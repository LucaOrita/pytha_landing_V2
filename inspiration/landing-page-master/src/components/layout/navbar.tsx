'use client';
import {
  BarChart3,
  BlocksIcon,
  FileWarning,
  Filter,
  Link2,
  Settings,
  StepForward,
  ToolCase,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Logo from '@/components/layout/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { WaitlistModal } from '../payload/WaitlistModal';

export const NAV_LINKS = [
  { label: 'Acasă', href: '/' },
  // {
  //   label: 'Funcționalități',
  //   href: '/#features',
  //   subitems: [
  //     {
  //       label: 'Detectarea riscurilor',
  //       href: '/#features-carousel',
  //       description: 'Detectează nereguli și riscuri ascunse în documente',
  //       icon: FileWarning,
  //     },
  //     {
  //       label: 'Unelte pentru dispecerat',
  //       href: '/#features-grid',
  //       description: 'Instrumente care îți simplifică munca în dispecerat',
  //       icon: ToolCase,
  //     },
  //     {
  //       label: 'Verificarea documentelor',
  //       href: '/#features-showcase',
  //       description: 'Verifică documentele în 4 pași simpli',
  //       icon: Settings,
  //     },
  //   ],
  // },
  // { label: 'About', href: '/about' },
  { label: 'Prețuri', href: '/pricing' },
  { label: 'Studii de caz', href: '/studycase' },
  { label: 'Blog', href: '/blog' },
  { label: 'Întrebări frecvente', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const ACTION_BUTTONS = [
  { label: 'Începe acum', href: '/waitlist', variant: 'default' as const },
];
const Navbar = ({
  initialBannerVisible = true,
}: {
  initialBannerVisible?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAtLeast } = useMediaQuery();
  const pathname = usePathname();
  const [isBannerVisible, setIsBannerVisible] = useState(initialBannerVisible);
  const hideNavbar = [
    '/signin',
    '/signup',
    '/docs',
    '/not-found',
    '/forgot-password',
  ].some((route) => pathname.includes(route));

  useEffect(() => {
    const handleBannerDismiss = () => {
      setIsBannerVisible(false);
    };

    window.addEventListener('banner-dismissed', handleBannerDismiss);
    return () =>
      window.removeEventListener('banner-dismissed', handleBannerDismiss);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (hideNavbar) return null;

  return (
    <header
      className={cn(
        'isolate z-50 transition-all duration-300 ease-in-out',
        isScrolled && isAtLeast('lg')
          ? 'fixed top-0 right-0 left-0 translate-y-2 px-5.5'
          : 'relative',
      )}
    >
      <div
        className={cn(
          'bg-background navbar-container relative z-50 flex h-[var(--header-height)] items-center justify-between gap-4 transition-all duration-300 ease-in-out',
          isScrolled &&
            isAtLeast('lg') &&
            'h-[calc(var(--header-height)-20px)] max-w-7xl rounded-full shadow-sm backdrop-blur-md',
        )}
      >
        <Logo className=" " />

        <div className="flex items-center gap-8">
          <NavigationMenu viewport={false} className="hidden lg:block">
            <NavigationMenuList className="">
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {/* @ts-expect-error well well well */}
                  {item.subitems ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          'cursor-pointer [&_svg]:ms-2 [&_svg]:size-4',
                          // "after:from-chart-2 after:to-chart-3 after:absolute after:-inset-0.25 after:-z-1 after:rounded-sm after:bg-gradient-to-tr after:opacity-0 after:transition-all after:content-[''] hover:after:opacity-100",
                          pathname.startsWith(item.href) &&
                            'bg-primary/10 text-primary font-semibold',
                        )}
                        suppressHydrationWarning
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                        <ul className="grid w-[263px] gap-2">
                          â{/* @ts-expect-error well well well */}
                          {item.subitems.map((subitem) => (
                            <li key={subitem.label}>
                              <NavigationMenuLink
                                href={subitem.href}
                                className="hover:bg-primary/5 hover:text-primary/90 flex flex-row items-start gap-3 p-3 transition-colors"
                              >
                                <subitem.icon className="text-foreground size-5.5 shrink-0" />
                                <div className="flex flex-col gap-1">
                                  <div className="text-sm font-medium tracking-normal">
                                    {subitem.label}
                                  </div>
                                  <div className="text-muted-foreground text-xs leading-snug">
                                    {subitem.description}
                                  </div>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        // "after:from-chart-2 after:to-chart-3 after:absolute after:-inset-0.25 after:-z-1 after:rounded-sm after:bg-gradient-to-tr after:opacity-0 after:transition-all after:content-[''] hover:after:opacity-100",
                        pathname === item.href &&
                          'bg-primary/10 text-primary font-semibold',
                      )}
                      suppressHydrationWarning
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            {/* <ThemeToggle /> */}
            {ACTION_BUTTONS.map((button) =>
              button.href === '/waitlist' ? (
                <WaitlistModal key="">
                  <Button
                    key={button.label}
                    variant={button.variant}
                    className="rounded-full shadow-none"
                  >
                    {button.label}
                  </Button>
                </WaitlistModal>
              ) : (
                <Button
                  key={button.label}
                  variant={button.variant}
                  className="rounded-full shadow-none"
                  asChild
                >
                  <Link href={button.href}>{button.label}</Link>
                </Button>
              ),
            )}
          </div>
          <div className="flex items-center gap-2 lg:hidden lg:gap-4">
            {/* <ThemeToggle /> */}
            <button
              className="text-muted-foreground relative flex size-8 rounded-sm border lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div
                className={cn(
                  'absolute top-1/2 left-1/2 block w-4 -translate-x-1/2 -translate-y-1/2',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                  )}
                ></span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? 'opacity-0' : '',
                  )}
                ></span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                  )}
                ></span>
              </div>
            </button>
          </div>
        </div>
        {/*  Mobile Menu Navigation */}
        <div
          className={cn(
            'bg-background/95 text-accent-foreground fixed inset-0 -z-10 flex flex-col justify-between tracking-normal backdrop-blur-md transition-all duration-500 ease-out lg:hidden',
            isBannerVisible
              ? 'pt-[calc(var(--header-height)+3rem)]'
              : 'pt-[var(--header-height)]',
            isMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'pointer-events-none translate-x-full opacity-0',
          )}
        >
          <div className="container">
            <NavigationMenu
              orientation="vertical"
              className="inline-block w-full max-w-none py-10"
            >
              <NavigationMenuList className="w-full flex-col items-start gap-0">
                {NAV_LINKS.map((item) => (
                  <NavigationMenuItem key={item.label} className="w-full py-2">
                    {/* @ts-expect-error well well well */}
                    {item.subitems ? (
                      <Accordion type="single" collapsible className="">
                        <AccordionItem value={item.label}>
                          <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between px-2 py-3 text-base font-normal hover:no-underline">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <div className="space-y-2">
                              {/* @ts-expect-error well well well */}
                              {item.subitems.map((subitem) => (
                                <NavigationMenuLink
                                  key={subitem.label}
                                  href={subitem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={cn(
                                    'text-muted-foreground hover:bg-primary/5 hover:text-primary/90 flex flex-row gap-2 p-3 font-medium transition-colors',
                                    pathname === subitem.href &&
                                      'bg-primary/10 text-primary font-semibold',
                                  )}
                                  suppressHydrationWarning
                                >
                                  <subitem.icon className="size-5" />
                                  <span className="">{subitem.label}</span>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className={cn(
                          'hover:text-primary/90 text-base transition-colors',
                          pathname === item.href &&
                            'text-primary font-semibold',
                        )}
                        onClick={() => setIsMenuOpen(false)}
                        suppressHydrationWarning
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex flex-col gap-4.5 border-t px-6 py-4">
            {ACTION_BUTTONS.map((button) => (
              <Button
                key={button.label}
                variant={
                  button.variant // button.variant === 'ghost' ? 'outline' : button.variant
                }
                asChild
                className="h-12 flex-1 rounded-sm shadow-sm"
              >
                <Link href={button.href} onClick={() => setIsMenuOpen(false)}>
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
