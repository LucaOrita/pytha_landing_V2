'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  CheckboxGroup,
  InputField,
  SelectField,
} from '@/components/ui/form-field';

const CAND_OPTIONS = [
  { value: 'asap', label: 'Cat mai curand' },
  { value: 'saptamana-aceasta', label: 'Saptamana aceasta' },
  { value: 'saptamana-viitoare', label: 'Saptamana viitoare' },
  { value: 'luna-viitoare', label: 'Luna viitoare' },
];

const PERSOANE_OPTIONS = [
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
  { value: 'nimic', label: 'Nimic' },
  { value: 'altele', label: 'Altele' },
];

interface FormData {
  firma: string;
  contact: string;
  email: string;
  telefon: string;
  cand: string;
  persoane: string;
  software: string[];
}

const initialData: FormData = {
  firma: '', contact: '', email: '', telefon: '',
  cand: '', persoane: '', software: [],
};

export default function PrezentareForm({ onSuccess }: { onSuccess?: () => void }) {
  const searchParams = useSearchParams();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const modulParam = searchParams.get('modul') || '';
    console.log('Prezentare form submission:', { ...data, modul: modulParam });
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="bg-secondary mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-accent-foreground text-xl font-bold">Prezentare programata!</h2>
        <p className="text-muted-foreground mt-2">
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
      <SelectField label="Cand doresti prezentarea?" name="cand" options={CAND_OPTIONS} value={data.cand} onChange={(v) => set('cand', v)} />
      <SelectField label="Cate persoane proiecteaza in firma ta?" name="persoane" options={PERSOANE_OPTIONS} value={data.persoane} onChange={(v) => set('persoane', v)} />
      <CheckboxGroup label="Ce software folosesti acum?" name="software" options={SOFTWARE_OPTIONS} values={data.software} onChange={(v) => set('software', v)} />
      <Button type="submit" className="w-full">Programeaza prezentarea</Button>
    </form>
  );
}
