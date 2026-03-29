import type { Metadata } from 'next';
import { Palette, Handshake, Zap } from 'lucide-react';

import IndustryPage from '@/components/sections/industry-page';

export const metadata: Metadata = {
  title: 'Software Design Interior 3D — PYTHA Vizualizare si Randare',
  description:
    'Prezinta proiecte de design interior cu vizualizari fotorealiste PYTHA. Biblioteca 35.000+ obiecte, materiale reale, randare rapida.',
  openGraph: {
    title: 'Software Design Interior 3D — PYTHA Vizualizare si Randare',
    type: 'website',
  },
};

export default function DesignInteriorPage() {
  return (
    <IndustryPage
      title="PYTHA pentru designeri de interior si arhitecti"
      subtitle="Prezinta proiecte cu vizualizari care vand — fotorealiste, interactive, cu materiale reale."
      breadcrumbLabel="Design Interior"
      heroImage="/images/home/section3/Randare fotorealistă pentru vânzare rapidă.png"
      challenges={[
        {
          icon: Palette,
          title: 'Prezentarile nu conving clientul?',
          description:
            'Schitele 2D sau mockup-urile generice nu transmit impactul real al designului. Clientii ezita sa aprobe fara sa "vada" produsul final.',
        },
        {
          icon: Handshake,
          title: 'Colaborarea cu producatorul e dificila?',
          description:
            'Designul tau trebuie tradus in specificatii tehnice exacte. Fara un format comun, apar erori si intarzieri la executie.',
        },
        {
          icon: Zap,
          title: 'Randarea dureaza prea mult?',
          description:
            'Software-urile de vizualizare generice necesita ore pentru o singura randare. Nu ai timp sa faci 5 variante pentru un singur client.',
        },
      ]}
      solutions={[
        {
          module: 'Basic',
          title: 'Modelare 3D intuitiva si precisa',
          description:
            'Proiecteaza spatii complete cu modelare solida 3D. Combina mobilier, materiale si accesorii intr-un model unitar.',
          href: '/module-pytha#modul-basic',
        },
        {
          module: 'Library',
          title: 'Biblioteca cu 35.000+ obiecte',
          description:
            'Acceseaza zeci de mii de obiecte parametrice: mobilier, feronerie, iluminat, decoratiuni — gata de folosit.',
          href: '/module-pytha#modul-library',
        },
        {
          module: 'RadioLab',
          title: 'Randare fotorealista rapida',
          description:
            'Genereaza imagini cu iluminare reala, texturi HD si reflexii naturale. Prezinta clientului exact ce va primi.',
          href: '/module-pytha#modul-radiolab',
        },
        {
          module: 'Freeform',
          title: 'Forme libere si design organic',
          description:
            'Creeaza suprafete curbate, loft-uri si geometrii organice care ies din tiparele mobilierului drept.',
          href: '/module-pytha#modul-freeform',
        },
      ]}
      ctaText="Programeaza o demonstratie pentru design interior"
    />
  );
}
