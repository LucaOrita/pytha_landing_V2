import type { Metadata } from 'next';
import {
  Check,
  Phone,
  MessageCircle,
  Shield,
  Headphones,
  GraduationCap,
  Wrench,
  Building2,
  Users,
  Award,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PricingTable from '@/components/sections/pricing-table';

export const metadata: Metadata = {
  title: 'Prețuri PYTHA 3D-CAD | Licență de la 99€/lună | PYTHA Romania',
  description:
    'Prețuri transparente PYTHA: licență permanentă sau abonament lunar. Module individuale sau pachet complet. Fără costuri ascunse. Training si suport inclus.',
  openGraph: {
    title: 'Prețuri PYTHA 3D-CAD | Licență de la 99€/lună',
    description: 'Prețuri transparente PYTHA: licență permanentă (de la 4.950€) sau abonament lunar (de la 99€). Module individuale sau pachet Enterprise complet.',
    type: 'website',
  },
};

const PACKAGES = [
  {
    name: 'Starter',
    subtitle: 'Ideal pentru ateliere mici',
    monthly: '99',
    permanent: '4.950',
    highlighted: false,
    badge: null,
    features: [
      'Modelare 2D/3D solidă',
      'Cotare automată și planșe tehnice',
      'Randare raytracer integrată',
      'Export DWG/DXF/STL/PDF',
    ],
    href: '/solicita-prezentare?pachet=starter',
  },
  {
    name: 'Profesional',
    subtitle: 'Flux complet de la design la CNC',
    monthly: '253',
    permanent: '~11.840',
    highlighted: true,
    badge: 'Cel mai ales',
    features: [
      'Tot din Starter',
      'Workshop: îmbinări automate, cant, CNC',
      'Liste piese cu coduri QR',
      'Nesting: optimizare debitare',
      'Export CNC (Homag, Biesse, SCM)',
    ],
    href: '/solicita-prezentare?pachet=profesional',
  },
  {
    name: 'Enterprise',
    subtitle: 'Soluția completă pentru fabrici',
    monthly: '342',
    permanent: '~15.870',
    highlighted: false,
    badge: null,
    features: [
      'Tot din Profesional',
      'Suprafețe libere (Freeform)',
      'Bibliotecă 35.000+ obiecte',
      'Randare fotorealistă (RadioLab)',
      'Proiectare parametrică',
    ],
    href: '/solicita-prezentare?pachet=enterprise',
  },
];

const STATS = [
  { value: '150+', label: 'companii active în România' },
  { value: '30+', label: 'ani de PYTHA pe piață' },
  { value: '10+', label: 'ani ca distribuitor autorizat' },
  { value: '24h', label: 'timp maxim răspuns suport' },
];

const INCLUDED_FEATURES = [
  {
    icon: GraduationCap,
    title: 'Training la sediul tău',
    desc: 'Instruire personalizată pentru echipa ta, direct la birou, nu online.',
  },
  {
    icon: Wrench,
    title: 'Instalare și configurare',
    desc: 'Setup complet, inclusiv adaptarea la fluxul tău specific de lucru.',
  },
  {
    icon: Headphones,
    title: 'Suport tehnic local',
    desc: 'Echipă română disponibilă, nu call center extern sau ticketing lent.',
  },
  {
    icon: Shield,
    title: 'Stabilitate garantată',
    desc: 'Software produs în Germania, în activitate continuă de peste 30 de ani.',
  },
  {
    icon: Building2,
    title: 'Acces suport oficial Germania',
    desc: 'Legătură directă cu PYTHA Lab GmbH pentru probleme complexe.',
  },
  {
    icon: Users,
    title: 'Comunitate & resurse',
    desc: 'Acces la materiale de training, tutoriale și noutăți despre actualizări.',
  },
];

const FAQS = [
  {
    question: 'Ce include licența permanentă?',
    answer:
      'Dreptul de utilizare fără limită de timp. Nu include actualizări automate. Acestea sunt disponibile prin Acordul de Service anual (840€/an).',
  },
  {
    question: 'Pot adăuga module ulterior?',
    answer:
      'Da, modulele sunt independente. Poți începe cu pachetul de bază și adăuga Workshop, Nesting sau CAM oricând, fără a reinstala software-ul.',
  },
  {
    question: 'Există discount pentru mai multe licențe?',
    answer:
      'Da, la achiziția a 2+ module identice aplicăm discount progresiv. Contactează-ne pentru o ofertă personalizată în funcție de volumul dorit.',
  },
  {
    question: 'Oferiți demonstrație gratuită?',
    answer:
      'Oferim demonstrații live gratuite de 30–60 de minute unde îți arătăm exact cum funcționează PYTHA pe tipul tău de proiecte.',
  },
  {
    question: 'Cât durează implementarea?',
    answer:
      'Instalarea și configurarea de bază se face în 1 zi. Training-ul inițial durează 2–3 zile, în funcție de modulele alese și complexitatea fluxului.',
  },
  {
    question: 'Ce sistem de operare este necesar?',
    answer:
      'PYTHA funcționează pe Windows 10/11 (64-bit). Cerințe minime: procesor modern, 8GB RAM, placă video dedicată pentru randare optimă.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'PYTHA 3D-CAD',
  description: 'Software CAD/CAM 3D complet pentru proiectare mobilier',
  brand: { '@type': 'Brand', name: 'PYTHA Lab GmbH' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 99,
    highPrice: 15870,
    offerCount: 3,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function PreturiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute -top-40 -right-40 size-[28rem] rounded-full bg-[#8a1820]/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-[#8a1820]/5 blur-3xl" />
        <div className="absolute inset-0 hero-dots" />
        <div className="container relative">
          {/* Badge */}
          <div className="mb-6 flex sm:justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#8a1820]/30 bg-[#8a1820]/10 px-4 py-1.5 text-xs font-semibold text-[#8a1820]">
              <Award className="size-3" />
              Distribuitor autorizat PYTHA în România
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-5 text-balance sm:text-center">
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
              Prețuri transparente,{' '}
              <span className="text-[#8a1820]">fără surprize</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-snug text-muted-foreground md:text-lg lg:text-xl">
              Alege modulele potrivite pentru afacerea ta. Licență permanentă sau abonament
              lunar, tu decizi. Fiecare achiziție include training, instalare și suport
              tehnic local.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Social proof stats ───────────────────────────────────── */}
      <section className="border-y border-border bg-card/50">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-azeret-mono text-3xl font-bold text-[#8a1820]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing cards ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-balance text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Alege pachetul tău
            </h2>
            <p className="mt-3 text-muted-foreground">
              Toate pachetele includ training, instalare și suport tehnic local.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlighted
                    ? 'border-[#8a1820] bg-[#8a1820]/5 shadow-2xl shadow-[#8a1820]/15 md:scale-[1.04]'
                    : 'border-border bg-card shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#8a1820] px-4 py-1 text-xs font-semibold text-white">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-azeret-mono text-4xl font-bold text-[#8a1820]">
                      {pkg.monthly}€
                    </span>
                    <span className="text-sm text-muted-foreground">/lună</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    sau {pkg.permanent}€ licență permanentă
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#8a1820]/12">
                        <Check className="size-3 text-[#8a1820]" />
                      </div>
                      <span className="text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 w-full"
                  variant={pkg.highlighted ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={pkg.href}>
                    Solicită ofertă
                    <ChevronRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prețurile nu includ TVA. Discount disponibil la achiziția a 2+ module identice.
          </p>
        </div>
      </section>

      {/* ─── Ce este inclus ───────────────────────────────────────── */}
      <section className="section-padding bg-card/30">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-balance text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Inclus în <span className="text-[#8a1820]">orice pachet</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Nu vindem doar software. Vindem certitudinea că îl vei folosi eficient de la
              prima zi.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-[#8a1820]/30 hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#8a1820]/20 bg-[#8a1820]/10">
                  <Icon className="size-5 text-[#8a1820]" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Module individuale (table) ───────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-10 max-w-2xl text-balance text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Module individuale
            </h2>
            <p className="mt-3 text-muted-foreground">
              Construiește propriul pachet alegând exact modulele de care ai nevoie.
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-card/30">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-balance text-center">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Întrebări despre <span className="text-[#8a1820]">prețuri</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-12">
              <Accordion type="single" collapsible>
                {FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-base font-semibold hover:text-[#8a1820]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#0a0a14] p-10 text-center text-white md:p-16">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-[#8a1820]/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#10a5ca]/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Nu ești sigur ce pachet ți se potrivește?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60 md:text-lg">
                Echipa noastră analizează nevoile tale si îți recomandă soluția optimă,
                complet gratuit, fără obligații.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-white text-[#8a1820] hover:bg-white/90">
                  <Link href="/solicita-prezentare">
                    Programează o consultanță gratuită
                    <ChevronRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+40742065376">
                    <Phone className="mr-2 size-4" />
                    +40 742 065 376
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
