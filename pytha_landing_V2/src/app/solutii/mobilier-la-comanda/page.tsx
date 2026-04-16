import type { Metadata } from 'next';
import { Clock, AlertTriangle, Eye } from 'lucide-react';

import IndustryPage from '@/components/sections/industry-page';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Mobilier la Comanda | PYTHA 3D-CAD | Design la CNC Automat',
  description:
    'PYTHA mobilier comanda: design 3D cu generatoare parametrice, nesting optimizat, export CNC automat. De la ideie la productie fara erori.',
  openGraph: {
    title: 'Mobilier la Comanda | PYTHA 3D-CAD | Design la CNC Automat',
    description: 'Proiecteaza mobilier la comanda cu PYTHA: de la design 3D la CNC automat. Generatoare inteligente, nesting, export direct pe masini.',
    type: 'website',
  },
};

export default function MobilierLaComandaPage() {
  return (
    <IndustryPage
      title="PYTHA pentru producatorii de mobilier la comanda"
      subtitle="De la ideea clientului la piesa gata de montat, fara erori, fara improvizatii."
      breadcrumbLabel="Mobilier la Comanda"
      heroImage="/images/home/section3/Modelare 3D liberă și intuitivă.jpg"
      challenges={[
        {
          icon: Clock,
          title: 'Pierzi timp recreand proiecte de fiecare data?',
          description:
            'Fiecare client vine cu dimensiuni diferite, dar structura mobilierului e similara. Fara parametrizare, refaci totul de la zero.',
        },
        {
          icon: AlertTriangle,
          title: 'Erorile de proiectare apar abia in atelier?',
          description:
            'Transferul manual intre proiectare si CNC introduce erori de cotare, gaurire gresita, piese taiate incorect.',
        },
        {
          icon: Eye,
          title: 'Clientul nu poate vizualiza produsul final?',
          description:
            'Fara randari realiste, clientul nu stie la ce sa se astepte. Modificarile tarzii costa timp si bani.',
        },
      ]}
      solutions={[
        {
          module: 'Generators',
          title: 'Corpuri parametrice adaptate instant',
          description:
            'Corpuri parametrice pe care le adaptezi instant la dimensiunile clientului. Dulapuri, bucatarii, dressinguri, generate in secunde.',
          href: '/module-pytha#modul-generators',
        },
        {
          module: 'Workshop',
          title: 'Operatii CNC automate pe modelul 3D',
          description:
            'Atribuie automat operatiile CNC direct pe modelul 3D. Gaurire, frezare, aplicare cant, fara interventie manuala.',
          href: '/module-pytha#modul-workshop',
        },
        {
          module: 'Nesting',
          title: 'Optimizare taiere cu economie de 30%',
          description:
            'Optimizeaza taierea panourilor cu economie de material de pana la 30%. Mai putine resturi, mai mult profit.',
          href: '/module-pytha#modul-nesting',
        },
        {
          module: 'RadioLab',
          title: 'Randari fotorealiste pentru clienti',
          description:
            'Randari fotorealiste pe care le prezinti inainte sa tai prima bucata. Clientul vede exact ce primeste.',
          href: '/module-pytha#modul-radiolab',
        },
      ]}
      ctaText="Programează o demonstrație adaptată pentru mobilier la comandă"
    />
  );
}
