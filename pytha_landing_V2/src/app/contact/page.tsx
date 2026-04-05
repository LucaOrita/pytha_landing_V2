import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import ContactForm from '@/components/forms/contact-form';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Contact PYTHA Romania — AdLine Industries Bucuresti',
  description:
    'Contacteaza AdLine Industries, partener autorizat PYTHA. Bd. Metalurgiei 99-99B, Bucuresti. Tel: +40 742 065 893. Raspundem in maxim 24h.',
  openGraph: { title: 'Contact PYTHA Romania', type: 'website' },
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Telefon',
    lines: [
      { text: '+40 742 065 893', href: 'tel:+40742065893' },
      { text: '+40 742 065 376', href: 'tel:+40742065376' },
    ],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: [
      { text: 'pytha@adlineindustries.ro', href: 'mailto:pytha@adlineindustries.ro' },
    ],
  },
  {
    icon: MapPin,
    label: 'Adresa',
    lines: [
      { text: 'Bulevardul Metalurgiei 99-99B, Bucuresti 041832', href: undefined },
    ],
  },
  {
    icon: Clock,
    label: 'Program',
    lines: [
      { text: 'Luni - Vineri: 09:00 - 17:00', href: undefined },
      { text: 'Sambata - Duminica: Inchis', href: undefined },
    ],
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PYTHA Romania — AdLine Industries',
  image: 'https://pytha3d.ro/images/pytha-theoram-logo.png',
  telephone: '+40742065893',
  email: 'pytha@adlineindustries.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bulevardul Metalurgiei 99-99B',
    addressLocality: 'Bucuresti',
    postalCode: '041832',
    addressCountry: 'RO',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  url: 'https://pytha3d.ro',
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[#8a1820]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-[#10a5ca]/5 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              <span className="text-[#8a1820]">Contacteaza-ne</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
              Suntem aici sa te ajutam. Raspundem in maximum 24 de ore.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column: Form + Info */}
      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-18">
          {/* Left: Form */}
          <div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
              <h2 className="mb-6 text-xl font-bold">
                Trimite-ne un mesaj
              </h2>
              <Suspense fallback={<div className="h-64 animate-pulse rounded-md" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Sub-form CTAs */}
            <div className="mt-6 text-center">
              <p className="mb-3 text-sm text-gray-500">Sau programeaza direct:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="sm" variant="outline" asChild>
                  <Link href="/solicita-prezentare">Solicita oferta</Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/solicita-prezentare">Solicita prezentare</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="space-y-6 lg:sticky lg:top-36 lg:self-start">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#fff1f2]">
                      <Icon className="size-4 text-[#8a1820]" />
                    </div>
                    <h3 className="font-bold">{item.label}</h3>
                  </div>
                  <div className="space-y-1">
                    {item.lines.map((line) =>
                      line.href ? (
                        <a
                          key={line.text}
                          href={line.href}
                          className="block text-sm text-[#8a1820] transition-opacity hover:opacity-80"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p key={line.text} className="text-sm text-gray-500">
                          {line.text}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
              <h3 className="mb-3 font-bold">Social media</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8a1820] transition-opacity hover:opacity-80"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <iframe
                title="Locatie AdLine Industries"
                className="h-48 w-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.1760296585153!2d26.1376258769667!3d44.37061747107713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fdfcab934173%3A0x1e80a87946f514b9!2sBulevardul%20Metalurgiei%2099-99b%2C%20Bucure%C8%99ti%20041837!5e1!3m2!1sro!2sro!4v1744898976930!5m2!1sro!2sro"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
