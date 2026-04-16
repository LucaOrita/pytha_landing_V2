'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  CheckboxGroup,
  InputField,
  RadioField,
  SelectField,
} from '@/components/ui/form-field';
import { analytics } from '@/lib/analytics';
import { getLandingPage, getUtmParams } from '@/lib/utm';

const TIP_FIRMA_OPTIONS = [
  { value: '', label: 'Selecteaza...' },
  { value: 'producator', label: 'Producator mobilier' },
  { value: 'proiectant', label: 'Proiectant / Designer' },
  { value: 'tamplar', label: 'Tamplar / Atelier mic' },
  { value: 'arhitect', label: 'Arhitect / Birou arhitectura' },
  { value: 'altele', label: 'Altele' },
];

const CNC_OPTIONS = [
  { value: 'da', label: 'Da' },
  { value: 'nu', label: 'Nu' },
  { value: 'in-plan', label: 'In plan' },
];

const CAND_OPTIONS = [
  { value: '', label: 'Selecteaza...' },
  { value: 'asap', label: 'Cât mai curând' },
  { value: 'saptamana-aceasta', label: 'Săptămâna aceasta' },
  { value: 'saptamana-viitoare', label: 'Săptămâna viitoare' },
  { value: 'luna-viitoare', label: 'Luna viitoare' },
];

const PERSOANE_OPTIONS = [
  { value: '', label: 'Selecteaza...' },
  { value: '1', label: '1 persoana' },
  { value: '2-5', label: '2-5 persoane' },
  { value: '6+', label: '6+ persoane' },
];

const SOFTWARE_OPTIONS = [
  { value: 'sketchup', label: 'SketchUp' },
  { value: 'autocad', label: 'AutoCAD' },
  { value: 'corpus', label: 'Corpus' },
  { value: 'topsolid', label: 'TopSolid' },
  { value: 'pro100', label: 'PRO100' },
  { value: 'nimic', label: 'Nimic (fara software)' },
  { value: 'altele', label: 'Altele' },
];

interface FormData {
  firma: string;
  contact: string;
  email: string;
  telefon: string;
  tipFirma: string;
  cnc: string;
  cand: string;
  persoane: string;
  software: string[];
}

const initialData: FormData = {
  firma: '', contact: '', email: '', telefon: '',
  tipFirma: '', cnc: '', cand: '', persoane: '', software: [],
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function PrezentareForm({ onSuccess }: { onSuccess?: () => void }) {
  const searchParams = useSearchParams();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.firma.trim()) e.firma = 'Numele firmei este obligatoriu';
    if (!data.contact.trim()) e.contact = 'Persoana de contact este obligatorie';
    if (!data.email.trim()) e.email = 'Email-ul este obligatoriu';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Format email invalid';
    if (!data.telefon.trim()) e.telefon = 'Telefonul este obligatoriu';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const modulParam = searchParams.get('modul') || '';
      const pachetParam = searchParams.get('pachet') || '';
      const payload = {
        ...data,
        modul: modulParam,
        pachet: pachetParam,
        _meta: {
          utm: getUtmParams(),
          landingPage: getLandingPage(),
          submittedFrom: window.location.pathname,
          submittedAt: new Date().toISOString(),
        },
      };
      console.log('Prezentare form submission:', payload);
      analytics.formSubmit('prezentare', window.location.pathname);
      setStatus('success');
      onSuccess?.();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
          <svg className="size-6 text-[#8a1820]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">Prezentare programata!</h2>
        <p className="mt-2 text-gray-500">
          Te contactam in cel mai scurt timp pentru a confirma data si ora.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <InputField label="Numele firmei" name="firma" required value={data.firma} onChange={(v) => set('firma', v)} error={errors.firma} />
      <InputField label="Persoana de contact" name="contact" required placeholder="Nume Prenume" value={data.contact} onChange={(v) => set('contact', v)} error={errors.contact} />
      <div className="grid gap-5 md:grid-cols-2">
        <InputField label="Email" name="email" type="email" required value={data.email} onChange={(v) => set('email', v)} error={errors.email} />
        <InputField label="Telefon" name="telefon" type="tel" required value={data.telefon} onChange={(v) => set('telefon', v)} error={errors.telefon} />
      </div>
      <SelectField label="Tip firma" name="tipFirma" options={TIP_FIRMA_OPTIONS} value={data.tipFirma} onChange={(v) => set('tipFirma', v)} />
      <RadioField label="CNC in productie?" name="cnc" options={CNC_OPTIONS} value={data.cnc} onChange={(v) => set('cnc', v)} />
      <SelectField label="Când dorești prezentarea?" name="cand" options={CAND_OPTIONS} value={data.cand} onChange={(v) => set('cand', v)} />
      <SelectField label="Câte persoane proiecteaza in firma ta?" name="persoane" options={PERSOANE_OPTIONS} value={data.persoane} onChange={(v) => set('persoane', v)} />
      <CheckboxGroup label="Ce software folosesti acum?" name="software" options={SOFTWARE_OPTIONS} values={data.software} onChange={(v) => set('software', v)} />
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          A aparut o eroare. Te rugam sa incerci din nou.
        </p>
      )}
      <Button type="submit" className="w-full py-3" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Se trimite...
          </span>
        ) : 'Programează demo gratuit'}
      </Button>
    </form>
  );
}
