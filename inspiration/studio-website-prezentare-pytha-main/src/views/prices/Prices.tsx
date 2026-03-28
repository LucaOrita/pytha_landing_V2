import React, {useState} from "react";
import {IoBookmark, IoClose} from "react-icons/io5";
import ContactForm from "../contact/contact-form/ContactForm";

export default function Prices() {

    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [popupDemoBook, setPopupDemoBook] = useState(false);

    const basePlans = [
        {
            title: "Pachetul de bază – Startul perfect în lumea CAD 3D PYTHA",
            price: "4950€",
            subscriptionPrice: "99€",
            features: [{
                title: "Tot ce ai nevoie pentru un început profesionist în lumea CAD 3D:",
                features: ["dă viață viziunilor tale", "impresionează-ți clienții", "devino productiv imediat"]
            }, {
                title: "Pachetul de bază include:",
                features: [
                    "modelare intuitivă în 2D și 3D",
                    "organizare perfectă a proiectelor prin nume, straturi, grupuri etc.",
                    "desene tehnice clare, cu etichete, cote, hașuri, simboluri, secțiuni asociative și coduri QR",
                    "export de bază al listelor de piese",
                    "vizualizare impresionantă cu raytracer de înaltă performanță integrat, gestionare inteligentă a materialelor și texturilor, tehnologie HDR"
                ]
            }, {
                title: "Instrumente speciale versatile și funcții inovatoare de modelare pentru designuri 3D avansate:",
                features: [
                    "curbe, detecție de contururi, text 3D",
                    "unelte speciale pentru deformări",
                    "linii auxiliare comode",
                    "rotire automată 2D",
                    "acțiuni dinamice ale pieselor (ex: deschiderea ușilor sau sertarelor)",
                    "creare și utilizare de biblioteci",
                    "parametri SMART"
                ]
            }, {
                title: "Pachetul de bază include deja cele mai importante interfețe:",
                features: [
                    "DWG, DXF, 3DS, STEP, SVG,",
                    "OBJ, SKP, JPG, PDF, STL pentru imprimare 3D și altele"
                ]
            }],
            highlight: false,
        },
    ];

    const plans = [
        {
            title: "Listă de piese",
            price: "1290€",
            subscriptionPrice: "29€",
            description: "Calcul ușor folosind preț pe piesă, pe lungime sau pe suprafață. Export către imprimantă sau fișier CSV. Flexibilitate completă a formatelor de export pentru software-uri de tip tabelar, ERP, CRM, Excel, Word, XML, HTML, layout-uri definite de utilizator, import de fișiere.",
            features: [{
                title: "Evaluare flexibilă a proiectelor tale în liste și tabele:",
                features: [
                    "Atribute definite de utilizator",
                    "Dimensiuni de tăiere, dimensiuni finale, lungimi suplimentare",
                    "Canturi, material de bază, finisaj suprafață",
                    "Numere de poziție",
                    "Nume program CNC"
                ]
            }],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Parametrizare",
            price: "640€",
            subscriptionPrice: "14€",
            description: "",
            features: [{
                title: "Parametrizează-ți piesele și creează propria ta bibliotecă variabilă:\n",
                features: [
                    "Dimensiuni variabile",
                    "Spațiu rezervat pentru variante de design",
                    "Funcție de înlocuire",
                ]
            }],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "RadioLab High End Rendering & înregistrare video",
            price: "980€",
            subscriptionPrice: "42€",
            description: "",
            features: [{
                title: "Redare în timp real cu tehnica Radiosity, pentru prezentări uimitoare:",
                features: [
                    "Mișcare interactivă prin scenă",
                    "Simularea situațiilor de iluminat",
                    "Lumină indirectă, lumină naturală, LED, ...",
                    "Pornirea/oprirea luminilor în timp real",
                    "Creare, atribuire și editare ușoară a texturilor, materialelor și suprafețelor",
                    "Modificări rapide într-o scenă",
                    "Planificare profesională a iluminatului",
                    "Umbrire manuală + numeroase filtre",
                    "Aplicație pentru iOS și Android"
                ]
            }, {
                title: "Salvează o animație complet automată ca fișier video.",
                features: [
                    "Acțiuni combinate în timp real",
                    "Simularea animației iluminatului natura",
                ]
            }, {
                title: "Îmbunătățește prezentarea în timp real cu funcții HDR, pentru o imagine fotorealistă a scenei tale",
                features: [
                    "Iluminare bazată pe imagini (IBL) pentru compoziții de imagini și iluminare rapidă",
                    "Suport VR, Oculus Rift",
                ]
            }],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Suprafețe libere (Free form faces)",
            price: "590€",
            subscriptionPrice: "13€",
            description: "Unelte speciale pentru crearea obiectelor cu suprafețe curbate.",
            features: [],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Generatoare și Plug-In-uri",
            price: "1150€",
            subscriptionPrice: "26€",
            description: "Generator pentru dulapuri, inclusiv panta acoperișului, uși, sertare, rafturi, rafturi pentru sticle, un wizard puternic pentru planificarea bucătăriilor. Interfață de programare deschisă pentru a dezvolta funcții extinse de către tine (Plug-In-uri).",
            features: [],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Atelier",
            price: "2450€",
            subscriptionPrice: "55€",
            description: "",
            features: [{
                title: "Pentru un flux de date fluid în fabrica digitală:",
                features: [
                    "Tip automat cu conectori precum Cam&Dowel, balamale sau dopuri, chiar și în 3D",
                    "Personalizat conform principiilor individuale de design",
                    "Tipărirea etichetelor cu cod de bare sau QR code",
                    "Trasarea automată a pieselor una câte una",
                    "Interfață CAM Shaper Tool"
                ]
            }],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Bibliotecă",
            price: "820€",
            subscriptionPrice: "820€",
            description: "Peste 35.000 de elemente de bibliotecă de utilizat în: Arhitectură, prelucrarea lemnului, designul expozițiilor, amenajarea magazinelor, designul iluminatului, accesorii decorative și plante.",
            features: [],
            highlight: true,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Interfață CAM (Computer-Aided Manufacturing)",
            price: "1950€",
            subscriptionPrice: "44€",
            description: "Completarea ideală a atelierului PYTHA: WoodWop.mpr, WoodWop.dxf, AlphaCam, EasyWood DDX, BiesseWorks.dxf, bSolid/b.works.cix, NC Hops, EnRoute, Cobus Ncad, Format-4, F4integrate, Imawop, SCM Maestro, G-Code, PYTHA XML și multe altele.",
            features: [],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "Nesting (plasarea optimă a pieselor)",
            price: "1100€",
            subscriptionPrice: "25€",
            description: "Optimizare eficientă și rapidă a pieselor pe o piesă de aprovizionare, chiar și pentru orice formă de contur: Optimizare rectangulară, cu dinți și de formă liberă. Permite utilizarea diferitelor materiale și grosimi de panouri.",
            features: [],
            highlight: false,
            action: () => bookDemo(),
            actionText: "Comandă"
        },
        {
            title: "PYTHA Viewer",
            price: "Gratuit",
            subscriptionPrice: "Gratuit",
            description: "Este un instrument de vizualizare 3D care permite vizualizarea și explorarea modelelor create în PYTHA, fără a fi necesar software-ul complet. Acesta permite vizualizarea detaliilor și a designului în timp real, făcându-l util pentru colaborare și prezentări ale proiectelor. Descărcare gratuită la www.pytha.com",
            features: [],
            highlight: false,
            action: () => window.location.href = "https://apps.microsoft.com/detail/9nq5gdnvjgp8?hl=en-US&gl=US",
            actionText: "Descarcă"
        },
    ];

    const services = [
        {
            title: "Acord de service",
            priceLeft: "840€",
            subtextLeft: "pentru un an",
            priceRight: "2140€",
            subtextRight: "pentru 3 ani",
            features: [
                "Actualizări de software, inclusiv noi versiuni de software",
                "Linie telefonică tehnică",
                "Mentenanță la distanță",
                "Reduceri la traininguri și evenimente",
                "Asistență interactivă, documentație digitală extinsă și tutoriale",
                "Funcții extinse ale software-ului"
            ],
            highlight: true,
        },
        {
            title: "Training individual",
            priceLeft: "125€",
            subtextLeft: "pentru o ora online",
            priceRight: "920€",
            subtextRight: "pentru o zi",
            features: [
                "Trainingul individual PYTHA este începutul tău rapid și extrem de eficient în lumea 3D a PYTHA.",
                "Trainingul este personalizat în funcție de nevoile tale speciale și ține cont de cunoștințele respective ale participanților, până la 3 persoane pe sesiune.\n",
                "Trainingul poate avea loc la PYTHA Lab sau la compania ta.",
                "De asemenea, oferim training online (pe oră) la cerere",
            ],
            highlight: true,
        },
    ];

    const bookDemo = () => {
        setPopupDemoBook(true);
    }

    const closeDemo = () => {
        setPopupDemoBook(false);
    }


    return (
        <>
            <section
                className="p-6 bg-white pt-[100px] min-h-[600px] flex justify-center items-center flex-col bg-cover bg-no-repeat bg-center"
                style={{backgroundImage: "url('/bg/bg-contact-2.svg')"}}>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-6">
                    Flexibilitate și putere, la un preț corect
                </h2>
                <p className="text-center text-gray-500 mb-12">
                    Alege doar ce ai nevoie – licență de bază, module avansate și servicii dedicate, toate adaptate
                    atelierului tău.
                </p>
                <div className="flex justify-center">
                    <div className="inline-flex items-center border rounded-full p-1 bg-gray-100 gap-2">
                        <button
                            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                                !isSubscribed ? "bg-main-900 shadow text-white" : "text-gray-500"
                            }`}
                            onClick={() => setIsSubscribed(false)}
                        >
                            Acces pe viață
                        </button>
                        <button
                            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                                isSubscribed ? "bg-main-900 shadow text-white" : "text-gray-500"
                            }`}
                            onClick={() => setIsSubscribed(true)}
                        >
                            Lunar
                        </button>
                    </div>
                </div>
            </section>

            <section className={"py-10 bg-gray-50"}>
                <div className="px-5 grid grid-cols-1 gap-6 max-w-7xl mx-auto mb-10">
                    {
                        basePlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-xl border shadow-sm p-6 flex flex-col justify-between transition hover:shadow-lg bg-white ${
                                    plan.highlight ? "border-main-900" : "border-gray-200"
                                }`}
                            >
                                <div>
                                    <h3 className="text-4xl font-semibold text-gray-900 mb-2">
                                        {plan.title}
                                    </h3>
                                    <p className="text-3xl font-bold text-gray-900 mb-2">{isSubscribed ? plan.subscriptionPrice : plan.price}</p>
                                    <div className={"flex items-center justify-between gap-10"}>
                                        <div>
                                            {
                                                plan.features.slice(0, 2).map((feature, index) => (
                                                    <div key={index}>
                                                        <p className={index === 0 ? "mb-2" : "mt-2"}>{feature.title}</p>
                                                        <ul className="text-sm text-gray-700 space-y-2">
                                                            {feature.features.map((feature, i) => (
                                                                <li key={i} className="flex items-start">
                                                                    <span className="text-green-500 mr-2">✓</span>
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            {
                                                plan.features.slice(2).map((feature, index) => (
                                                    <div key={index}>
                                                        <p className={index === 0 ? "mb-2" : "mt-2"}>{feature.title}</p>
                                                        <ul className="text-sm text-gray-700 space-y-2">
                                                            {feature.features.map((feature, i) => (
                                                                <li key={i} className="flex items-start">
                                                                    <span className="text-green-500 mr-2">✓</span>
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={bookDemo}
                                    className="mt-6 w-full py-2 px-4 rounded-lg font-semibold transition text-white bg-main-900 hover:bg-main-700">
                                    Cumpara
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className={"bg-white p-10"}>
                    <div className="text-center mb-16">
                        <span
                            className="text-main-900 font-semibold text-sm tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
                            Add-ons
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
                            Module
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Modulele add-on PYTHA îți permit să extinzi funcționalitățile de bază ale programului,
                            adăugând instrumente specializate pentru nevoile atelierului tău – de la randare avansată și
                            nesting optimizat, până la integrare CNC și planificare automată. Activează doar ce ai
                            nevoie, când ai nevoie.
                        </p>
                    </div>
                    <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
                        {
                            plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl border shadow-sm p-6 flex flex-col justify-between transition hover:shadow-lg bg-white ${
                                        plan.highlight ? "border-main-900" : "border-gray-200"
                                    }`}
                                >
                                    <div>
                                        {
                                            plan.highlight &&
                                            <h5 className={"text-center text-sm text-main-900 font-bold"}>Life Time</h5>
                                        }
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {plan.title}
                                        </h3>
                                        <p className="text-3xl font-bold text-gray-900 mb-6">{isSubscribed ? plan.subscriptionPrice : plan.price}</p>
                                        {
                                            plan.features.map((feature, index) => (
                                                <div className={"mt-6"} key={index}>
                                                    <p className={"mb-2"}>{feature.title}</p>
                                                    <ul className="text-sm text-gray-700 space-y-2">
                                                        {feature.features.map((feature, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <span className="text-green-500 mr-2">✓</span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                        <p className="text-sm text-gray-500 my-4">{plan.description}</p>
                                    </div>
                                    <button
                                        onClick={plan.action}
                                        className="mt-6 w-full py-2 px-4 rounded-lg font-semibold transition text-white bg-main-900 hover:bg-main-700">
                                        {plan.actionText}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="text-center mt-10">
                        <span
                            className="text-main-900 font-semibold text-sm tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
                            Asistență dedicată
                        </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
                        Servicii
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Serviciile PYTHA includ training individual adaptat nivelului tău și suport tehnic prompt, ca să
                        lucrezi eficient și fără întreruperi. Te ajutăm să valorifici la maximum softul, indiferent de
                        provocări.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 sm:flex justify-center items-center gap-6 max-w-7xl mx-auto my-10">
                    {
                        services.map((plan, index) => (
                            <div
                                key={index}
                                className={`w-full sm:max-w-lg rounded-2xl border shadow-sm p-6 flex flex-col justify-between transition hover:shadow-lg bg-white ${
                                    plan.highlight ? "border-main-900" : "border-gray-200"
                                }`}
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                                        {plan.title}
                                    </h3>
                                    <div className={"flex items-center justify-center gap-10 mb-6"}>
                                        <div>
                                            <p className="text-xl font-bold text-gray-900">{plan.priceLeft}</p>
                                            <p className={"text-sm text-main-900"}>{plan.subtextLeft}</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-gray-900">{plan.priceRight}</p>
                                            <p className={"text-sm text-main-900"}>{plan.subtextRight}</p>
                                        </div>
                                    </div>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {
                popupDemoBook
                    ? <div
                        className={"w-screen h-screen fixed inset-0 p-10 z-50 bg-black bg-opacity-90 flex justify-center items-center"}
                        onClick={closeDemo}>
                        <div className={"w-full lg:w-2/5 h-fit rounded-xl bg-white p-5"}
                             onClick={(e) => e.stopPropagation()}>
                            <div className={"flex justify-end items-center"}>
                                <button
                                    onClick={closeDemo}
                                    className={"z-30 p-2 rounded-full hover:text-main-900 text-gray-500"}>
                                    <IoClose className={"h-5 w-5"}/>
                                </button>
                            </div>
                            <h1 className={"translate-y-[-35px] text-3xl font-bold pb-3 text-center flex items-center justify-center gap-2"}>
                                <IoBookmark className={"text-main-900 mb-1"}/>
                                Solicită oferta
                            </h1>
                            <ContactForm callback={closeDemo}/>
                        </div>
                    </div>
                    : <></>
            }
        </>
    );
}