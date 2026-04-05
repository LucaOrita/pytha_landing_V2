import Image from 'next/image';

const CARDS = [
  {
    title: 'Suport tehnic local',
    description: 'Raspunsuri rapide in limba romana — telefon, email sau on-site.',
    image: '/images/home/section2/Suport Technic Local.jpg',
  },
  {
    title: 'Asistenta continua in productie',
    description: 'TeamViewer, AnyDesk sau apel video — rezolvam rapid orice problema.',
    image: '/images/home/section2/Asistenta continua in Productie.png',
  },
  {
    title: 'Suport oficial PYTHA Germania',
    description: 'Acces direct la dezvoltatorii PYTHA Lab pentru probleme complexe.',
    image: '/images/home/section2/Acces la Suportul Oficial PYTHA Germania.jpg',
  },
];

export default function SupportPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Suport real,{' '}
            <span className="text-[#8a1820]">nu doar un numar de telefon</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Cu PYTHA si Adline Industries, ai intotdeauna o echipa de profesionisti
            langa tine — de la instalare la optimizarea productiei zilnice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-3 p-8">
                <h3 className="text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-sm leading-snug text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
