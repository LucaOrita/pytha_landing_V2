import type { Metadata } from 'next';
import { CheckCircle, Clock, Gift, Shield } from 'lucide-react';
import { Suspense } from 'react';

import OfertaForm from '@/components/forms/oferta-form';
import Logo from '@/components/layout/logo';

export const metadata: Metadata = {
  title: 'Solicita oferta PYTHA — Preturi personalizate module CAD',
  description:
    'Primeste o oferta personalizata PYTHA in maxim 24h. Alege modulele potrivite atelierului tau — licenta permanenta sau abonament lunar.',
  openGraph: { title: 'Solicita oferta PYTHA 3D', type: 'website' },
};

const TRUST_POINTS = [
  { icon: CheckCircle, text: 'Licenta permanenta — platesti o data, folosesti mereu' },
  { icon: Shield, text: 'Pret transparent — fara costuri ascunse' },
  { icon: Clock, text: 'Raspundem in maxim 24 de ore' },
  { icon: Gift, text: 'Prezentare gratuita inclusa in oferta' },
];

export default function SolicitaOfertaPage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-18">
          {/* Left: Form */}
          <div>
            <h1 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Solicita oferta <span className="text-gradient">personalizata</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-snug">
              Completeaza formularul si primesti o oferta adaptata nevoilor atelierului
              tau in maximum 24 de ore.
            </p>

            <div className="mt-8">
              <Suspense fallback={<div className="bg-card h-96 animate-pulse rounded-md border" />}>
                <OfertaForm />
              </Suspense>
            </div>
          </div>

          {/* Right: Trust elements */}
          <div className="space-y-6 lg:sticky lg:top-36 lg:self-start">
            {/* De ce PYTHA */}
            <div className="bg-card rounded-md border p-6 shadow-sm">
              <h2 className="text-accent-foreground mb-4 font-bold">De ce PYTHA?</h2>
              <ul className="space-y-3">
                {TRUST_POINTS.map((point) => {
                  const Icon = point.icon;
                  return (
                    <li key={point.text} className="flex items-start gap-3">
                      <Icon className="text-secondary mt-0.5 size-5 shrink-0" />
                      <span className="text-sm leading-snug">{point.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-card rounded-md border p-6 shadow-sm">
              <blockquote className="text-sm leading-snug italic">
                &ldquo;De cand folosim PYTHA, timpul de pregatire pentru CNC s-a redus
                cu 40%. O investitie care s-a amortizat in primele 3 luni.&rdquo;
              </blockquote>
              <p className="text-muted-foreground mt-3 text-xs">
                — Producator mobilier, Cluj-Napoca
              </p>
            </div>

            {/* Badges */}
            <div className="flex gap-3">
              <div className="bg-card flex-1 rounded-md border p-4 text-center shadow-sm">
                <Clock className="text-secondary mx-auto mb-2 size-5" />
                <p className="text-xs font-medium">Raspundem in 24h</p>
              </div>
              <div className="bg-card flex-1 rounded-md border p-4 text-center shadow-sm">
                <Gift className="text-secondary mx-auto mb-2 size-5" />
                <p className="text-xs font-medium">Prezentare gratuita</p>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center pt-2">
              <Logo showPartner noLink iconClassName="w-5" wordmarkClassName="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
