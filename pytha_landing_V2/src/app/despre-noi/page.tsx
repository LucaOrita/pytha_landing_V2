import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Globe, Package, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Despre PYTHA Romania & AdLine Industries | Partener oficial',
  description:
    'PYTHA Lab GmbH — 40+ ani de inovatie CAD. AdLine Industries — partener autorizat in Romania, Bulgaria si Ungaria. Suport local dedicat.',
  openGraph: { title: 'Despre PYTHA Romania & AdLine Industries', type: 'website' },
};

const KEY_FACTS = [
  { icon: Award, value: '40+', label: 'Ani de experienta in dezvoltare CAD' },
  { icon: Globe, value: '2.000+', label: 'Fabrici si ateliere utilizatoare' },
  { icon: Package, value: '16 limbi', label: 'Disponibilitate globala' },
  { icon: Shield, value: 'Made in Germany', label: 'Calitate germana garantata' },
];

const ADLINE_FEATURES = [
  {
    title: 'Livrare → Instalare → Training → Suport',
    description:
      'Pachet complet de servicii inclus in orice achizitie. Nu te lasam singur dupa vanzare — ramanem langa tine pe termen lung.',
  },
  {
    title: 'Echipamente CNC + Software integrat',
    description:
      'Nu doar software — oferim un ecosistem complet. Echipamente CNC precise si durabile, integrate perfect cu solutia PYTHA.',
  },
  {
    title: 'Suport in limba romana',
    description:
      'Echipa locala dedicata care intelege nevoile producatorilor din Romania. Telefon, email, TeamViewer — raspuns rapid garantat.',
  },
];

export default function DespreNoiPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Cine <span className="text-gradient">suntem</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
              Solutii software germane de top, livrate cu suport local dedicat de echipa
              AdLine Industries din Romania.
            </p>
          </div>
        </div>
      </section>

      {/* PYTHA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              PYTHA — 40+ ani de inovatie{' '}
              <span className="text-gradient">in CAD 3D</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-snug text-gray-500">
              PYTHA este un software dezvoltat integral in Germania, de catre compania
              PYTHA Lab GmbH, fondata in anul 1978 in Aschaffenburg. PYTHA a fost conceput
              initial ca un instrument care sa faca proiectarea asistata de calculator mai
              accesibila si mai intuitiva. De-a lungul deceniilor, software-ul a evoluat
              intr-un sistem CAD-CAM complet, orientat spre cerintele reale ale productiei
              si integrarii industriale. Astazi, PYTHA este un sistem CAD-CAM 3D complet,
              specializat in modelarea solida si dedicat industriilor care necesita proiectare
              precisa, vizualizare realista si conexiune directa cu productia. PYTHA este
              folosit de companii din peste 50 de tari si continua sa evolueze constant,
              ghidat de nevoile reale ale proiectantilor si producatorilor profesionisti.
            </p>
          </div>

          {/* Two images: PYTHA Lab + AdLine */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:mt-16">
            <Image
              src="/images/despre/echipagmbh.jpeg"
              alt="Echipa PYTHA Lab GmbH"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover shadow-xl"
              quality={65}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              src="/images/despre/adline.jpeg"
              alt="Echipa AdLine Industries"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover shadow-xl"
              quality={65}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Key facts grid */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4">
            {KEY_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
                    <Icon className="size-5 text-[#8a1820]" />
                  </div>
                  <div className="text-2xl font-bold text-[#8a1820]">{fact.value}</div>
                  <p className="text-sm leading-snug text-gray-500">{fact.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AdLine Section */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <span className="inline-block rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
              Partener autorizat
            </span>
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              AdLine Industries — partenerul tau local
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-snug text-gray-500">
              In Romania, PYTHA este promovat si sustinut sub egida AdLine Industries — un
              nume respectat in industria echipamentelor CNC, cu activitate extinsa in
              prelucrarea lemnului, metalului si alte ramuri industriale. AdLine nu se
              rezuma la a furniza utilaje. Construieste relatii pe termen lung cu
              producatorii, oferind consultanta, suport tehnic si solutii complete adaptate
              fiecarui flux de productie. Noi venim cu veriga lipsa din lantul tehnologic:
              un software care preia ideea din biroul de proiectare si o duce, exact asa
              cum a fost gandita, pana in utilaj. Impreuna cu AdLine, oferim producatorilor
              un flux complet — de la desenul 3D, la piesa finisata. Cu suport real, local,
              si rezultate masurabile in fiecare atelier sau fabrica.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {ADLINE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-snug text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misiune */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg md:p-12">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Misiunea noastra
            </h2>
            <p className="mt-4 text-lg leading-snug text-gray-500">
              Sa aducem digitalizarea completa mai aproape de fiecare atelier din Romania.
              Credem ca fiecare producator merita acces la instrumente de nivel mondial —
              si suntem aici sa facem asta posibil.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Vrei sa ne cunosti mai bine?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4.5">
            <Button asChild>
              <Link href="/contact">Contacteaza-ne</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solicita-prezentare">Programeaza o prezentare</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
