import type { Metadata } from 'next';
import { Suspense } from 'react';

import PrezentareForm from '@/components/forms/prezentare-form';

export const metadata: Metadata = {
  title: 'Programeaza prezentare gratuita PYTHA 3D CAD',
  description:
    'Prezentare gratuita PYTHA in 15 minute. Descopera cum software-ul CAD/CAM poate transforma fluxul tau de productie mobilier.',
  openGraph: { title: 'Prezentare gratuita PYTHA 3D', type: 'website' },
};

export default function SolicitaPrezentarePage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="space-y-4 text-balance text-center">
            <h1 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Programeaza o{' '}
              <span className="text-gradient">prezentare gratuita</span>
            </h1>
            <p className="text-lg leading-snug text-gray-500">
              In doar 15 minute, iti aratam cum PYTHA poate transforma fluxul tau
              de productie. Fara obligatii.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
            <Suspense fallback={<div className="h-64 animate-pulse rounded-md" />}>
              <PrezentareForm />
            </Suspense>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Datele tale sunt in siguranta. Nu le partajam cu nimeni.
          </p>
        </div>
      </div>
    </section>
  );
}
