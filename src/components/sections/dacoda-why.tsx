import { MapPin, Phone, Shield, Users } from 'lucide-react';

const cards = [
  {
    icon: MapPin,
    title: 'Cunoaștem rutele',
    text: '32 de ani pe aceleași coridoare înseamnă că știm ce se întâmplă la granița cu Kazahstanul — și cum rezolvăm.',
  },
  {
    icon: Shield,
    title: 'Gestionăm riscurile',
    text: 'Management complet conform Convenției CMR. Marfa ta e acoperită, documentat, de la încărcare la livrare.',
  },
  {
    icon: Phone,
    title: 'Oameni, nu chatboți',
    text: 'O persoană reală cunoaște dosarul tău și îți răspunde când ai nevoie — nu un sistem automatizat.',
  },
  {
    icon: Users,
    title: 'Relații, nu tranzacții',
    text: 'Clienții noștri revin. Cei mai mulți colaborează cu noi de ani de zile. Asta spune mai mult decât orice statistică.',
  },
];

export default function DacodaWhy() {
  return (
    <section style={{ backgroundColor: 'var(--dacoda-light)' }}>
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — title */}
          <div className="max-w-md">
            <h2 className="text-dacoda-navy text-3xl font-bold md:text-4xl">
              Ce înseamnă să lucrezi cu noi
            </h2>
            <div className="bg-dacoda-orange mt-4 h-0.5 w-12" />
            <p className="text-dacoda-gray mt-6 text-base leading-relaxed md:text-lg">
              Nu suntem un simplu intermediar. Suntem echipa care cunoaște
              fiecare rută, fiecare risc și fiecare soluție.
            </p>
          </div>

          {/* Right — 2×2 grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border-dacoda-orange rounded-lg border border-l-[3px] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <card.icon className="text-dacoda-orange mb-3 h-6 w-6" />
                <h3 className="text-dacoda-navy mb-2 text-base font-bold">
                  {card.title}
                </h3>
                <p className="text-dacoda-gray text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
