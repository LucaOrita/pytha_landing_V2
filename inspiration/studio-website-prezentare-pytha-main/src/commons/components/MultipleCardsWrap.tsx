import React, {JSX} from "react";
import MainAppRouter from "../../router/MainAppRouter";

interface CardDetailsInterfaceWrap {
    cards: CardDetails[];
}

interface CardDetails {
    title: string;
    description: string;
    tag?: string;
    icon?: JSX.Element | null;
}

const MultipleCardsWrap: React.FC<CardDetailsInterfaceWrap> = ({ cards }) => {
    return (
        <section className="py-20 px-4">
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {cards.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col basis-[400px] max-w-full h-full rounded-xl border shadow-sm hover:shadow-md transition p-6 bg-gray-50"
                    >
                        <div className="flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-bold w-2/3">{feature.title}</h2>
                                {feature.icon && <div className="mb-4 text-main-900">{feature.icon}</div>}
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                            <div className="flex-grow" />
                        </div>
                        <a
                            href={MainAppRouter.pythaModules}
                            className="text-sm font-semibold flex items-center text-black hover:text-main-900 mt-4"
                        >
                            Learn More
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};



export default MultipleCardsWrap;
