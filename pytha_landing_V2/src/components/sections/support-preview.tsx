import { Globe, Monitor, Phone } from 'lucide-react';

const CARDS = [
  {
    icon: Phone,
    title: 'Suport tehnic local',
    description: 'Raspunsuri rapide in limba romana — telefon, email sau on-site.',
  },
  {
    icon: Monitor,
    title: 'Asistenta la distanta',
    description: 'TeamViewer, AnyDesk sau apel video — rezolvam rapid orice problema.',
  },
  {
    icon: Globe,
    title: 'Suport oficial PYTHA Germania',
    description: 'Acces direct la dezvoltatorii PYTHA Lab pentru probleme complexe.',
  },
];

export default function SupportPreview() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Suport real,{' '}
            <span className="text-gradient">nu doar un numar de telefon</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-snug">
            Cu PYTHA si Adline Industries, ai intotdeauna o echipa de profesionisti
            langa tine — de la instalare pana la optimizarea productiei zilnice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-card text-card-foreground flex flex-col gap-4 rounded-md border p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="from-muted/30 via-muted/10 to-card flex size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <Icon className="size-4.5" />
                </div>
                <h3 className="text-accent-foreground text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
