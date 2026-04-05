import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  Cog,
  Globe,
  HeadphonesIcon,
  Monitor,
  Shield,
  Truck,
  Wrench,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Despre PYTHA Romania & AdLine Industries | Partener oficial',
  description:
    'PYTHA Lab GmbH: 40+ ani de inovatie CAD. AdLine Industries, partener autorizat in Romania, Bulgaria si Ungaria. Suport local dedicat.',
  openGraph: { title: 'Despre PYTHA Romania & AdLine Industries', type: 'website' },
};

const KEY_FACTS = [
  { icon: Award, value: '40+', label: 'Ani de inovatie CAD' },
  { icon: Globe, value: '2.000+', label: 'Ateliere utilizatoare' },
  { icon: Shield, value: '50+', label: 'Tari cu utilizatori' },
  { icon: Shield, value: 'Made in Germany', label: 'Calitate germana' },
];

const SERVICII = [
  { icon: Truck, title: 'Livrare si instalare', description: 'Transport, montaj si configurare la sediul clientului, in toata Romania.' },
  { icon: BookOpen, title: 'Training personalizat', description: 'Instruire individuala sau de grup, adaptata nivelului echipei tale. Online sau on-site.' },
  { icon: HeadphonesIcon, title: 'Suport tehnic dedicat', description: 'Linie telefonica, email si remote control (TeamViewer). Răspuns rapid in limba română.' },
  { icon: Cog, title: 'Consultanță CAD-CAM', description: 'Analizam fluxul tau de productie si recomandam solutia optima: software + hardware.' },
  { icon: Wrench, title: 'Mentenanta si post-garantie', description: 'Servicii de mentenanta preventiva si interventii rapide, chiar si dupa expirarea garantiei.' },
  { icon: Monitor, title: 'Integrare completa', description: 'Conectam software-ul PYTHA cu echipamentele tale CNC existente, fara compromisuri.' },
];

export default function DespreNoiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[#8a1820]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-[#10a5ca]/5 blur-3xl" />
        <div className="absolute inset-0 hero-dots" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Tehnologie germana,{' '}
              <span className="text-[#8a1820]">suport romanesc</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
              PYTHA Lab GmbH si AdLine Industries, impreuna pentru digitalizarea
              productiei din Romania.
            </p>
          </div>
        </div>
      </section>

      {/* PYTHA Lab */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-18">
            <div className="space-y-4">
              <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                PYTHA: 40+ ani de inovatie{' '}
                <span className="text-[#8a1820]">in CAD 3D</span>
              </h2>
              <p className="text-lg leading-snug text-gray-500">
                PYTHA este un software dezvoltat integral in Germania de PYTHA Lab GmbH,
                fondata in 1978 in Aschaffenburg. De peste patru decenii, PYTHA evolueaza
                continuu pentru a raspunde nevoilor reale ale proiectantilor si
                producatorilor de mobilier.
              </p>
              <p className="text-lg leading-snug text-gray-500">
                Astazi, PYTHA este un sistem CAD-CAM 3D complet, folosit de companii din
                peste 50 de tari. De la modelare solida la export CNC, de la randare
                fotorealista la liste de piese automate. Totul intr-un singur ecosistem.
              </p>
            </div>
            <Image
              src="/images/despre/echipagmbh.jpeg"
              alt="Echipa PYTHA Lab GmbH"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover shadow-xl"
              quality={65}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Key facts */}
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

      {/* AdLine Industries */}
      <section id="adline" className="section-padding scroll-mt-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-18">
            <Image
              src="/images/despre/adline.jpeg"
              alt="Echipa AdLine Industries"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover shadow-xl"
              quality={65}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
                Partener autorizat
              </span>
              <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                AdLine Industries, partenerul tau local
              </h2>
              <p className="text-lg leading-snug text-gray-500">
                In Romania, PYTHA este distribuit si sustinut de AdLine Industries, un
                partener cu peste 20 de ani de experienta in solutii CNC si digitalizare
                industriala.
              </p>
              <p className="text-lg leading-snug text-gray-500">
                Nu ne rezumam la a vinde software. Construim relatii pe termen lung:
                consultanță, training personalizat, suport tehnic in limba română, si
                integrare completa cu echipamentele tale existente.
              </p>
            </div>
          </div>

          {/* 6 servicii */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {SERVICII.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
                    <Icon className="size-5 text-[#8a1820]" />
                  </div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="text-sm leading-snug text-gray-500">{s.description}</p>
                </div>
              );
            })}
          </div>

          {/* Video demo */}
          <div className="mt-12 lg:mt-16">
            <h3 className="mb-6 text-center text-xl font-bold">
              Vezi PYTHA in actiune
            </h3>
            <div className="mx-auto max-w-4xl">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/tXBObV8mDgM"
                  title="Prezentare software PYTHA 3D"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
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
              <Link href="/solicita-prezentare">Programează o prezentare</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
