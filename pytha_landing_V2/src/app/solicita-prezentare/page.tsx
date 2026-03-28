import type { Metadata } from 'next';
import { Suspense } from 'react';

import PrezentareForm from '@/components/forms/prezentare-form';

export const metadata: Metadata = {
  title: 'Programeaza o prezentare gratuita',
  description:
    'Programeaza o prezentare gratuita a software-ului PYTHA. In doar 15 minute, iti aratam cum PYTHA poate transforma fluxul tau de productie.',
};

export default function SolicitaPrezentarePage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="space-y-4 text-balance text-center">
            <h1 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Programeaza o{' '}
              <span className="text-gradient">prezentare gratuita</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-snug">
              In doar 15 minute, iti aratam cum PYTHA poate transforma fluxul tau
              de productie. Fara obligatii.
            </p>
          </div>

          <div className="bg-card mt-8 rounded-md border p-6 shadow-sm">
            <Suspense fallback={<div className="h-64 animate-pulse rounded-md" />}>
              <PrezentareForm />
            </Suspense>
          </div>

          <p className="text-muted-foreground mt-4 text-center text-xs">
            Datele tale sunt in siguranta. Nu le partajam cu nimeni.
          </p>
        </div>
      </div>
    </section>
  );
}
