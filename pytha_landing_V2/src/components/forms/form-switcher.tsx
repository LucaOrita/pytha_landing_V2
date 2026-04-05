'use client';

import { useSearchParams } from 'next/navigation';

import OfertaForm from '@/components/forms/oferta-form';
import PrezentareForm from '@/components/forms/prezentare-form';

export default function FormSwitcher() {
  const searchParams = useSearchParams();
  const hasModuleParam = searchParams.has('module') || searchParams.has('modul');

  return hasModuleParam ? <OfertaForm /> : <PrezentareForm />;
}
