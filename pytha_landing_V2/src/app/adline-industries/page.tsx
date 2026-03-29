import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle,
  Cog,
  ExternalLink,
  Handshake,
  HeadphonesIcon,
  MapPin,
  Monitor,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AdLine Industries — Partener autorizat PYTHA Romania',
  description:
    'Peste 20 de ani de solutii CNC si digitalizare industriala. Echipamente, software PYTHA, training si suport in Romania, Bulgaria si Ungaria.',
  openGraph: { title: 'AdLine Industries — Partener autorizat PYTHA', type: 'website' },
};

const SERVICII = [
  { icon: Truck, title: 'Livrare si instalare', description: 'Transport, montaj si configurare la sediul clientului — in toata Romania.' },
  { icon: BookOpen, title: 'Training personalizat', description: 'Instruire individuala sau de grup, adaptata nivelului echipei tale. Online sau on-site.' },
  { icon: HeadphonesIcon, title: 'Suport tehnic dedicat', description: 'Linie telefonica, email si remote control (TeamViewer). Raspuns rapid in limba romana.' },
  { icon: Cog, title: 'Consultanta CAD-CAM', description: 'Analizam fluxul tau de productie si recomandam solutia optima — software + hardware.' },
  { icon: Wrench, title: 'Mentenanta si post-garantie', description: 'Servicii de mentenanta preventiva si interventii rapide, chiar si dupa expirarea garantiei.' },
  { icon: Monitor, title: 'Integrare completa', description: 'Conectam software-ul PYTHA cu echipamentele tale CNC existente — fara compromisuri.' },
];

const DIFERENTIATORI = [
  { icon: Users, title: '20+ ani experienta', description: 'Sute de proiecte livrate cu succes in Romania, Bulgaria si Ungaria.' },
  { icon: ShieldCheck, title: 'Post-garantie extinsa', description: 'Continuam sa te sustinem si dupa expirarea garantiei — fara costuri ascunse.' },
  { icon: Handshake, title: 'Raport calitate-pret imbatabil', description: 'Echipamente si software premium la preturi competitive, cu consultanta inclusa.' },
  { icon: CheckCircle, title: 'Clienti care recomanda', description: 'Crestem prin recomandari — cea mai buna dovada a calitatii serviciilor noastre.' },
];

export default function AdLineIndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              <span className="text-gradient">AdLine Industries</span>
            </h1>
            <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
              Peste 20 de ani de solutii CNC si digitalizare industriala in Europa de Est.
              Partenerul tau de incredere pentru echipamente, software si suport tehnic.
            </p>
          </div>
        </div>
      </section>

      {/* Despre companie */}
      <section className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-18">
          <div className="space-y-4">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Despre companie
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              AdLine Industries este un furnizor de solutii industriale cu sediul in
              Bucuresti, activ din 2003. Acoperim Romania, Bulgaria si Ungaria cu
              echipamente CNC, software de proiectare si servicii complete de integrare.
            </p>
            <p className="text-muted-foreground text-lg leading-snug">
              Am crescut prin relatii pe termen lung cu producatorii — nu prin volume,
              ci prin calitate constanta si clienti care ne recomanda mai departe.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-card flex flex-col gap-4 rounded-md border p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="text-muted-foreground size-5" />
                <span>Bulevardul Metalurgiei 99-99B, Bucuresti</span>
              </div>
              <div className="text-muted-foreground space-y-1 text-sm">
                <p>Telefon: +40 742 065 893 / +40 742 065 376</p>
                <p>Email: pytha@adlineindustries.ro</p>
                <p>Program: Luni-Vineri 09:00-17:00</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <div className="text-center">
                  <div className="font-display text-2xl font-medium">20+</div>
                  <p className="text-muted-foreground text-xs">Ani experienta</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-medium">3</div>
                  <p className="text-muted-foreground text-xs">Tari acoperite</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-medium">500+</div>
                  <p className="text-muted-foreground text-xs">Clienti activi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Servicii <span className="text-gradient">complete</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              De la prima consultatie pana la suportul post-garantie — suntem langa tine
              in fiecare etapa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {SERVICII.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-card text-card-foreground flex flex-col gap-3 rounded-md border p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="from-muted/30 via-muted/10 to-card flex size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="text-accent-foreground text-lg font-bold">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-snug">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* De ce AdLine */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              De ce AdLine?
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:mt-16">
            {DIFERENTIATORI.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="flex gap-4">
                  <div className="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-accent-foreground font-bold">{d.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-snug">
                      {d.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Colaboreaza cu AdLine
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg leading-snug">
            Fie ca vrei software PYTHA, echipamente CNC sau ambele — suntem aici
            sa gasim solutia potrivita.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4.5">
            <Button asChild>
              <a href="https://adlineindustries.ro" target="_blank" rel="noopener noreferrer">
                Viziteaza adlineindustries.ro
                <ExternalLink className="ml-1 size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solicita-oferta">Solicita oferta prin AdLine</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
