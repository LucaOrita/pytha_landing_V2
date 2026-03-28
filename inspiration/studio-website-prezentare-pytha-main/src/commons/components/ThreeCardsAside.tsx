import React from "react";

interface ThreeCardsAsideInterface {
    cards: CardInterface[];
    sectionSubtitle: string;
    sectionTitle: string;
    sectionDescription: string;
}

interface CardInterface {
    title: string;
    subtitle: string;
    image: string;
    description: string;
}

const ThreeCardsAside: React.FC<ThreeCardsAsideInterface> = ({
                                                                 cards,
                                                                 sectionSubtitle,
                                                                 sectionTitle,
                                                                 sectionDescription
                                                             }) => {
    return (
        <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span
                    className="text-main-900 font-semibold text-sm tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
                    {sectionSubtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
                    {sectionTitle}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    {sectionDescription}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <div className="text-center">
                        <img
                            src={card.image}
                            alt="Step 1"
                            className="rounded-xl mx-auto mb-6 w-full h-[242px]"
                        />
                        <h4 className="text-main-900 font-semibold mb-2">{card.subtitle}</h4>
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-500 mb-4">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ThreeCardsAside;
