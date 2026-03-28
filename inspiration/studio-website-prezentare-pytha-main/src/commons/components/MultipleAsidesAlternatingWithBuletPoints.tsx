import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface ThreeCardsAsideInterfaceWithBulletPoints {
    cards: CardInterface[];
}

interface CardInterface {
    title: string;
    subtitle: string;
    image: string | null;
    video: string | null;
    description: string;
    bulletPoints: string[];
    link: string | null;
}

const MultipleAsidesAlternatingWithBulletPoints: React.FC<ThreeCardsAsideInterfaceWithBulletPoints> = ({cards}) => {

    const [largeVideo, setLargeVideo] = useState<string | null>(null);

    useEffect(() => {
        console.log(largeVideo);
    }, [largeVideo]);

    return (
        <section className="py-20 px-10 md:px-16 max-w-7xl mx-auto">
            {
                cards.map((card, index) => (
                    <div
                        key={index}
                        id={"c-" + index}
                        className={`my-10 flex gap-5 flex-col justify-center items-center ${index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        {
                            card.image === null ?
                                <div onClick={() => setLargeVideo(card.video)}
                                     className="rounded-lg w-full md:w-[500px] shadow-lg"
                                >
                                    <video
                                        className="w-full aspect-video object-cover shadow-lg"
                                        src={card.video ?? ""}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                                :
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="rounded-lg w-full md:w-[500px] aspect-video object-cover shadow-lg"
                                />
                        }
                        <div
                            className={"md:px-10 flex flex-col gap-5 justify-center items-start rounded-2xl py-5"}>
                            <div className={"border-b pb-5 border-main-900 w-full"}>
                            <span
                                className="text-main-900 font-semibold text-sm tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
                                {card.subtitle}
                            </span>
                                <p className={"text-3xl font-bold my-4"}>{card.title}</p>
                                <p className={"text-gray-500"}>{card.description}</p>
                            </div>
                            <h3 className={"text-sm font-bold"}>Funcții esențiale:</h3>
                            <ul className="text-sm text-gray-700 space-y-2">
                                {card.bulletPoints.map((bulletPoint, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>{bulletPoint}</span>
                                    </li>
                                ))}
                            </ul>
                            {card.link != null && <Link to={card.link!}>Mai multe detalii</Link>}
                        </div>
                    </div>
                ))
            }
            {
                largeVideo != null && (<div onClick={() => setLargeVideo(null)}
                                            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
                >
                    <div onClick={(e) => e.stopPropagation()} className="max-w-7xl w-full px-4">
                        <video
                            src={largeVideo ?? ""}
                            controls
                            autoPlay
                            className="w-full aspect-video object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>)
            }
        </section>
    );
};

export default MultipleAsidesAlternatingWithBulletPoints;
