import './globals.css';

import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { BookingModalProvider } from '@/hooks/use-booking-modal';
import { SEO_KEYWORDS } from '@/lib/seo-keywords';
import { cn } from '@/lib/utils';

const BASE_URL = 'https://pytha3d.ro';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'PYTHA 3D Romania — Software CAD/CAM complet pentru mobilier',
    template: '%s | PYTHA Romania',
  },
  description:
    'PYTHA este solutia CAD/CAM 3D completa pentru proiectare mobilier, vizualizare fotorealista si integrare CNC. Distribuit in Romania de AdLine Industries.',
  keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary, ...SEO_KEYWORDS.local],
  authors: [{ name: 'AdLine Industries' }],
  creator: 'AdLine Industries',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'PYTHA 3D Romania',
    title: 'PYTHA 3D Romania — Software CAD/CAM complet pentru mobilier',
    description: 'Solutia CAD/CAM 3D completa pentru proiectare mobilier, vizualizare fotorealista si integrare CNC.',
    url: BASE_URL,
    images: [{ url: '/images/pytha-theoram-logo.png', width: 1200, height: 630, alt: 'PYTHA 3D Romania' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PYTHA 3D Romania — Software CAD/CAM complet pentru mobilier',
    description: 'Solutia CAD/CAM 3D completa pentru proiectare mobilier si integrare CNC.',
  },
};

const globalJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PYTHA Romania — AdLine Industries',
    url: BASE_URL,
    logo: `${BASE_URL}/images/pytha-theoram-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40742065893',
      contactType: 'sales',
      availableLanguage: ['Romanian', 'English'],
    },
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
      'https://linkedin.com',
      'https://youtube.com',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PYTHA 3D Romania',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body
        className={cn(
          'relative flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*17)]',
          montserrat.variable,
          poppins.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
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
