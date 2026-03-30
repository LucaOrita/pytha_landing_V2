import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import CadBidSection from '@/components/sections/cadbid-section';
import ModuleSection, { type ModuleData } from '@/components/sections/module-section';
import { PricingToggle } from '@/components/sections/pricing-toggle';
import StickyModuleNav from '@/components/sections/sticky-module-nav';

export const metadata: Metadata = {
  title: 'Module PYTHA — Solutii CAD 3D modulare de la 590€',
  description:
    'Alege modulele PYTHA potrivite: Basic, Workshop, Nesting, CAM, RadioLab, CadBid. Licenta permanenta de la 590€ sau abonament lunar.',
  openGraph: { title: 'Module PYTHA — Solutii CAD 3D modulare', type: 'website' },
};

const MODULES: ModuleData[] = [
  {
    id: 'modul-basic',
    badge: 'Modul 1 — Pachet de baza',
    title: 'Pachetul de Baza',
    subtitle: 'Totul pentru un inceput profesionist in lumea CAD 3D',
    description:
      'Modelare intuitiva 2D si 3D, organizare perfecta a proiectelor, desene tehnice clare cu cote si sectiuni asociative, vizualizare cu raytracer de inalta performanta. Include interfete DWG, DXF, STEP, SKP, PDF, STL si multe altele.',
    features: [
      'Modelare hibrida 2D/3D cu solid modeling nativ',
      'Operatii rapide: Extindere, Centrare, Rotire, Boolean (Unire, Intersectie)',
      'Cotare automata si generare planse tehnice',
      'Randare fotorealista integrata (motor raytracer)',
      'Gestionare layere, sectiuni, grupuri si atribute personalizate',
      'Export/import: DWG, DXF, STL, OBJ, 3DS, PDF',
      'Functii Smart: Extend, Equalize, Change Number, Change Radius',
    ],
    price: '4.950€',
    monthlyPrice: '99€',
    priceNote: 'licenta permanenta',
    video: '/bg/base.mp4',
  },
  {
    id: 'modul-generators',
    badge: 'Modul 2 — Generatoare',
    title: 'Generatoare & Plug-in-uri',
    subtitle: 'Mobilier standardizat, generat automat si pregatit pentru CNC',
    description:
      'Generator inteligent pentru dulapuri (inclusiv panta acoperis), usi, sertare, rafturi, rafturi sticle si un wizard puternic pentru planificarea bucatariilor. Interfata de programare deschisa pentru plug-in-uri custom.',
    features: [
      'Generatoare corpuri: bucatarii, dressinguri, corpuri suspendate',
      'Configurare completa: dimensiuni, fronturi, accesorii',
      'Reguli automate de gaurire si cotare',
      'Export instant catre CNC',
      'Suport pentru plug-in-uri dezvoltate de utilizator',
    ],
    price: '1.150€',
    monthlyPrice: '26€',
    priceNote: 'licenta permanenta',
    video: '/videos/Generators & Plug–Ins.mp4',
  },
  {
    id: 'modul-workshop',
    badge: 'Modul 3 — Atelier',
    title: 'Workshop (Atelier)',
    subtitle: 'Flux de date fluid in fabrica digitala',
    description:
      'Transforma modelul 3D intr-un proiect pregatit pentru executie automata. Tip automat cu conectori Cam&Dowel, balamale sau dopuri — personalizat conform principiilor individuale de design.',
    features: [
      'Recunoastere automata a imbinarilor (Footprint)',
      'Gaurire, dibluire, santuire, frezare automata',
      'Aplicare automata de canturi',
      'Etichetare automata piese',
      'Suport pentru reguli constructive personalizate',
    ],
    price: '2.450€',
    monthlyPrice: '55€',
    priceNote: 'licenta permanenta',
    video: '/videos/Modulul Workshop – conectează proiectarea cu producția.mp4',
  },
  {
    id: 'modul-parts-list',
    badge: 'Modul 4 — Liste piese',
    title: 'Parts List (Lista de piese)',
    subtitle: 'Evaluare flexibila a proiectelor in liste si tabele',
    description:
      'Calcul pret per piesa, lungime sau suprafata. Export catre imprimanta sau CSV. Flexibilitate completa cu formate export pentru ERP, CRM, Excel, Word, XML, HTML.',
    features: [
      'Creare automata de lista piese din modelul 3D',
      'Atribute configurabile: material, dimensiuni, finisaje, greutate',
      'Export Excel, CSV, TXT, HTML',
      'Grupare si filtrare personalizata',
      'Integrare directa in documentatie tehnica',
    ],
    price: '1.290€',
    monthlyPrice: '29€',
    priceNote: 'licenta permanenta',
    video: '/videos/Din model, în tabel control total asupra fiecărei piese.mp4',
  },
  {
    id: 'modul-parametrics',
    badge: 'Modul 5 — Parametrizare',
    title: 'Parametrizare',
    subtitle: 'Creeaza propria biblioteca variabila',
    description:
      'Parametrizeaza-ti piesele si creaza o biblioteca de componente cu dimensiuni variabile, variante de design si functie de inlocuire rapida.',
    features: [
      'Control variabil pentru dimensiuni (latime, inaltime, adancime)',
      'Formule, conditii si restrictii in configurare',
      'Actualizare automata a ansamblurilor',
      'Functie Replace pentru componente',
      'Integrare parametrica in biblioteci',
    ],
    price: '640€',
    monthlyPrice: '14€',
    priceNote: 'licenta permanenta',
    video: '/videos/Modulul Parametric – proiectare inteligentă, adaptabilă și eficientă.mp4',
  },
  {
    id: 'modul-library',
    badge: 'Modul 6 — Biblioteca',
    title: 'Biblioteca',
    subtitle: 'Peste 35.000 de elemente gata de utilizat',
    description:
      'Acces la o colectie vasta de componente 3D pentru arhitectura, prelucrarea lemnului, design expozitii, amenajare magazine, iluminat, accesorii decorative si plante.',
    features: [
      'Componente 3D pregatite pentru integrare rapida',
      'Redimensionare parametrica automata',
      'Elemente decorative si functionale',
      'Obiecte compatibile cu Workshop si export CNC',
      'Inserare directa in proiect si randare',
    ],
    price: '820€',
    priceNote: 'achizitie unica (lifetime)',
    video: '/videos/Modulul Bibliotecă – acces la zeci de mii de obiecte parametrice si decorative.mp4',
  },
  {
    id: 'modul-freeform',
    badge: 'Modul 7 — Suprafete libere',
    title: 'Freeform (Suprafete libere)',
    subtitle: 'Libertate geometrica pentru forme care ies din tipare',
    description:
      'Instrumente speciale pentru crearea obiectelor cu suprafete curbate: Loft, Rail Sweep, Coons Face — control complet asupra formei si curburii.',
    features: [
      'Creare suprafete complexe: Loft, Rail Sweep, Coons Face',
      'Control complet asupra formei si curburii',
      'Generare decupaje decorative si piese sculpturale',
      'Compatibilitate cu fluxul de productie CNC',
      'Integrare nesting si workshop',
    ],
    price: '590€',
    monthlyPrice: '13€',
    priceNote: 'licenta permanenta',
    video: '/videos/Modulul Freeform – libertate geometrică pentru forme care ies din tipare.mp4',
  },
  {
    id: 'modul-nesting',
    badge: 'Modul 8 — Nesting',
    title: 'Nesting (Optimizare debitare)',
    subtitle: 'Fiecare centimetru de material conteaza',
    description:
      'Optimizare eficienta si rapida a pieselor pe panouri — chiar si pentru contururi libere. Suporta materiale si grosimi diferite, minimizeaza pierderile.',
    features: [
      'Nesting pentru piese rectangulare si contur liber',
      'Respectarea fibrei si a marginii de siguranta',
      'Minimizare pierderi materiale',
      'Gestionare stocuri de panouri si resturi',
      'Export optimizat catre CNC',
    ],
    price: '1.100€',
    monthlyPrice: '25€',
    priceNote: 'licenta permanenta',
    video: '/videos/Modulul Nesting – optimizare avansată a debitării pentru orice tip de piesă.mp4',
  },
  {
    id: 'modul-cam',
    badge: 'Modul 9 — Interfata CAM',
    title: 'Interfata CAM',
    subtitle: 'Conectivitate extinsa catre orice tehnologie CNC',
    description:
      'Completarea ideala a Workshop-ului PYTHA. Suport nativ pentru cele mai utilizate formate din industrie, fara conversii suplimentare.',
    features: [
      'Export fisiere G-code, MPR, DXF, CIX, PGM etc.',
      'Compatibilitate cu Homag, Biesse, SCM, Felder, DDX',
      'Export automat de prelucrari: gaurire, frezare, conturare',
      'Configurare multipla de postprocesoare',
      'Eliminare necesitate softuri intermediare',
    ],
    price: '1.950€',
    monthlyPrice: '44€',
    priceNote: 'licenta permanenta',
    video: '/videos/CAM Interface – Conectivitate extinsă către orice tehnologie CNC.mp4',
  },
  {
    id: 'modul-radiolab',
    badge: 'Modul 10 — Randare',
    title: 'RadioLab',
    subtitle: 'Prezentari care vand — randare fotorealista in timp real',
    description:
      'Redare in timp real cu tehnica Radiosity. Miscare interactiva prin scena, simulare iluminat natural si LED, creare texturi si materiale, inregistrare video, suport VR.',
    features: [
      'Simulare avansata de iluminat (Radiosity)',
      'Editare lumini, texturi, reflexii in timp real',
      'Generare animatii si prezentari interactive',
      'Export video sau integrare VR',
      'Randare rapida fara timp mare de calcul',
    ],
    price: '980€',
    monthlyPrice: '42€',
    priceNote: 'licenta permanenta',
    image: '/bg/radio.jpg',
  },
];

export default function ModulePythaPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasa', href: '/' }, { label: 'Module PYTHA' }]} />
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <div className="flex items-center justify-center">
              <span className="bg-[#fff1f2] text-[#8a1820] rounded-full px-3 py-1 text-xs font-medium">
                10 module + CadBid
              </span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Modulele PYTHA —{' '}
              <span className="text-[#8a1820]">construieste-ti solutia perfecta</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
              Alege doar ce ai nevoie: de la modelare 3D de baza pana la integrare CNC
              completa si ofertare automata cu CadBid.
            </p>
            <div className="flex justify-center pt-2">
              <Button asChild>
                <Link href="/solicita-prezentare">Solicita oferta personalizata</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <StickyModuleNav />

      {/* Pricing toggle + Module sections */}
      <PricingToggle>
        <div className="divide-border divide-y">
          {MODULES.map((mod, i) => (
            <ModuleSection key={mod.id} module={mod} index={i} />
          ))}
        </div>

        {/* CadBid — special pro card */}
        <CadBidSection />
      </PricingToggle>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Nu stii ce module ai nevoie?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-snug text-gray-500">
            Echipa noastra te ajuta sa alegi pachetul perfect pentru atelierul tau —
            gratuit si fara obligatii.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4.5">
            <Button asChild>
              <Link href="/solicita-prezentare">Programeaza o consultanta gratuita</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solicita-prezentare">Vezi preturile complete</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
