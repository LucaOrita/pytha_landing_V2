import { Check } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FEATURES = [
  'Generare oferte in timp real direct din modelul 3D',
  'Liste de tăiere automate cu dimensiuni, finisaje, preturi per piesa',
  'Rapoarte analiza costuri pentru productie',
  'Master data bank centralizat per companie (preturi materiale, finisaje, manopera)',
  'Rapoarte personalizate: pentru client, productie, comenzi si expeditie',
  'Integrare cu PYTHA 3D Modeller si PYTHA Planner',
];

export default function CadBidSection() {
  return (
    <section id="modul-cadbid" className="scroll-mt-36 bg-card py-16 md:py-20">
      <div className="container">
        {/* Pro card with gradient border from STYLE_GUIDE */}
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl',
            'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-tr before:from-[var(--chart-1)]/10 before:via-[var(--chart-2)] before:to-[var(--chart-3)] before:mask-b-from-40% before:mask-b-to-80%',
            'after:absolute after:inset-[1px] after:rounded-[calc(1rem-1px)] after:bg-card',
          )}
        >
          <div className="relative z-10 flex flex-col gap-10 p-8 lg:flex-row lg:gap-18 lg:p-12">
            {/* Left: info */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
                  Add-on
                </span>
                <span className="text-xs text-muted-foreground">Nou</span>
              </div>

              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
                CadBid
              </h2>

              <h3 className="text-lg font-semibold">
                Transforma proiecte în oferte profesionale în secunde
              </h3>

              <p className="text-base leading-snug text-muted-foreground lg:text-lg">
                CadBid conecteaza modelul 3D cu banca ta de preturi si genereaza automat
                cotații detaliate, liste de tăiere si rapoarte, gata de trimis clientului.
                Add-on browser-based, perfect integrat cu PYTHA.
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/solicita-prezentare?modul=cadbid">Solicită demo CadBid</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/solicita-prezentare?modul=cadbid">Include in oferta</Link>
                </Button>
              </div>
            </div>

            {/* Right: features */}
            <div className="flex-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Functionalitati
              </p>
              <ul className="space-y-3">
                {FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <div className="bg-secondary mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3" />
                    </div>
                    <span className="text-sm leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
