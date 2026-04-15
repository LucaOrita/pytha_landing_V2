'use client';

import { Check, ChevronDown, Minus } from 'lucide-react';
import { useState } from 'react';

const MODULES = [
  {
    name: 'Pachet de bază',
    permanent: '4.950€',
    monthly: '99€',
    starter: true,
    pro: true,
    enterprise: true,
    desc: 'Modelare 3D solidă, cotare, export DWG/DXF/PDF',
  },
  {
    name: 'Workshop',
    permanent: '2.450€',
    monthly: '55€',
    starter: false,
    pro: true,
    enterprise: true,
    desc: 'Îmbinări automate, cant, pregătire CNC',
  },
  {
    name: 'CAM Interface',
    permanent: '1.950€',
    monthly: '44€',
    starter: false,
    pro: true,
    enterprise: true,
    desc: 'Export direct către Homag, Biesse, SCM și altele',
  },
  {
    name: 'Parts List',
    permanent: '1.290€',
    monthly: '29€',
    starter: false,
    pro: true,
    enterprise: true,
    desc: 'Liste de piese automate cu coduri QR',
  },
  {
    name: 'Generators',
    permanent: '1.150€',
    monthly: '26€',
    starter: false,
    pro: true,
    enterprise: true,
    desc: 'Generatoare parametrice pentru sertare, fețe etc.',
  },
  {
    name: 'Nesting',
    permanent: '1.100€',
    monthly: '25€',
    starter: false,
    pro: true,
    enterprise: true,
    desc: 'Optimizare avansată a debitării pentru economie de material',
  },
  {
    name: 'RadioLab',
    permanent: '980€',
    monthly: '42€',
    starter: false,
    pro: false,
    enterprise: true,
    desc: 'Randare fotorealistă de înaltă calitate',
  },
  {
    name: 'Biblioteci',
    permanent: '820€',
    monthly: '—',
    starter: false,
    pro: false,
    enterprise: false,
    desc: 'Acces la 35.000+ obiecte parametrice și decorative (doar licenta permanenta)',
  },
  {
    name: 'Parametrics',
    permanent: '640€',
    monthly: '14€',
    starter: false,
    pro: false,
    enterprise: true,
    desc: 'Proiectare inteligentă cu parametri și constrângeri',
  },
  {
    name: 'Freeform',
    permanent: '590€',
    monthly: '13€',
    starter: false,
    pro: false,
    enterprise: true,
    desc: 'Suprafețe libere și forme organice nelimitate',
  },
  {
    name: 'Acord service',
    permanent: '840€/an',
    monthly: '—',
    starter: null,
    pro: null,
    enterprise: null,
    desc: 'Actualizări anuale și suport prioritar',
  },
];

function CellIcon({ value }: { value: boolean | null }) {
  if (value === null)
    return (
      <span className="rounded-full bg-[#8a1820]/10 px-2 py-0.5 text-xs font-medium text-[#8a1820]">
        Opțional
      </span>
    );
  if (value)
    return (
      <div className="mx-auto flex size-6 items-center justify-center rounded-full bg-[#8a1820]/10">
        <Check className="size-3.5 text-[#8a1820]" />
      </div>
    );
  return (
    <div className="mx-auto flex size-6 items-center justify-center rounded-full bg-muted">
      <Minus className="size-3.5 text-muted-foreground/40" />
    </div>
  );
}

export default function PricingTable() {
  const [showTable, setShowTable] = useState(true);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex justify-center">
        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:border-[#8a1820]/40 hover:bg-[#8a1820]/5 hover:shadow-md"
        >
          {showTable ? 'Ascunde modulele' : 'Vezi toate modulele individual'}
          <ChevronDown
            className={`size-4 transition-transform duration-200 ${showTable ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {showTable && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-5 py-4 text-left font-semibold">Modul</th>
                <th className="hidden px-4 py-4 text-left font-semibold text-muted-foreground md:table-cell">
                  Descriere
                </th>
                <th className="px-4 py-4 text-right font-semibold">Permanentă</th>
                <th className="px-4 py-4 text-right font-semibold">Lunar</th>
                <th className="px-4 py-4 text-center font-semibold">Starter</th>
                <th className="px-4 py-4 text-center font-semibold">Profesional</th>
                <th className="px-4 py-4 text-center font-semibold text-[#8a1820]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map((mod, i) => (
                <tr
                  key={mod.name}
                  className={`border-b border-border/60 last:border-0 transition-colors hover:bg-muted/20 ${
                    i % 2 === 0 ? '' : 'bg-muted/10'
                  }`}
                >
                  <td className="px-5 py-3.5 font-medium">{mod.name}</td>
                  <td className="hidden px-4 py-3.5 text-xs text-muted-foreground md:table-cell">
                    {mod.desc}
                  </td>
                  <td className="px-4 py-3.5 text-right font-azeret-mono text-sm text-muted-foreground">
                    {mod.permanent}
                  </td>
                  <td className="px-4 py-3.5 text-right font-azeret-mono text-sm text-muted-foreground">
                    {mod.monthly}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <CellIcon value={mod.starter} />
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <CellIcon value={mod.pro} />
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <CellIcon value={mod.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
            Discount la achiziția a 2+ module identice. Prețurile nu includ TVA.
          </p>
        </div>
      )}
    </div>
  );
}
