import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import CookieBanner from '@/components/ui/cookie-banner';
import WhatsAppWidget from '@/components/ui/whatsapp-widget';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dacoda.ro'),
  title: {
    default: 'DACODA SRL — Transport Rutier Internațional',
    template: '%s | DACODA SRL',
  },
  description:
    'Casă de expediții cu tradiție din 1993. Transport rutier, ADR, frigorific și agabaritic în Europa, CSI și Asia. 32 ani experiență. +40 785 225 446',
  keywords: [
    'transport rutier',
    'casa expeditii',
    'transport international',
    'transport ADR',
    'transport agabaritic',
    'expeditii Romania',
    'transport frigorific',
    'transport CSI',
    'DACODA',
  ],
  authors: [{ name: 'DACODA SRL' }],
  creator: 'DACODA SRL',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://dacoda.ro',
    siteName: 'DACODA SRL',
    title: 'DACODA SRL — Transport Rutier Internațional',
    description:
      'Casă de expediții cu 32 ani experiență. Transport rutier, ADR, frigorific, agabaritic în 40+ țări.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DACODA SRL — Transport Rutier Internațional',
    description:
      'Casă de expediții cu 32 ani experiență în Europa, CSI și Asia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DACODA SRL',
  description:
    'Casă de expediții cu tradiție din 1993. Transport rutier internațional, ADR, frigorific și agabaritic.',
  url: 'https://dacoda.ro',
  telephone: '+40785225446',
  email: 'comercial@dacoda.ro',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Timișoara',
    addressCountry: 'RO',
  },
  foundingDate: '1993',
  areaServed: 'Europe',
  serviceType: 'Freight forwarding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`h-screen ${satoshi.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="dacoda-theme"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <CookieBanner />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
