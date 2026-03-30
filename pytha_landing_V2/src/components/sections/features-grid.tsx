'use client';

import { ArrowRight, Boxes, FileOutput, Headphones, Workflow } from 'lucide-react';
import Link from 'next/link';

import { InView } from '@/components/ui/in-view';

const FEATURES = [
  {
    icon: Workflow,
    title: 'Soluție CAD/CAM complet integrată',
    description:
      'Un singur software acoperă tot fluxul: modelare 3D, atribuire operații CNC, nesting, export. Fără transferuri manuale între programe.',
    link: '/module-pytha#modul-workshop',
    linkText: 'Spre Workshop',
  },
  {
    icon: Boxes,
    title: 'Proiectare 2D și 3D într-un mediu unitar',
    description:
      'Modelare solidă hibridă, operații booleene, cotare automată și randare fotorealistică. Totul într-o singură interfață intuitivă.',
    link: '/module-pytha#modul-basic',
    linkText: 'Spre Pachetul de Bază',
  },
  {
    icon: FileOutput,
    title: 'Interoperabilitate cu formate standard',
    description:
      'Import/export DWG, DXF, STEP, STL, OBJ, PDF. Export CNC direct: WoodWop, bSolid, G-code, DDX.',
    link: '/module-pytha#modul-cam-interface',
    linkText: 'Spre CAM Interface',
  },
  {
    icon: Headphones,
    title: 'Asistență tehnică locală, în limba română',
    description:
      'Echipă dedicată în România: telefon, email, TeamViewer. Răspuns rapid, training personalizat, suport post-garanție.',
    link: '/asistenta-tehnica',
    linkText: 'Spre Suport',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="section-padding">
      <div className="container">
        <InView className="mx-auto max-w-3xl text-balance text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            De ce aleg producătorii{' '}
            <span className="text-[#8a1820]">PYTHA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Un ecosistem complet care acoperă fiecare pas din procesul de producție.
          </p>
        </InView>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <InView key={feature.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-[#fff1f2] p-3">
                    <Icon className="size-8 text-[#8a1820]" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.link}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#8a1820] transition-all hover:gap-2.5"
                  >
                    {feature.linkText}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
