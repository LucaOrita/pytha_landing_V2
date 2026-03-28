import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Globe, Package, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Despre noi — PYTHA Romania si AdLine Industries',
  description:
    'Solutii software germane de top, livrate cu suport local dedicat. Afla despre PYTHA Lab GmbH si AdLine Industries, partenerul autorizat PYTHA in Romania.',
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
            <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
              Solutii software germane de top, livrate cu suport local dedicat de echipa
              AdLine Industries din Romania.
            </p>
          </div>
        </div>
      </section>

      {/* PYTHA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              PYTHA — 40+ ani de inovatie{' '}
              <span className="text-gradient">in CAD 3D</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              PYTHA Lab dezvolta de peste 40 de ani software CAD/CAM folosit de mii de
              ateliere din intreaga lume. Fondata in 1978 in Aschaffenburg, Germania,
              compania a transformat proiectarea asistata de calculator dintr-un instrument
              de nisa intr-o solutie accesibila si puternica. Disponibil in 16 limbi,
              PYTHA este alegerea #1 pentru tamplarii si producatorii de mobilier care vor
              precizie germana si fiabilitate industriala.
            </p>
          </div>

          {/* Key facts grid */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4">
            {KEY_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="bg-card text-card-foreground flex flex-col items-center gap-3 rounded-md border p-6 text-center shadow-sm"
                >
                  <div className="from-muted/30 via-muted/10 to-card flex size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                    <Icon className="size-4.5" />
                  </div>
                  <div className="font-azeret-mono text-2xl font-medium">{fact.value}</div>
                  <p className="text-muted-foreground text-sm leading-snug">{fact.label}</p>
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
            <span className="bg-muted text-accent-foreground inline-block rounded-full px-3 py-1 text-xs font-medium">
              Partener autorizat
            </span>
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              AdLine Industries — partenerul tau local
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              Cu peste 20 de ani de experienta in solutii CNC si software industrial,
              AdLine Industries este partenerul autorizat PYTHA in Romania, Bulgaria si
              Ungaria. Nu vindem doar software — oferim un ecosistem complet: de la
              consultanta si echipamente, pana la training si suport tehnic continuu.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {ADLINE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-card text-card-foreground flex flex-col gap-3 rounded-md border p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <h3 className="text-accent-foreground text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misiune */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-card mx-auto max-w-3xl rounded-xl border p-8 text-center shadow-sm md:p-12">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Misiunea noastra
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-snug">
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
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
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
