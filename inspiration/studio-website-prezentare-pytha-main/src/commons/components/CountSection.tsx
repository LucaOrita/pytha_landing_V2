import React from "react";

interface ThreeCardsAsideInterface {
    cards: CardInterface[];
}

interface CardInterface {
    percent: string;
    title: string;
    description: string;
}

const CountSection: React.FC<ThreeCardsAsideInterface> = ({
                                                              cards
                                                          }) => {
    return (
        <section className="bg-gray-100">
            <div className={"py-20 px-4 md:px-16 max-w-7xl mx-auto"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <div className="text-center bg-white border rounded-2xl p-5">
                            <h4 className="text-main-900 text-3xl font-bold mb-2">{card.percent}</h4>
                            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountSection;
