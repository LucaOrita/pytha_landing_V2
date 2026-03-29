'use client';

import { Check, ChevronDown, Minus } from 'lucide-react';
import { useState } from 'react';

const MODULES = [
  { name: 'Pachet de baza', permanent: '4.950€', monthly: '99€', starter: true, pro: true, enterprise: true },
  { name: 'Workshop', permanent: '2.450€', monthly: '55€', starter: false, pro: true, enterprise: true },
  { name: 'CAM Interface', permanent: '1.950€', monthly: '44€', starter: false, pro: true, enterprise: true },
  { name: 'Parts List', permanent: '1.290€', monthly: '29€', starter: false, pro: true, enterprise: true },
  { name: 'Generators', permanent: '1.150€', monthly: '26€', starter: false, pro: true, enterprise: true },
  { name: 'Nesting', permanent: '1.100€', monthly: '25€', starter: false, pro: true, enterprise: true },
  { name: 'RadioLab', permanent: '980€', monthly: '42€', starter: false, pro: false, enterprise: true },
  { name: 'Biblioteci', permanent: '820€', monthly: '—', starter: false, pro: false, enterprise: true },
  { name: 'Parametrics', permanent: '640€', monthly: '14€', starter: false, pro: false, enterprise: true },
  { name: 'Freeform', permanent: '590€', monthly: '13€', starter: false, pro: false, enterprise: true },
  { name: 'Acord service', permanent: '840€/an', monthly: '—', starter: null, pro: null, enterprise: null },
];

function CellIcon({ value }: { value: boolean | null }) {
  if (value === null) return <span className="text-xs text-gray-400">Optional</span>;
  if (value) return <Check className="mx-auto size-4 text-green-600" />;
  return <Minus className="mx-auto size-4 text-gray-300" />;
}

export default function PricingTable() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="mx-auto max-w-5xl">
      <button
        onClick={() => setShowTable(!showTable)}
        className="mx-auto flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:shadow-md"
      >
        Vezi toate modulele individual
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${showTable ? 'rotate-180' : ''}`}
        />
      </button>

      {showTable && (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold">Modul</th>
                <th className="px-4 py-3 font-semibold">Licenta permanenta</th>
                <th className="px-4 py-3 font-semibold">Lunar</th>
                <th className="px-4 py-3 text-center font-semibold">Starter</th>
                <th className="px-4 py-3 text-center font-semibold">Profesional</th>
                <th className="px-4 py-3 text-center font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map((mod) => (
                <tr key={mod.name} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium">{mod.name}</td>
                  <td className="px-4 py-3 text-gray-500">{mod.permanent}</td>
                  <td className="px-4 py-3 text-gray-500">{mod.monthly}</td>
                  <td className="px-4 py-3 text-center"><CellIcon value={mod.starter} /></td>
                  <td className="px-4 py-3 text-center"><CellIcon value={mod.pro} /></td>
                  <td className="px-4 py-3 text-center"><CellIcon value={mod.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t px-4 py-3 text-xs text-gray-400">
            Discount la achizitia a 2+ module identice. Preturile nu includ TVA.
          </p>
        </div>
      )}
    </div>
  );
}
