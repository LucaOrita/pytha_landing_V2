import type { Metadata } from 'next';
import { Repeat, Timer, Users } from 'lucide-react';

import IndustryPage from '@/components/sections/industry-page';

export const metadata: Metadata = {
  title: 'Mobilier de Serie | PYTHA 3D-CAD | Productie Repetitiva Automatizata',
  description:
    'PYTHA pentru mobilier de serie: configurari parametrice, liste piese automate, nesting optimizat. Serii mari cu variatii, zero erori intre proiectare si productie.',
  openGraph: {
    title: 'Mobilier de Serie | PYTHA 3D-CAD',
    description:
      'Software CAD/CAM pentru mobilier de serie: parametrizare, generatoare, nesting si export CNC direct. Productie repetitiva, scalabila.',
    type: 'website',
  },
};

export default function MobilierDeSeriePage() {
  return (
    <IndustryPage
      title="PYTHA pentru mobilier de serie — productie repetitiva, zero erori"
      subtitle="Serii mari cu variatii mici. Automatizezi configurarile, elimini erorile manuale, scurtezi timpul de la comanda la livrare."
      breadcrumbLabel="Mobilier de Serie"
      heroImage="/images/home/section3/Automatizare totală a producției.jpg"
      challenges={[
        {
          icon: Repeat,
          title: 'Aceleasi corpuri, dimensiuni mereu diferite?',
          description:
            'Fiecare comanda aduce mici variatii de latime, inaltime sau accesorii. Fara parametrizare, fiecare modificare e refacuta manual si introduce erori.',
        },
        {
          icon: Timer,
          title: 'Liste de taiere refacute pentru fiecare comanda?',
          description:
            'Daca listele de piese si etichetele se genereaza manual, pierzi ore si risti greseli costisitoare in sectia de debitare.',
        },
        {
          icon: Users,
          title: 'Erori la transferul intre proiectare si productie?',
          description:
            'Conversii intre softuri, fisiere DXF ajustate manual, date duplicate. Fiecare pas manual e o sursa de erori care incetineste productia.',
        },
      ]}
      solutions={[
        {
          module: 'Generators & Plug-Ins',
          title: 'Configurari automate pentru corpuri standard',
          description:
            'Generatoarele produc corpuri standardizate cu un click: dulapuri, sertare, fronturi. Ideal cand ai un catalog fix de produse cu variatii de dimensiuni.',
          href: '/module-pytha#modul-generators',
        },
        {
          module: 'Parametrics',
          title: 'Reguli parametrice pentru serii intregi',
          description:
            'Defineste o data regulile (grosimi, imbinari, gauriri) si aplica-le la toate variantele. Orice modificare se propaga instant in intreaga serie.',
          href: '/module-pytha#modul-parametrics',
        },
        {
          module: 'Parts List',
          title: 'Liste piese si etichete automate pentru fiecare lot',
          description:
            'Genereaza liste de taiere complete cu coduri QR, grupate pe comenzi sau loturi. Documentatie de productie standardizata, livrata in secunde.',
          href: '/module-pytha#modul-parts-list',
        },
        {
          module: 'Nesting + CAM',
          title: 'Debitare optimizata si export CNC direct',
          description:
            'Nesting reduce consumul de material cu pana la 20%, iar CAM Interface trimite direct catre Homag, Biesse, SCM sau Felder, fara conversii.',
          href: '/module-pytha#modul-nesting',
        },
      ]}
      ctaText="Programează o demonstrație pentru mobilier de serie"
    />
  );
}
