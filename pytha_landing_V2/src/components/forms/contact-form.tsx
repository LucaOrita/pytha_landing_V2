'use client';

import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import { InputField, SelectField, TextareaField } from '@/components/ui/form-field';

const SUBIECT_OPTIONS = [
  { value: 'general', label: 'Informatii generale' },
  { value: 'suport', label: 'Suport tehnic' },
  { value: 'oferta', label: 'Solicitare oferta' },
  { value: 'prezentare', label: 'Programare prezentare' },
  { value: 'altele', label: 'Altele' },
];

interface FormData {
  nume: string;
  email: string;
  telefon: string;
  subiect: string;
  mesaj: string;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    nume: '', email: '', telefon: '', subiect: '', mesaj: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = useCallback(<K extends keyof FormData>(key: K, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.nume.trim()) e.nume = 'Numele este obligatoriu';
    if (!data.email.trim()) e.email = 'Email-ul este obligatoriu';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Format email invalid';
    if (!data.mesaj.trim()) e.mesaj = 'Mesajul este obligatoriu';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    console.log('Contact form submission:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="bg-secondary mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-accent-foreground text-xl font-bold">Mesaj trimis!</h3>
        <p className="text-muted-foreground mt-2">Iti raspundem in maxim 24 de ore.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <InputField label="Nume" name="nume" required value={data.nume} onChange={(v) => set('nume', v)} error={errors.nume} />
      <InputField label="Email" name="email" type="email" required value={data.email} onChange={(v) => set('email', v)} error={errors.email} />
      <InputField label="Telefon" name="telefon" type="tel" placeholder="Optional" value={data.telefon} onChange={(v) => set('telefon', v)} />
      <SelectField label="Subiect" name="subiect" options={SUBIECT_OPTIONS} value={data.subiect} onChange={(v) => set('subiect', v)} />
      <TextareaField label="Mesaj" name="mesaj" required placeholder="Scrie mesajul tau aici..." value={data.mesaj} onChange={(v) => set('mesaj', v)} error={errors.mesaj} />
      <Button type="submit" className="w-full">Trimite mesajul</Button>
    </form>
  );
}
