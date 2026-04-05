'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  CheckboxGroup,
  InputField,
  RadioField,
  SelectField,
} from '@/components/ui/form-field';
import { cn } from '@/lib/utils';

const MODULES = [
  { id: 'modul-basic', label: 'Pachet de Baza', price: '4.950€', monthly: '99€/luna' },
  { id: 'modul-generators', label: 'Generatoare & Plug-in-uri', price: '1.150€', monthly: '26€/luna' },
  { id: 'modul-workshop', label: 'Workshop (Atelier)', price: '2.450€', monthly: '55€/luna' },
  { id: 'modul-parts-list', label: 'Parts List', price: '1.290€', monthly: '29€/luna' },
  { id: 'modul-parametrics', label: 'Parametrizare', price: '640€', monthly: '14€/luna' },
  { id: 'modul-library', label: 'Biblioteca', price: '820€', monthly: null },
  { id: 'modul-freeform', label: 'Freeform', price: '590€', monthly: '13€/luna' },
  { id: 'modul-nesting', label: 'Nesting', price: '1.100€', monthly: '25€/luna' },
  { id: 'modul-cam', label: 'Interfata CAM', price: '1.950€', monthly: '44€/luna' },
  { id: 'modul-radiolab', label: 'RadioLab', price: '980€', monthly: '42€/luna' },
];

const TIP_FIRMA_OPTIONS = [
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

export default function OfertaForm() {
  const searchParams = useSearchParams();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [isMonthly, setIsMonthly] = useState(false);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const moduleParam = searchParams.get('module') || searchParams.get('modul') || '';
    if (moduleParam) {
      setSelectedModules(moduleParam.split(',').filter(Boolean));
    }
  }, [searchParams]);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const selected = MODULES.filter((m) => selectedModules.includes(m.id));
  const total = selected.reduce((sum, m) => {
    const p = isMonthly && m.monthly ? m.monthly : m.price;
    return sum + parseFloat(p.replace(/[^\d]/g, ''));
  }, 0);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.email.trim()) e.email = 'Email-ul este obligatoriu';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Format email invalid';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    console.log('Oferta form submission:', { ...data, module: selectedModules, pricing: isMonthly ? 'lunar' : 'permanent' });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
          <svg className="size-6 text-[#8a1820]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">Cerere de oferta trimisa!</h2>
        <p className="mt-2 text-gray-500">
          Te contactam in cel mai scurt timp cu oferta personalizata{selected.length > 0 ? ` pentru ${selected.length} module` : ''}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Module selector */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-bold">Selecteaza modulele dorite</h3>
          <div className="bg-muted inline-flex items-center gap-0.5 rounded-full p-0.5">
            <button
              type="button"
              className={cn(
                'cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition',
                !isMonthly ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground',
              )}
              onClick={() => setIsMonthly(false)}
            >
              Viata
            </button>
            <button
              type="button"
              className={cn(
                'cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition',
                isMonthly ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground',
              )}
              onClick={() => setIsMonthly(true)}
            >
              Lunar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {MODULES.map((m) => {
            const checked = selectedModules.includes(m.id);
            const price = isMonthly && m.monthly ? m.monthly : m.price;
            return (
              <label
                key={m.id}
                className={cn(
                  'flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 text-sm transition-all',
                  checked
                    ? 'border-[#8a1820] bg-[#fff1f2] ring-1 ring-[#8a1820]'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                )}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleModule(m.id)}
                    className="accent-[#8a1820] size-4 rounded"
                  />
                  <span className={cn('font-medium', checked && 'text-[#8a1820]')}>{m.label}</span>
                </div>
                <span className="text-xs text-gray-500">{price}</span>
              </label>
            );
          })}
        </div>
        {selected.length > 0 && (
          <div className="mt-3 flex items-baseline justify-between rounded-lg bg-gray-50 px-4 py-2.5">
            <span className="text-sm font-medium">{selected.length} module selectate</span>
            <span className="text-lg font-bold text-[#8a1820]">
              {total.toLocaleString('de-DE')}€
              <span className="text-xs font-normal text-gray-500">{isMonthly ? '/luna' : ' total'}</span>
            </span>
          </div>
        )}
      </div>

      {/* Contact fields */}
      <div className="space-y-4">
        <InputField label="Numele firmei" name="firma" value={data.firma} onChange={(v) => set('firma', v)} error={errors.firma} />
        <InputField label="Persoana de contact" name="contact" placeholder="Nume Prenume" value={data.contact} onChange={(v) => set('contact', v)} error={errors.contact} />
        <div className="grid gap-4 md:grid-cols-2">
          <InputField label="Email" name="email" type="email" required value={data.email} onChange={(v) => set('email', v)} error={errors.email} />
          <InputField label="Telefon" name="telefon" type="tel" value={data.telefon} onChange={(v) => set('telefon', v)} error={errors.telefon} />
        </div>
        <SelectField label="Tip firma" name="tipFirma" options={TIP_FIRMA_OPTIONS} value={data.tipFirma} onChange={(v) => set('tipFirma', v)} />
        <RadioField label="CNC in productie?" name="cnc" options={CNC_OPTIONS} value={data.cnc} onChange={(v) => set('cnc', v)} />
        <SelectField label="Cand doresti prezentarea?" name="cand" options={CAND_OPTIONS} value={data.cand} onChange={(v) => set('cand', v)} />
        <SelectField label="Cate persoane proiecteaza in firma ta?" name="persoane" options={PERSOANE_OPTIONS} value={data.persoane} onChange={(v) => set('persoane', v)} />
        <CheckboxGroup label="Ce software folosesti acum?" name="software" options={SOFTWARE_OPTIONS} values={data.software} onChange={(v) => set('software', v)} />
      </div>

      <Button type="submit" className="w-full py-3">
        {selected.length > 0
          ? `Solicita oferta pentru ${selected.length} module`
          : 'Solicita oferta personalizata'}
      </Button>
    </form>
  );
}
