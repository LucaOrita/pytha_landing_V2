import { Award, HandshakeIcon, TrendingUp } from 'lucide-react';

const CARDS = [
  {
    icon: HandshakeIcon,
    title: 'Pachet complet de servicii',
    description:
      'Livrare, instalare, instruire, suport tehnic extins si postgarantie — asigurand performanta continua a solutiilor achizitionate.',
  },
  {
    icon: TrendingUp,
    title: 'Fiabilitate la preturi competitive',
    description:
      'Echipamente CNC precise si durabile, cu un excelent raport calitate-pret. Plus consultanta pentru solutii adaptate nevoilor tale.',
  },
  {
    icon: Award,
    title: '20+ ani de expertiza',
    description:
      'AdLine s-a dezvoltat prin calitate constanta si clienti satisfacuti din Romania, Bulgaria si Ungaria, care ne recomanda mai departe.',
  },
];

export default function PartnerSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
          <span className="bg-muted text-accent-foreground inline-block rounded-full px-3 py-1 text-xs font-medium">
            Adline Industries
          </span>
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Partenerul autorizat PYTHA{' '}
            <span className="text-gradient">in Romania</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-snug">
            Servicii digitale de origine germana, livrate de experti locali —
            cunoscatori ai nevoilor producatorilor din Romania.
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
