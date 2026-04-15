import type { Metadata } from 'next';
import { Repeat, Users, Timer } from 'lucide-react';

import IndustryPage from '@/components/sections/industry-page';

export const metadata: Metadata = {
  title: 'Mobilier Industrial | PYTHA 3D-CAD | Automatizare CAM Completă',
  description:
    'PYTHA pentru mobilier industrial: generatoare parametrice, nesting avansat, workshop CNC automat. Volume mari, termene scurte, productie fara erori.',
  openGraph: {
    title: 'Mobilier Industrial | PYTHA 3D-CAD | Automatizare CAM Completă',
    description: 'Software CAD/CAM pentru mobilier industrial: generatoare inteligente, workshop automat, nesting avansat. Productie rapida, fara erori.',
    type: 'website',
  },
};

export default function MobilierIndustrialPage() {
  return (
    <IndustryPage
      title="PYTHA pentru mobilier industrial si amenajari interioare"
      subtitle="Volume mari, piese repetitive, termene stranse. PYTHA automatizeaza tot ce tine de proiectare."
      breadcrumbLabel="Mobilier Industrial"
      heroImage="/images/home/section3/Automatizare totală a producției.jpg"
      challenges={[
        {
          icon: Repeat,
          title: 'Piese repetitive, dar fiecare proiect e diferit?',
          description:
            'Amenajari de magazine, hoteluri, birouri: structura se repeta, dar dimensiunile variaza. Fara parametrizare, pierzi ore pe adaptari.',
        },
        {
          icon: Users,
          title: 'Echipa mare, coordonare dificila?',
          description:
            'Mai multi proiectanti lucreaza in paralel, dar fara un sistem centralizat, apar conflicte si duplicari in productie.',
        },
        {
          icon: Timer,
          title: 'Termenele sunt mereu stranse?',
          description:
            'Clientii industriali cer livrare rapida. Fara automatizare, timpul de la proiect la productie e prea mare.',
        },
      ]}
      solutions={[
        {
          module: 'Basic + Generators',
          title: 'Modelare rapida cu generatoare inteligente',
          description:
            'Generatoarele creeaza corpuri standardizate instant. Adapteaza dimensiunile, materialele si accesoriile in cateva clickuri.',
          href: '/module-pytha#modul-generators',
        },
        {
          module: 'Parametrics',
          title: 'Proiectare parametrica pentru serii',
          description:
            'Defineste reguli si formule, iar componenta se actualizeaza automat cand schimbi un parametru. Ideal pentru serii cu variatii.',
          href: '/module-pytha#modul-parametrics',
        },
        {
          module: 'Workshop + CAM',
          title: 'De la model 3D direct la utilaj CNC',
          description:
            'Workshop atribuie operatiile automat, CAM Interface exporta catre Homag, Biesse, SCM, Felder, fara conversii intermediare.',
          href: '/module-pytha#modul-workshop',
        },
        {
          module: 'Parts List',
          title: 'Liste piese si etichete automate',
          description:
            'Genereaza liste de taiere, etichete cu QR si documentatie de productie. Totul dintr-un singur click.',
          href: '/module-pytha#modul-parts-list',
        },
      ]}
      ctaText="Programează o demonstrație pentru mobilier industrial"
    />
  );
}
