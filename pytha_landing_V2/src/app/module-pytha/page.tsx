import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import CadBidSection from '@/components/sections/cadbid-section';
import ModuleSection, { type ModuleData } from '@/components/sections/module-section';
import StickyModuleNav from '@/components/sections/sticky-module-nav';

export const metadata: Metadata = {
  title: 'Module PYTHA — Construieste-ti solutia perfecta',
  description:
    'Descopera toate modulele PYTHA: Modeler Basic, Workshop, Nesting, CAM Interface, RadioLab, Parametrics, CadBid si multe altele. Alege doar ce ai nevoie.',
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
      'Cotare automata si generare planse tehnice',
      'Randare fotorealista integrata (motor raytracer)',
      'Curbe, detectie contururi, text 3D, deformari speciale',
      'Parametri SMART si actiuni dinamice (deschidere usi, sertare)',
      'Creare si utilizare biblioteci personalizate',
      'Export/import: DWG, DXF, 3DS, STEP, SVG, OBJ, SKP, PDF, STL',
    ],
    price: '4.950€',
    priceNote: 'licenta permanenta / 99€ pe luna',
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
    priceNote: 'licenta permanenta / 26€ pe luna',
  },
  {
    id: 'modul-workshop',
    badge: 'Modul 3 — Atelier',
    title: 'Workshop (Atelier)',
    subtitle: 'Flux de date fluid in fabrica digitala',
    description:
      'Transforma modelul 3D intr-un proiect pregatit pentru executie automata. Tip automat cu conectori Cam&Dowel, balamale sau dopuri — personalizat conform principiilor individuale de design.',
    features: [
      'Recunoastere automata imbinari (Footprint)',
      'Gaurire, dibluire, santuire, frezare automata in 3D',
      'Aplicare automata canturi',
      'Etichetare automata piese cu cod QR si barcode',
      'Trasare automata piese una cate una',
      'Interfata CAM Shaper Tool integrata',
    ],
    price: '2.450€',
    priceNote: 'licenta permanenta / 55€ pe luna',
  },
  {
    id: 'modul-parts-list',
    badge: 'Modul 4 — Liste piese',
    title: 'Parts List (Lista de piese)',
    subtitle: 'Evaluare flexibila a proiectelor in liste si tabele',
    description:
      'Calcul pret per piesa, lungime sau suprafata. Export catre imprimanta sau CSV. Flexibilitate completa cu formate export pentru ERP, CRM, Excel, Word, XML, HTML.',
    features: [
      'Atribute definite de utilizator',
      'Dimensiuni taiere, dimensiuni finale, lungimi suplimentare',
      'Canturi, material de baza, finisaj suprafata',
      'Numere de pozitie si nume program CNC',
      'Export CSV, XML, HTML, TXT si layout-uri custom',
    ],
    price: '1.290€',
    priceNote: 'licenta permanenta / 29€ pe luna',
  },
  {
    id: 'modul-parametrics',
    badge: 'Modul 5 — Parametrizare',
    title: 'Parametrizare',
    subtitle: 'Creeaza propria biblioteca variabila',
    description:
      'Parametrizeaza-ti piesele si creaza o biblioteca de componente cu dimensiuni variabile, variante de design si functie de inlocuire rapida.',
    features: [
      'Dimensiuni variabile (latime, inaltime, adancime)',
      'Formule, conditii si restrictii in configurare',
      'Spatiu rezervat pentru variante de design',
      'Functie Replace pentru componente',
      'Integrare parametrica in biblioteci de produse',
    ],
    price: '640€',
    priceNote: 'licenta permanenta / 14€ pe luna',
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
    priceNote: 'licenta permanenta / 13€ pe luna',
  },
  {
    id: 'modul-nesting',
    badge: 'Modul 8 — Nesting',
    title: 'Nesting (Optimizare debitare)',
    subtitle: 'Fiecare centimetru de material conteaza',
    description:
      'Optimizare eficienta si rapida a pieselor pe panouri — chiar si pentru contururi libere. Suporta materiale si grosimi diferite, minimizeaza pierderile.',
    features: [
      'Nesting rectangular, cu dinti si de forma libera',
      'Respectarea fibrei si marginii de siguranta',
      'Minimizare pierderi materiale',
      'Gestionare stocuri panouri si resturi',
      'Export optimizat catre CNC',
    ],
    price: '1.100€',
    priceNote: 'licenta permanenta / 25€ pe luna',
  },
  {
    id: 'modul-cam',
    badge: 'Modul 9 — Interfata CAM',
    title: 'Interfata CAM',
    subtitle: 'Conectivitate extinsa catre orice tehnologie CNC',
    description:
      'Completarea ideala a Workshop-ului PYTHA. Suport nativ pentru cele mai utilizate formate din industrie, fara conversii suplimentare.',
    features: [
      'WoodWop.mpr, WoodWop.dxf, AlphaCam',
      'bSolid/b.works.cix, EasyWood DDX',
      'NC Hops, EnRoute, Cobus Ncad, SCM Maestro',
      'Format-4, F4integrate, Imawop, G-Code',
      'PYTHA XML si configurare multipla postprocesoare',
    ],
    price: '1.950€',
    priceNote: 'licenta permanenta / 44€ pe luna',
  },
  {
    id: 'modul-radiolab',
    badge: 'Modul 10 — Randare',
    title: 'RadioLab',
    subtitle: 'Prezentari care vand — randare fotorealista in timp real',
    description:
      'Redare in timp real cu tehnica Radiosity. Miscare interactiva prin scena, simulare iluminat natural si LED, creare texturi si materiale, inregistrare video, suport VR.',
    features: [
      'Simulare avansata iluminat (Radiosity) in timp real',
      'Editare lumini, texturi, reflexii live',
      'Generare animatii si prezentari interactive',
      'Export video, suport VR / Oculus Rift',
      'Planificare profesionala iluminat, filtre avansate',
      'Imbunatatiri HDR si IBL pentru compozitii foto',
      'Aplicatie iOS si Android',
    ],
    price: '980€',
    priceNote: 'licenta permanenta / 42€ pe luna',
  },
];

export default function ModulePythaPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <div className="flex items-center justify-center">
              <span className="bg-muted text-accent-foreground rounded-full px-3 py-1 text-xs font-medium">
                10 module + CadBid
              </span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Modulele PYTHA —{' '}
              <span className="text-gradient">construieste-ti solutia perfecta</span>
            </h1>
            <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
              Alege doar ce ai nevoie: de la modelare 3D de baza pana la integrare CNC
              completa si ofertare automata cu CadBid.
            </p>
            <div className="flex justify-center pt-2">
              <Button asChild>
                <Link href="/solicita-oferta">Solicita oferta personalizata</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <StickyModuleNav />

      {/* Module sections */}
      <div className="divide-border divide-y">
        {MODULES.map((mod, i) => (
          <ModuleSection key={mod.id} module={mod} index={i} />
        ))}
      </div>

      {/* CadBid — special pro card */}
      <CadBidSection />

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Nu stii ce module ai nevoie?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg leading-snug">
            Echipa noastra te ajuta sa alegi pachetul perfect pentru atelierul tau —
            gratuit si fara obligatii.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4.5">
            <Button asChild>
              <Link href="/solicita-prezentare">Programeaza o consultanta gratuita</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solicita-oferta">Vezi preturile complete</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
