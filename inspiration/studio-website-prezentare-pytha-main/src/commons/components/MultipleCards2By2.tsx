import React, {JSX} from "react";

interface CardDetailsInterface {
    cards: CardDetails[];
}

interface CardDetails {
    title: string;
    description: string;
    tag?: string;
    icon?: JSX.Element | null;
    link?: string | null;
    linkText?: string | null;
}

const MultipleCards2By2: React.FC<CardDetailsInterface> = ({cards}) => {
    return (
        <section className="">
            <div className="py-20 px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {cards.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-xl border shadow-sm hover:shadow-md transition p-6 bg-gray-50"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold w-2/3">{feature.title}</h2>
                            {feature.icon && <div className="mb-4 text-main-900">{feature.icon}</div>}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                        { feature.link && <a
                            href={feature.link} 
                            className="text-sm font-semibold flex items-center text-black hover:text-main-900"
                        >
                            {feature.linkText ?? "Learn more"}
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
}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MultipleCards2By2;
