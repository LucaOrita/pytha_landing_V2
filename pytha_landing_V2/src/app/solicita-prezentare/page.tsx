import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

import FormSwitcher from '@/components/forms/form-switcher';

export const metadata: Metadata = {
  title: 'Programează demonstrație gratuită PYTHA 3D CAD',
  description:
    'Demo gratuit PYTHA in 15 minute. Descopera cum software-ul CAD/CAM poate transforma fluxul tau de productie mobilier. Fără obligații.',
  openGraph: { title: 'Demonstrație gratuită PYTHA 3D', type: 'website' },
};

const BENEFITS = [
  'Demo personalizat pe nevoile tale',
  'Fără obligații sau costuri ascunse',
  'Răspuns garantat in 24h',
  'Echipa locala, in limba română',
];

export default function SolicitaPrezentarePage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-18">
          {/* Left: Context + benefits */}
          <div>
            <h1 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Programează o{' '}
              <span className="text-[#8a1820]">demonstrație gratuită</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-snug text-gray-500">
              In 15 minute, iti aratam cum PYTHA se potriveste exact pe fluxul tau
              de productie. Fără obligații.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle className="size-5 shrink-0 text-green-600" />
                  <span className="text-base">{b}</span>
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm leading-relaxed text-gray-600 italic">
                &ldquo;Am redus timpii de proiectare cu 40% in primele luni.&rdquo;
              </p>
              <p className="mt-2 text-xs text-gray-400">
                – Utilizator PYTHA verificat
              </p>
            </div>

            {/* Price context */}
            <div className="mt-6 space-y-1">
              <p className="text-sm text-gray-500">
                Preturi de la 99€/luna &middot; Licenta permanenta de la 4.950€
              </p>
              <Link
                href="/preturi"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#8a1820] hover:underline"
              >
                Vezi toate preturile →
              </Link>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
              <Suspense fallback={<div className="h-96 animate-pulse rounded-md" />}>
                <FormSwitcher />
              </Suspense>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Datele sunt protejate conform GDPR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
