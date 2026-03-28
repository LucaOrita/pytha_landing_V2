import React from "react";
import {Link} from "react-router-dom";

interface ThreeCardsAsideInterface {
    cards: CardInterface[];
}

interface CardInterface {
    title: string;
    subtitle: string | null;
    image: string | null;
    video: string | null;
    description: string;
    link: string | null;
}

const MultipleAsidesAlternating: React.FC<ThreeCardsAsideInterface> = ({ cards }) => {
    return (
        <section className="py-20 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
            {cards.map((card, index) => (
                <div
                    key={index}
                    id={`c-${index}`}
                    className={`my-16 flex flex-col-reverse md:items-center md:gap-12 ${index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                    {/* Media block: Image or Video */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        {card.image ? (
                            <img
                                src={card.image}
                                alt={card.title}
                                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                            />
                        ) : (
                            <video
                                className="rounded-2xl shadow-xl w-full max-w-md"
                                src={card.video ?? ""}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                    </div>

                    {/* Text block */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0">
                        <div className="space-y-4">
                            {card.subtitle && (
                                <span className="inline-block text-xs font-semibold text-main-900 tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
                                    {card.subtitle}
                                </span>
                            )}
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{card.title}</h2>
                            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                                {card.description.split('\n').map((paragraph, i) => (
                                    <p key={i}>{paragraph.trim()}</p>
                                ))}
                            </div>
                            {card.link && (
                                <Link
                                    to={card.link}
                                    className="inline-block mt-4 text-main-900 font-semibold hover:underline transition duration-200"
                                >
                                    Mai multe detalii →
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MultipleAsidesAlternating;

