'use client';

import { InView } from '@/components/ui/in-view';
import { Marquee } from '@/components/magicui/marquee';

const TESTIMONIALS = [
  {
    quote: 'De când folosim PYTHA, timpul de proiectare s-a redus cu 40%. Integrarea directă cu CNC-ul nostru a eliminat complet erorile de producție.',
    author: 'Mihai Popescu',
    role: 'Director Producție',
    company: 'MobilPro SRL',
  },
  {
    quote: 'Am testat mai multe soluții CAD, dar PYTHA e singura care acoperă tot flow-ul — de la randare pentru client până la debitare. Suportul din România face diferența.',
    author: 'Elena Dumitrescu',
    role: 'Proiectant Principal',
    company: 'Design Concept Studio',
  },
  {
    quote: 'Workshop-ul PYTHA ne-a schimbat complet modul de lucru. Generăm automat liste de piese și programe CNC — economisim 2 zile pe fiecare proiect.',
    author: 'Andrei Ionescu',
    role: 'Proprietar',
    company: 'Atelierul de Mobilă Ionescu',
  },
];

const PARTNERS = [
  'Blum', 'Hettich', 'Homag', 'Biesse', 'SCM', 'Felder',
  'Hafele', 'Grass', 'Weeke', 'Holzma',
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        <InView className="mx-auto max-w-3xl text-balance text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Ateliere din toata lumea lucreaza cu{' '}
            <span className="text-[#8a1820]">PYTHA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            De la ateliere mici la fabrici cu zeci de angajati, PYTHA se
            adapteaza oricarui flux.
          </p>
        </InView>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-16">
          {TESTIMONIALS.map((t, i) => (
            <InView key={t.author} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <svg
                  className="mb-4 size-8 text-[#8a1820]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.3 2.5c-4 1.2-7 5-7 9.4 0 3.3 2.1 5.6 4.8 5.6 2.3 0 4.2-1.8 4.2-4.1 0-2.2-1.7-3.9-3.8-4-.4 0-.8.1-1.2.2.5-2.5 2.6-5.1 5.2-6.2L11.3 2.5zm11 0c-4 1.2-7 5-7 9.4 0 3.3 2.1 5.6 4.8 5.6 2.3 0 4.2-1.8 4.2-4.1 0-2.2-1.7-3.9-3.8-4-.4 0-.8.1-1.2.2.5-2.5 2.6-5.1 5.2-6.2L22.3 2.5z" />
                </svg>
                <p className="flex-1 text-base leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#8a1820]/10 text-sm font-bold text-[#8a1820]">
                    {t.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      {t.company}
                      <svg className="size-3.5 text-[#10a5ca]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>

      {/* Partner logos marquee */}
      <div className="mt-20">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Compatibil cu echipamente si feronerie de la
        </p>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8f8f8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8f8f8] to-transparent" />
          <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="flex items-center rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-muted-foreground shadow-sm transition-colors hover:text-[#8a1820]"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
