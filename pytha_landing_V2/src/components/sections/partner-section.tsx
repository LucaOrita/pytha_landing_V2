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
          <span className="inline-block rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
            Adline Industries
          </span>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Partenerul autorizat PYTHA{' '}
            <span className="text-[#8a1820]">in Romania</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Servicii digitale de origine germana, livrate de experti locali —
            cunoscatori ai nevoilor producatorilor din Romania.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                <p className="text-sm leading-snug text-gray-500">
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
