import React, {JSX, useState} from "react";

type FAQItem = {
    question: string;
    answer: JSX.Element;
};

type FAQSectionProps = {
    title: string | null;
    faqs: FAQItem[];
    onSectionOpened: (value: number) => any;
};

const CollapsableSection: React.FC<FAQSectionProps> = ({title, faqs, onSectionOpened}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        onSectionOpened(index);
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="py-20 px-10 md:px-16 max-w-7xl mx-auto">
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-2xl shadow-sm"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                        >
                            <span className="font-medium">{faq.question}</span>
                            <span className="ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
                        </button>
                        {
                            openIndex === index
                                ?
                                <div
                                    className={`px-4 pb-4 transition-all duration-300 ease-in-out max-h-96 opacity-100`}
                                >
                                    <div className="text-gray-600">{faq.answer}</div>
                                </div>
                                : <></>
                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollapsableSection;
