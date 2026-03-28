'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  CheckboxGroup,
  InputField,
  RadioField,
  SelectField,
  TextareaField,
} from '@/components/ui/form-field';

const MODULE_OPTIONS = [
  { value: 'basic', label: 'Basic' },
  { value: 'generators', label: 'Generators' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'parts-list', label: 'Parts List' },
  { value: 'parametrics', label: 'Parametrics' },
  { value: 'library', label: 'Library' },
  { value: 'freeform', label: 'Freeform' },
  { value: 'nesting', label: 'Nesting' },
  { value: 'cam', label: 'CAM Interface' },
  { value: 'radiolab', label: 'RadioLab' },
  { value: 'cadbid', label: 'CadBid' },
  { value: 'consultanta', label: 'Nu sunt sigur — vreau consultanta' },
];

const TIP_FIRMA_OPTIONS = [
  { value: 'producator', label: 'Producator mobilier' },
  { value: 'proiectant', label: 'Proiectant/Designer' },
  { value: 'tamplar', label: 'Tamplar' },
  { value: 'arhitect', label: 'Arhitect' },
  { value: 'altele', label: 'Altele' },
];

const SURSA_OPTIONS = [
  { value: 'meta', label: 'Meta Ads' },
  { value: 'google', label: 'Google' },
  { value: 'website', label: 'Website' },
  { value: 'recomandare', label: 'Recomandare' },
  { value: 'eveniment', label: 'Eveniment' },
  { value: 'altele', label: 'Altele' },
];

interface FormData {
  firma: string;
  contact: string;
  email: string;
  telefon: string;
  tipFirma: string;
  cnc: string;
  module: string[];
  mesaj: string;
  sursa: string;
}

const initialData: FormData = {
  firma: '', contact: '', email: '', telefon: '',
  tipFirma: '', cnc: '', module: [], mesaj: '', sursa: '',
};

export default function OfertaForm() {
  const searchParams = useSearchParams();
  const preselectedModule = searchParams.get('modul');

  const [data, setData] = useState<FormData>(() => ({
    ...initialData,
    module: preselectedModule ? [preselectedModule] : [],
  }));
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

    const utmData = {
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
    };

    console.log('Oferta form submission:', { ...data, ...utmData });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-md border p-8 text-center shadow-sm">
        <div className="bg-secondary mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-accent-foreground text-xl font-bold">Multumim!</h2>
        <p className="text-muted-foreground mt-2">
          Te contactam in maxim 24 de ore cu o oferta personalizata.
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
      <RadioField
        label="Aveti CNC in productie?"
        name="cnc"
        options={[
          { value: 'da', label: 'Da' },
          { value: 'nu', label: 'Nu' },
          { value: 'planificam', label: 'Planificam achizitia' },
        ]}
        value={data.cnc}
        onChange={(v) => set('cnc', v)}
      />
      <CheckboxGroup label="Module de interes" name="module" options={MODULE_OPTIONS} values={data.module} onChange={(v) => set('module', v)} />
      <TextareaField label="Mesaj aditional" name="mesaj" placeholder="Detalii suplimentare (optional)" value={data.mesaj} onChange={(v) => set('mesaj', v)} />
      <SelectField label="Cum ati aflat de noi?" name="sursa" options={SURSA_OPTIONS} value={data.sursa} onChange={(v) => set('sursa', v)} />
      <Button type="submit" className="w-full">Trimite cererea de oferta</Button>
    </form>
  );
}
