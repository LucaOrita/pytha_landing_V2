import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Check, Globe, Phone, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { FaqCategory } from '@/components/sections/faq-renderer';

const FaqRenderer = dynamic(() =>
  import('@/components/sections/faq-renderer').then((m) => m.FaqRenderer),
);

export const metadata: Metadata = {
  title: 'Asistenta tehnica PYTHA — Suport local Romania + Germania',
  description:
    'Suport tehnic local in Romania: telefon, email, TeamViewer. Training individual de la 125€/ora. Acord service + backup PYTHA Germania.',
  openGraph: { title: 'Asistenta tehnica PYTHA Romania', type: 'website' },
};

const SUPPORT_OPTIONS = [
  {
    icon: Phone,
    title: 'Suport Tehnic Local',
    description:
      'Echipa de specialisti din Romania. Telefon, email sau TeamViewer — ajutor real cand ai nevoie, nu peste saptamani.',
  },
  {
    icon: Settings,
    title: 'Asistenta Continua in Productie',
    description:
      'Nu doar la instalare. Te sustinem si in fluxul zilnic: configurari CNC, nesting optimizat, export catre utilaje.',
  },
  {
    icon: Globe,
    title: 'Suport Oficial PYTHA Germania',
    description:
      'Pentru intrebari complexe sau actualizari avansate, colaboram direct cu dezvoltatorii din Germania. Expertiza completa.',
  },
];

const SERVICE_FEATURES = [
  'Actualizari software, inclusiv versiuni noi',
  'Linie telefonica tehnica',
  'Mentenanta la distanta',
  'Reduceri la training-uri si evenimente',
  'Documentatie digitala extinsa si tutoriale',
  'Functii extinse ale software-ului',
];

const TRAINING_FEATURES = [
  'Personalizat pe nevoile tale specifice',
  'Pana la 3 persoane pe sesiune',
  'La sediul tau sau la PYTHA Lab',
  'Training online (pe ora) la cerere',
  'Inceput rapid si eficient in lumea PYTHA',
];

const FAQ_DATA: FaqCategory[] = [
  {
    title: 'Modelare si design',
    faqs: [
      { question: 'Ce tipuri de produse pot fi proiectate cu PYTHA?', answer: 'Mobilier din lemn industrial (dulapuri, rafturi, mese), mobilier din lemn natural, standuri expozitionale, rafturi de prezentare si orice combinatie de materiale. Imaginatia dumneavoastra este limita.' },
      { question: 'Pot specifica materiale diferite pentru fiecare parte a unui produs?', answer: 'Da, folosind functia de atribuire „Material Assigning" puteti selecta materiale diferite pentru fiecare suprafata a unui component.' },
      { question: 'Este posibila setarea tesiturilor in timpul proiectarii?', answer: 'Da, folosind functia „Chamfer 3D" puteti introduce latimea si unghiul tesiturii, apoi aplica pe orice muchie.' },
      { question: 'Pot crea modele parametrice cu dimensiuni variabile?', answer: 'Da, modulul Parametrics permite definirea de dimensiuni variabile, formule, conditii si restrictii. Componenta se actualizeaza automat cand schimbati un parametru.' },
      { question: 'PYTHA suporta modelare de suprafete curbate?', answer: 'Da, modulul Freeform ofera instrumente speciale: Loft, Rail Sweep, Coons Face — control complet asupra formei si curburii pentru design organic.' },
    ],
  },
  {
    title: 'Biblioteci si personalizare',
    faqs: [
      { question: 'Ce tipuri de imbinari sunt disponibile in biblioteca PYTHA?', answer: 'Biblioteca include cam & diblu, suruburi, dibluri reglabile, caneluri si balamale. Actualizata periodic cu modele de la Blum, Hettich, Hafele.' },
      { question: 'Pot fi ajustate pozitia si cantitatea imbinarilor?', answer: 'Da, puteti seta formule astfel incat numarul de imbinari sa se ajusteze automat in functie de dimensiunile componentului.' },
      { question: 'Pot utilizatorii crea imbinari personalizate?', answer: 'Da, utilizatorii pot crea singuri noi imbinari (macro-uri) fara a fi nevoie de suport tehnic.' },
      { question: 'Cate obiecte contine biblioteca PYTHA?', answer: 'Peste 35.000 de elemente pentru arhitectura, prelucrare lemn, expozitii, magazine, iluminat, decorative si plante.' },
    ],
  },
  {
    title: 'Feronerie si componente',
    faqs: [
      { question: 'Pot tipuri diferite de balamale sa isi actualizeze automat cantitatile?', answer: 'Da, diferitele tipuri de balamale pot fi setate sa corespunda cu diferite stiluri de usi, iar cantitatile se actualizeaza automat.' },
      { question: 'Pot produsele semifabricate cu forme neregulate fi optimizate?', answer: 'Da, PYTHA ofera optiuni de optimizare, decalare si aranjare a semifabricatelor cu forme neregulate in resturi de material.' },
      { question: 'Pot dimensiunile semifabricatelor fi setate automat?', answer: 'Da, prin salvarea automata pe baza ultimei editari sau setarea de dimensiuni implicite bazate pe dimensiunile dulapului.' },
    ],
  },
  {
    title: 'Integrare CNC si productie',
    faqs: [
      { question: 'Pot fi configurate automat setarile pentru frezarea usilor cu profil?', answer: 'Da, creati seturi de usi profilate, salvati-le in biblioteca si inlocuiti-le in modelele de dulapuri dupa necesitati.' },
      { question: 'Ce formate CNC suporta PYTHA pentru export?', answer: 'G-code, MPR (WoodWop), DXF, CIX (bSolid), PGM, XML. Compatibil cu Homag, Biesse, SCM, Felder, DDX si multe altele.' },
      { question: 'Exista avertismente pentru erori de proiectare?', answer: 'PYTHA ofera avertismente pentru panouri supradimensionate si validari de grosime.' },
    ],
  },
  {
    title: 'Exporturi si etichetare',
    faqs: [
      { question: 'Ce campuri sunt incluse in fisierele CSV exportate?', answer: 'Dimensiuni, materiale, canturi, cantitati, numere de serie, nume program CNC si orice atribute definite de utilizator.' },
      { question: 'Cum sunt tiparite etichetele de catre masini?', answer: 'Pentru CNC nesting: fisiere XML pentru cod G si etichete automate. Pentru fierastraie: fisiere CSV pentru optimizare si imprimare etichete.' },
      { question: 'Permite PYTHA proiectarea diferitelor sabloane de etichete?', answer: 'Da, PYTHA permite proiectarea mai multor sabloane de etichete, inclusiv cu coduri QR si barcode.' },
    ],
  },
];

export default function AsistentaTehnicaPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
                Productia ta nu sta. Nici sprijinul nostru.
              </span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Asistenta tehnica{' '}
              <span className="text-gradient">dedicata</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
              Cu PYTHA si AdLine Industries, ai mereu o echipa de profesionisti langa
              tine — de la instalare pana la optimizarea productiei zilnice.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Support options */}
      <section className="section-padding bg-white">
        <div className="container grid gap-6 md:grid-cols-3">
          {SUPPORT_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
                  <Icon className="size-5 text-[#8a1820]" />
                </div>
                <h2 className="text-xl font-bold">{opt.title}</h2>
                <p className="leading-snug text-gray-500">{opt.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing: Acord Service + Training */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Servicii <span className="text-gradient">disponibile</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:mt-16">
            {/* Acord de Service */}
            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold">Acord de Service</h3>
              <div className="mt-4 flex items-baseline gap-4">
                <div>
                  <span className="text-3xl font-bold text-[#8a1820]">840€</span>
                  <span className="text-sm text-gray-500">/an</span>
                </div>
                <span className="text-sm text-gray-500">sau</span>
                <div>
                  <span className="text-3xl font-bold text-[#8a1820]">2.140€</span>
                  <span className="text-sm text-gray-500">/3 ani</span>
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {SERVICE_FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fff1f2]">
                      <Check className="size-3 text-[#8a1820]" />
                    </div>
                    <span className="text-sm leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" asChild>
                <Link href="/solicita-oferta">Solicita acord de service</Link>
              </Button>
            </div>

            {/* Training Individual */}
            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold">Training Individual</h3>
              <div className="mt-4 flex items-baseline gap-4">
                <div>
                  <span className="text-3xl font-bold text-[#8a1820]">125€</span>
                  <span className="text-sm text-gray-500">/ora online</span>
                </div>
                <span className="text-sm text-gray-500">sau</span>
                <div>
                  <span className="text-3xl font-bold text-[#8a1820]">920€</span>
                  <span className="text-sm text-gray-500">/zi on-site</span>
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {TRAINING_FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fff1f2]">
                      <Check className="size-3 text-[#8a1820]" />
                    </div>
                    <span className="text-sm leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link href="/solicita-prezentare">Programeaza training</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Intrebari <span className="text-gradient">frecvente</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl md:mt-16">
            <FaqRenderer categories={FAQ_DATA} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Ai nevoie de suport acum?
          </h2>
          <div className="mt-8 flex justify-center gap-4.5">
            <Button asChild>
              <Link href="/contact">Contacteaza-ne</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
