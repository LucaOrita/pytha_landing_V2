import MultipleAsidesAlternating from "../../commons/components/MultipleAsidesAlternating";
import CardsAside3WtihTitle from "../../commons/components/ThreeCardsAside";
import CollapsableSection from "../../commons/components/ColapsableSection";
import CountSection from "../../commons/components/CountSection";
import MultipleCards2By2 from "../../commons/components/MultipleCards2By2";
import React, {useState} from "react";
import {FaHeadphonesSimple} from "react-icons/fa6";
import {Tb3DCubeSphere, TbFile3D} from "react-icons/tb";
import {BsFillDiagram3Fill} from "react-icons/bs";
import LargeVideoSection from "../../commons/components/LargeVideoSection";
import MainAppRouter from "../../router/MainAppRouter";
import {IoBookmark, IoClose} from "react-icons/io5";
import ContactForm from "../contact/contact-form/ContactForm";

export default function Home() {

    const [popupDemoBook, setPopupDemoBook] = useState(false);

    const bookDemo = () => {
        setPopupDemoBook(true);
    }

    const closeDemo = () => {
        setPopupDemoBook(false);
    }

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/bg/bg-hero-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"/>

                <div className="relative z-20 max-w-6xl w-full grid grid-cols-1 gap-10 items-center">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Proiectează. Planifică. Produ. Totul într-un singur flux de lucru.
                        </h1>
                        <p className="text-lg md:text-3xl text-white mb-6">
                            PYTHA unifică designul 3D, documentația tehnică și generarea codului CNC într-un singur
                            ecosistem. Elimină erorile manuale, accelerează procesul de producție și economisește până
                            la 40% din timpul angajaților tăi. Fără plug-in-uri. Fără exporturi inutile. Doar eficiență
                            pură.
                        </p>
                        <div className="flex gap-2 flex-col w-fit">
                            <button
                                onClick={bookDemo}
                                className="bg-main-900 text-white px-6 py-3 rounded-full shadow hover:bg-main-800 transition flex items-center gap-2">
                                Solicită demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CountSection cards={[
                {
                    title: "Eliminarea erorilor de transfer",
                    percent: "100%",
                    description: "Proiectul 3D devine automat fișier de producție CNC, fără interpretări greșite sau redesenări manuale.",
                },
                {
                    title: "Experiență în industrie",
                    percent: "40 ani",
                    description: "Cu experiență de peste 40 de ani în dezvoltarea de software CAD, echipa PYTHA Lab oferă soluții software avansate, adaptate celor mai exigente cerințe din industrie.",
                },
                {
                    title: "Timp de execuție redus",
                    percent: "40%",
                    description: "Cu planificare automată, nesting inteligent și export CAM direct, câștigi zile întregi la fiecare proiect.",
                }
            ]}/>

            <CardsAside3WtihTitle
                sectionSubtitle={"Adline Industries"}
                sectionDescription={"Servicii digitale de origine Germană, livrate de experți locali – AdLine Industries, cunoscători ai nevoilor producătorilor din Romania."}
                sectionTitle={"Partenerul autorizat PYTHA în România"}
                cards={[{
                    title: "Pachet complet de servicii inclus în orice achiziție",
                    subtitle: "",
                    description: "Clienții AdLine beneficiază de livrare, instalare, instruire, suport tehnic extins și postgaranție – asigurând astfel performanța continuă a soluțiilor achiziționate.",
                    image: "/images/home/section1/Pachet complet de servicii inclus în orice achiziție.jpg"
                }, {
                    title: "Fiabilitate industrială la prețuri competitive",
                    subtitle: "",
                    description: "Oferim echipamente CNC precise și durabile, cu un excelent raport calitate-preț. În plus, oferim consultanță în vederea ofertării unor produse perfect adaptate nevoilor clienților noștri.",
                    image: "/images/home/section1/Fiabilitate Test.png"
                }, {
                    title: "Experiență solidă și creștere prin recomandare",
                    subtitle: "",
                    description: "Cu peste 20 de ani de expertiză CNC, AdLine s-a dezvoltat prin calitate constantă și clienți satisfăcuți din Romania, Bulgaria și Ungaria, care ne recomandă mai departe.",
                    image: "/images/home/section1/Experiență solidă și creștere prin recomandare.jpg"
                }]}/>

            <CardsAside3WtihTitle
                sectionSubtitle={"Asistență Tehnică Completă"}
                sectionDescription={"Cu PYTHA și Adline Industries, ai întotdeauna o echipă de profesioniști lângă tine – de la instalare și configurare, până la optimizarea producției zilnice."}
                sectionTitle={"Suport tehnică local real - Parteneri în producția ta"}
                cards={[{
                    title: "Suport Tehnic Local",
                    subtitle: "",
                    description: "O echipă de specialiști în România răspunde rapid întrebărilor tale tehnice. Telefon, e-mail sau TeamViewer – ajutor real când ai nevoie, nu peste săptămâni.",
                    image: "/images/home/section2/Suport Technic Local.jpg"
                }, {
                    title: "Asistență Continuă în Producție",
                    subtitle: "",
                    description: "Te susținem nu doar la instalare, ci și în fluxul zilnic de producție. De la configurări CNC la nesting optimizat – ești acoperit 100%.",
                    image: "/images/home/section2/Asistenta continua in Productie.png"
                }, {
                    title: "Acces la Suportul Oficial PYTHA Germania",
                    subtitle: "",
                    description: "Pentru întrebări complexe sau actualizări avansate, colaborăm direct cu dezvoltatorii PYTHA din Germania. Expertiză completă, fără compromisuri.",
                    image: "/images/home/section2/Acces la Suportul Oficial PYTHA Germania.jpg"

                }]}/>


            <LargeVideoSection sectionTitle={"Descoperă PYTHA"}
                               sectionDescription={""}
                               videoLink={"https://www.youtube.com/embed/tXBObV8mDgM"}
            />

            <MultipleAsidesAlternating cards={[
                {
                    title: "Modelare 3D liberă și intuitivă",
                    subtitle: "Modelare liberă",
                    description: "Creează orice formă – de la corpuri simple la geometrii organice – fără limitările modelelor standard.",
                    image: "/images/home/section3/Modelare 3D liberă și intuitivă.jpg",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-0",
                }, {
                    title: "Automatizare totală a producției",
                    subtitle: "Producție automată",
                    description: "Găuri, îmbinări, aplicare cant, prelucrări CNC – generate automat direct din modelul 3D, fără muncă manuală.",
                    image: "/images/home/section3/Automatizare totală a producției.jpg",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-1",
                }, {
                    title: "Planificare inteligentă și liste automate de materiale",
                    subtitle: "Planificare SMART",
                    description: "Economisește timp și evită greșelile. Documentația completă se generează dintr-un singur click.",
                    image: "/images/home/section3/Planificare inteligentă și liste automate de materiale.jpg",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-2",
                }, {
                    title: "Nesting optimizat pentru economie de material",
                    subtitle: "Optimizare material",
                    description: "Algoritm integrat de așezare a pieselor pentru minimizarea pierderilor și creșterea randamentului la tăiere.",
                    image: "/images/home/section3/Nesting optimizat pentru economie de material.jpg",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-3",
                }, {
                    title: "Randare fotorealistă pentru vânzare rapidă",
                    subtitle: "Randare realistă",
                    description: "Impresionează clienții cu imagini de prezentare realiste, generate direct din scena de lucru.",
                    image: "/images/home/section3/Randare fotorealistă pentru vânzare rapidă.png",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-4",
                }, {
                    title: "Integrare directă cu utilajele CNC",
                    subtitle: "Integrare CNC",
                    description: "Exportă G-code, DXF, MPR sau alte formate CAM fără conversii suplimentare sau pierderi de timp.",
                    image: "/images/home/section3/Integrare directă cu utilajele CNC.jpg",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-5",
                }, {
                    title: "Control complet – De la schiță la producție",
                    subtitle: "Control total",
                    description: "Cu PYTHA, proiectarea, planificarea și pregătirea pentru fabricație se fac într-un singur ecosistem.",
                    image: "/images/home/section3/Control complet – De la schiță la producție.jpg",
                    video: null,
                    link: MainAppRouter.pythaModules + "#c-6",
                },
                // {
                //     title: "Suport local și adaptare la nevoile fiecărui atelier",
                //     subtitle: "Suport personalizat",
                //     description: "Fie că ești un producător artizanal sau o fabrică industrială, te ajutăm să implementezi PYTHA eficient.",
                //     image: "/images/demo.webp",
                //     video: null,
                //     link: MainAppRouter.pythaModules + "#c-7",
                // }
            ]}/>

            <MultipleCards2By2 cards={[
                {
                    title: "Soluție CAD/CAM complet integrată",
                    description:
                        "PYTHA integrează toate etapele – de la modelare și vizualizare, până la listare, optimizare nesting și export către utilaje. Acest flux coerent reduce timpii de operare, erorile și necesitatea mai multor platforme software.",
                    link: MainAppRouter.pythaModules + "#c-2",
                    linkText: "Spre Workshop",
                    icon: <BsFillDiagram3Fill className="w-10 h-10 rotate-180"/>
                },
                {
                    title: "Proiectare 2D și 3D într-un mediu unitar",
                    description:
                        "PYTHA oferă un mediu de lucru intuitiv, ce combină desenul 2D cu modelarea solidă 3D. Utilizatorii pot crea rapid volume, contururi și ansambluri, adaptându-se ușor fiecărui stil de proiectare, de la schiță la detaliu tehnic.",
                    link: MainAppRouter.pythaModules + "#c-0",
                    linkText: "Spre Basic Package",
                    icon: <Tb3DCubeSphere className={"w-10 h-10"}/>
                },
                {
                    title: "Interoperabilitate cu formate standard din industrie",
                    description:
                        "Software-ul asigură compatibilitate extinsă pentru import și export: DWG, DXF, STEP, 3DS, STL, OBJ, PDF, SKP și altele. Acest lucru facilitează colaborarea între arhitecți, proiectanți, producători și echipamente CNC, fără conversii intermediare.",
                    link: MainAppRouter.pythaModules + "#c-8",
                    linkText: "Spre CAM Interface",
                    icon: <TbFile3D className={"w-10 h-10"}/>,
                },
                {
                    title: "Asistență tehnică și instruire locală, în limba română",
                    description:
                        "Beneficiați de suport specializat, oferit direct în limba română: documentație, sesiuni de training, consultanță tehnică și actualizări. Suportul local facilitează integrarea software-ului în procesele interne ale fiecărui producător.",
                    link: MainAppRouter.contact,
                    linkText: "Spre Suport",
                    icon: <FaHeadphonesSimple className={"w-10 h-10"}/>,
                },
            ]}/>

            <section className={"bg-gray-50"}>
                <h1 className={"text-center text-main-900 text-3xl pt-10 font-bold"}>Întrebări frecvente</h1>
                <CollapsableSection
                    title={"Utilizare generală"}
                    faqs={[
                        {
                            question: "Ce tipuri de produse pot fi proiectate cu PYTHA?",
                            answer: <>
                                <p>PYTHA poate fi folosit pentru a proiecta:</p>
                                <ul className={"list-disc ml-5"}>
                                    <li>Mobilier din lemn industrial (dulapuri, rafturi, mese etc.)</li>
                                    <li>Mobilier din lemn natural</li>
                                    <li>Mobilier care combină lemnul natural cu cel industrial</li>
                                    <li>Stand-uri / rafturi de prezentare</li>
                                    <li>Deși este optimizat pentru producția de mobilier si stand-uri expoziționale, orice poate fi proiectat în PYTHA: imaginația dumneavoastră este limita.</li>
                                </ul>
                            </>
                        },
                        {
                            question: "Pot specifica materiale diferite pentru fiecare parte a unui produs în timpul proiectării?",
                            answer: <p>
                                Da, folosind funcția de atribuire „F Material Assigning”, poți selecta materiale pentru
                                fiecare suprafață a unui component.
                            </p>
                        },
                        {
                            question: "Este posibilă setarea teșiturilor în timpul proiectării?",
                            answer: <p>
                                Da, folosește funcția „Chamfer 3D”, introdu lățimea și unghiul teșiturii, apoi aplică.
                            </p>
                        },
                    ]}
                    onSectionOpened={(_) => {
                    }}/>

                <CollapsableSection
                    title={"Biblioteci de componente și personalizare"}
                    faqs={[
                        {
                            question: "Ce tipuri de îmbinări sunt disponibile în biblioteca PYTHA?",
                            answer: <>
                                <p>Biblioteca este actualizată periodic cu toate modelele celor mai importanți producători, precum Blum, Hettich, Häfele etc.</p>
                                <p>PYTHA include îmbinări precum:</p>
                                <ul className={"list-disc ml-5"}>
                                    <li>Cam + diblu</li>
                                    <li>Șuruburi</li>
                                    <li>Dibluri (pentru rafturi reglabile)</li>
                                    <li>Caneluri</li>
                                    <li>Balamale pentru uși</li>
                                </ul>
                            </>
                        },
                        {
                            question: "Pot fi ajustate poziția și cantitatea îmbinărilor?",
                            answer: <p>
                                Da, utilizatorii pot seta formule astfel încât numărul de îmbinări să se ajusteze
                                automat în funcție de dimensiunile componentului.
                            </p>
                        },
                        {
                            question: "Este complicat să ajustez, să instalez sau să adaug îmbinări noi? Pot utilizatorii crea îmbinări personalizate automat sau este nevoie de suport tehnic?",
                            answer: <p>
                                Utilizatorii pot crea singuri noi îmbinări (denumite macro-uri în PYTHA).
                            </p>
                        },
                    ]}
                    onSectionOpened={(_) => {
                    }}/>

                <CollapsableSection
                    title={"Canturi și gestionarea materialelor"}
                    faqs={[
                        {
                            question: "Pot fi setate automat marginile ascunse care nu necesită aplicarea cantului?",
                            answer:
                                <p>În prezent, PYTHA nu detectează automat marginile ascunse pentru aplicarea cantului.
                                    Utilizatorii pot predefini ce margini trebuie cantuite pentru fiecare panou
                                    denumit.</p>
                        },
                        {
                            question: "Poate fi actualizată corect cantitatea materialului de cant pentru diferite materiale din același dulap?",
                            answer: <p>
                                Da, PYTHA generează un deviz detaliat (BOM) care include lungimea cantului pentru
                                fiecare tip.
                            </p>
                        },
                    ]}
                    onSectionOpened={(_) => {
                    }}/>

                <CollapsableSection
                    title={"Feronerie și urmărirea componentelor"}
                    faqs={[
                        {
                            question: "Pot tipuri diferite de balamale din același produs să își actualizeze automat cantitățile?",
                            answer:
                                <p>
                                    Da, diferitele tipuri de balamale pot fi setate să corespundă cu diferite stiluri de
                                    uși.
                                </p>
                        },
                        {
                            question: "Pot produsele semifabricate cu forme neregulate fi optimizate, decalate sau aranjate în resturi de material?",
                            answer: <p>
                                Da, PYTHA oferă opțiuni pentru optimizarea produselor semifabricate cu forme neregulate.
                            </p>
                        },
                        {
                            question: "Pot dimensiunile produselor semifabricate fi setate la dimensiuni implicite în funcție de dimensiunile dulapului?",
                            answer: <>
                                <p>Da, PYTHA oferă opțiuni pentru optimizarea produselor semifabricate cu forme
                                    neregulate.</p>
                                <ul className={"list-disc ml-5"}>
                                    <li>Salvarea automată a dimensiunilor pe baza ultimei editări în tabelul de
                                        specificații al componentului.
                                    </li>
                                    <li>Setarea unei dimensiuni implicite pentru produsele semifabricate, bazată pe
                                        dimensiunile dulapului.
                                    </li>
                                </ul>
                            </>
                        },
                    ]}
                    onSectionOpened={(_) => {
                    }}/>

                <CollapsableSection
                    title={"Integrare CNC și producție"}
                    faqs={[
                        {
                            question: "Pot fi configurate automat setările pentru frezarea ușilor cu profil?",
                            answer:
                                <p>
                                    Da, creează seturi de uși profilate, salvează-le în bibliotecă și înlocuiește-le în
                                    modelele de dulapuri după necesități.
                                </p>
                        },
                        {
                            question: "Este posibilă inversarea suprafețelor în timpul prelucrării semifabricatelor?",
                            answer: <>
                                <p>Da, în funcție de mașina CNC:</p>
                                <ul className={"list-disc ml-5"}>
                                    <li>Pentru mașini CNC de tip Nesting: PYTHA exportă fișiere XML intermediare pentru
                                        optimizare și prelucrare.
                                    </li>
                                    <li>Pentru fierăstraie și mașini de găurit cu 5 sau 6 fețe: PYTHA exportă fișiere
                                        CSV pentru numele componentelor și fișiere MPR pentru mașinile de găurit.
                                        Fierăstrăul imprimă etichete cu coduri QR sau de bare pentru a lega componentele
                                        de programele de găurire corespunzătoare.
                                    </li>
                                </ul>
                            </>
                        },
                        {
                            question: "Există avertismente pentru erori de proiectare legate de dimensiunea panourilor, selecția incorectă a sculelor etc.?",
                            answer: <p>
                                PYTHA oferă avertismente pentru panouri supradimensionate. Nu oferă avertismente pentru
                                selecția greșită a sculelor; utilizatorii trebuie să gestioneze acest aspect.
                            </p>
                        },
                    ]}
                    onSectionOpened={(_) => {
                    }}/>

                <CollapsableSection
                    title={"Exporturi și etichetare"}
                    faqs={[
                        {
                            question: "Ce câmpuri de informații sunt incluse în fișierele CSV exportate de mașină?",
                            answer:
                                <p>
                                    Lista de piese din fișierul CSV include câmpuri precum dimensiuni, materiale,
                                    canturi, cantități și numere de serie.
                                </p>
                        },
                        {
                            question: "Cum sunt tipărite etichetele de către mașinile de producție?",
                            answer: <>
                                <p>În funcție de mașină:</p>
                                <ul className={"list-disc ml-5"}>
                                    <li>Pentru mașini CNC de tip Nesting: PYTHA exportă fișiere XML intermediare pentru
                                        generarea codului G și fișiere de etichete automate.
                                    </li>
                                    <li>Pentru fierăstraie: PYTHA exportă fișiere CSV către software-ul mașinii pentru
                                        optimizare și imprimarea etichetelor.
                                    </li>
                                </ul>
                            </>
                        },
                        {
                            question: "Permite PYTHA proiectarea diferitelor șabloane de etichete?",
                            answer: <p>
                                Da, PYTHA permite proiectarea mai multor șabloane de etichete.
                            </p>
                        },
                    ]}
                    onSectionOpened={(_) => {
                    }}/>
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
