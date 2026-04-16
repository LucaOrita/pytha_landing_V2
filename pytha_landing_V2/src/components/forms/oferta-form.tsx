'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { InputField, SelectField, RadioField } from '@/components/ui/form-field';
import { analytics } from '@/lib/analytics';
import { getLandingPage, getUtmParams } from '@/lib/utm';
import { cn } from '@/lib/utils';

const MODULES = [
  { id: 'modul-basic', label: 'Pachet de Baza', price: '4.950€', monthly: '99€/luna' },
  { id: 'modul-generators', label: 'Generatoare', price: '1.150€', monthly: '26€/luna' },
  { id: 'modul-workshop', label: 'Workshop', price: '2.450€', monthly: '55€/luna' },
  { id: 'modul-parts-list', label: 'Parts List', price: '1.290€', monthly: '29€/luna' },
  { id: 'modul-parametrics', label: 'Parametrizare', price: '640€', monthly: '14€/luna' },
  { id: 'modul-library', label: 'Biblioteca', price: '820€', monthly: null },
  { id: 'modul-freeform', label: 'Freeform', price: '590€', monthly: '13€/luna' },
  { id: 'modul-nesting', label: 'Nesting', price: '1.100€', monthly: '25€/luna' },
  { id: 'modul-cam', label: 'Interfață CAM', price: '1.950€', monthly: '44€/luna' },
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
  { value: 'asap', label: 'Cât mai curând' },
  { value: 'saptamana-aceasta', label: 'Săptămâna aceasta' },
  { value: 'saptamana-viitoare', label: 'Săptămâna viitoare' },
  { value: 'luna-viitoare', label: 'Luna viitoare' },
];

interface FormData {
  firma: string;
  contact: string;
  email: string;
  telefon: string;
  tipFirma: string;
  cnc: string;
  cand: string;
  experienta: string;
}

const initialData: FormData = {
  firma: '', contact: '', email: '', telefon: '',
  tipFirma: '', cnc: '', cand: '', experienta: '',
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function OfertaForm() {
  const searchParams = useSearchParams();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [isMonthly, setIsMonthly] = useState(false);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    const moduleParam = searchParams.get('module') || searchParams.get('modul') || '';
    if (moduleParam) setSelectedModules(moduleParam.split(',').filter(Boolean));
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

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const payload = {
        ...data,
        module: selectedModules,
        pricing: isMonthly ? 'lunar' : 'permanent',
        _meta: {
          utm: getUtmParams(),
          landingPage: getLandingPage(),
          submittedFrom: window.location.pathname,
          submittedAt: new Date().toISOString(),
        },
      };
      console.log('Oferta form:', payload);
      analytics.formSubmit('oferta', window.location.pathname);
      setStatus('success');
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
        <h2 className="text-xl font-bold">Cerere de oferta trimisa!</h2>
        <p className="mt-2 text-gray-500">Te contactam in cel mai scurt timp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Contact - compact */}
      <div className="grid gap-4 md:grid-cols-2">
        <InputField label="Firma" name="firma" value={data.firma} onChange={(v) => set('firma', v)} />
        <InputField label="Persoana de contact" name="contact" placeholder="Nume Prenume" value={data.contact} onChange={(v) => set('contact', v)} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <InputField label="Email" name="email" type="email" required value={data.email} onChange={(v) => set('email', v)} error={errors.email} />
        <InputField label="Telefon" name="telefon" type="tel" value={data.telefon} onChange={(v) => set('telefon', v)} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Tip firma" name="tipFirma" options={TIP_FIRMA_OPTIONS} value={data.tipFirma} onChange={(v) => set('tipFirma', v)} />
        <SelectField label="Când dorești prezentarea?" name="cand" options={CAND_OPTIONS} value={data.cand} onChange={(v) => set('cand', v)} />
      </div>
      <RadioField label="CNC in productie?" name="cnc" options={CNC_OPTIONS} value={data.cnc} onChange={(v) => set('cnc', v)} />
      <InputField label="Experiența in proiectare (ce softuri cunosti?)" name="experienta" placeholder="ex: SketchUp, AutoCAD, PRO100..." value={data.experienta} onChange={(v) => set('experienta', v)} />

      {/* Module selector */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold">Selecteaza modulele dorite</h3>
          <div className="bg-muted inline-flex items-center gap-0.5 rounded-full p-0.5">
            <button type="button" className={cn('cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition', !isMonthly ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground')} onClick={() => setIsMonthly(false)}>Viata</button>
            <button type="button" className={cn('cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition', isMonthly ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground')} onClick={() => setIsMonthly(true)}>Lunar</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {MODULES.map((m) => {
            const checked = selectedModules.includes(m.id);
            const price = isMonthly && m.monthly ? m.monthly : m.price;
            return (
              <label key={m.id} className={cn('flex cursor-pointer items-center justify-between rounded-md border px-2.5 py-2 text-sm transition-all', checked ? 'border-[#8a1820] bg-[#fff1f2]' : 'border-gray-200 hover:border-gray-300')}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={checked} onChange={() => toggleModule(m.id)} className="accent-[#8a1820] size-3.5" />
                  <span className={cn('text-xs font-medium', checked && 'text-[#8a1820]')}>{m.label}</span>
                </div>
                <span className="text-[10px] text-gray-400">{price}</span>
              </label>
            );
          })}
        </div>
        {selected.length > 0 && (
          <div className="mt-2 flex items-baseline justify-between rounded-md bg-gray-50 px-3 py-2">
            <span className="text-xs font-medium">{selected.length} selectate</span>
            <span className="text-base font-bold text-[#8a1820]">{total.toLocaleString('de-DE')}€<span className="text-[10px] font-normal text-gray-500">{isMonthly ? '/luna' : ''}</span></span>
          </div>
        )}
      </div>

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
        ) : selected.length > 0 ? `Solicită ofertă · ${selected.length} module` : 'Solicită ofertă personalizată'}
      </Button>
    </form>
  );
}
