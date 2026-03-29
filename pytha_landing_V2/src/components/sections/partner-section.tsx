import Image from 'next/image';

const CARDS = [
  {
    title: 'Pachet complet de servicii',
    description:
      'Livrare, instalare, instruire, suport tehnic extins si postgarantie — asigurand performanta continua a solutiilor achizitionate.',
    image: '/images/home/section1/Pachet complet de servicii inclus în orice achiziție.jpg',
  },
  {
    title: 'Fiabilitate la preturi competitive',
    description:
      'Echipamente CNC precise si durabile, cu un excelent raport calitate-pret. Plus consultanta pentru solutii adaptate nevoilor tale.',
    image: '/images/home/section1/Fiabilitate Test.png',
  },
  {
    title: '20+ ani de expertiza',
    description:
      'AdLine s-a dezvoltat prin calitate constanta si clienti satisfacuti din Romania, Bulgaria si Ungaria, care ne recomanda mai departe.',
    image: '/images/home/section1/Experiență solidă și creștere prin recomandare.jpg',
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
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-card text-card-foreground flex flex-col overflow-hidden rounded-md border shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="aspect-[16/10] w-full object-cover"
                quality={65}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-accent-foreground text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-snug">
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
