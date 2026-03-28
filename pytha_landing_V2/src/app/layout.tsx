import './globals.css';

import type { Metadata } from 'next';
import { Azeret_Mono, Inter } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { BookingModalProvider } from '@/hooks/use-booking-modal';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const azeretMono = Azeret_Mono({
  variable: '--font-azeret-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'PYTHA Romania — Software CAD 3D pentru mobilier',
    template: '%s | PYTHA Romania',
  },
  description:
    'PYTHA este solutia CAD/CAM 3D completa pentru proiectare mobilier, vizualizare fotorealista si integrare CNC. Distribuit in Romania de AdLine Industries.',
  keywords: [
    'software CAD 3D mobilier',
    'PYTHA Romania',
    'proiectare mobilier 3D',
    'digitalizare atelier mobila',
    'CAD CAM mobilier',
    'software proiectare mobila',
    'CNC mobilier',
  ],
  authors: [{ name: 'AdLine Industries' }],
  creator: 'AdLine Industries',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*17)]',
          inter.variable,
          azeretMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* Background Blur */}
          <div className="bg-background/10 absolute inset-0 z-[-2] backdrop-blur-[85px] will-change-transform md:backdrop-blur-[170px]" />
          {/* Noise Background */}
          <div
            className="absolute inset-0 z-[-1] size-full opacity-70 mix-blend-overlay dark:md:opacity-100"
            style={{
              background: `url(/images/noise.webp) lightgray 0% 0% / 83.69px 83.69px repeat`,
            }}
          />
          <BookingModalProvider>
            <Navbar />
            <main className="flex-1 pt-[var(--header-height)]">{children}</main>
            <Footer />
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
