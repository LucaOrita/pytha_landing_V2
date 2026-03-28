import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import MultipleAsidesAlternatingWithBulletPoints
    from "../../commons/components/MultipleAsidesAlternatingWithBuletPoints";

export default function PythaModules() {
    const {hash} = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }
        }
    }, [hash]);

    return (
        <div>
            <section className="relative min-h-[500px] flex items-center justify-center px-6 md:px-20 overflow-hidden pt-[60px]">
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
                        <h1 className="text-2xl md:text-5xl font-bold mb-6 text-white text-center leading-tight">
                            Personalizați soluția software PYTHA – selectați și integrați doar modulele esențiale activității dumneavoastră.
                        </h1>
                    </div>
                </div>
            </section>
            <MultipleAsidesAlternatingWithBulletPoints 
            cards={[
                {
                    title: "PYTHA Modeler Basic – Fundamentul Modelării Intuitive",
                    subtitle: "Modeler Basic Package",
                    description: "Construcție intuitivă de modele 2D și 3D solide, cu flux complet de la desen la randare și documentație tehnică.",
                    image: null,
                    video: "/videos/PYTHA Modeler Basic – Fundamentul Modelării Intuitive.mp4",
                    bulletPoints: [
                        "Modelare hibridă 2D/3D cu solid modeling nativ",
                        "Operații rapide: Extindere, Centrare, Rotire, Boolean (Unire, Centrare, Intersecție)",
                        "Cotare automată și generare planșe tehnice",
                        "Randare fotorealistă integrată (motor raytracer)",
                        "Gestionare layere, secțiuni, grupuri și atribute personalizate",
                        "Export/import fișiere: DWG, DXF, STL, OBJ, 3DS, PDF",
                        "Funcții Smart: Extend, Equalize, Change Number, Change Radius"
                    ],
                    link: null,
                }, {
                    title: "Generators & Plug–Ins",
                    subtitle: "Generators & Plug–Ins",
                    description: "Generare automată de mobilier standardizat și corpuri personalizate, pregătite direct pentru producție și CNC.",
                    image: null,
                    video: "/videos/Generators & Plug–Ins.mp4",
                    bulletPoints: [
                        "Generatoare de corpuri: bucătării, dressinguri, corpuri suspendate",
                        "Configurare completă: dimensiuni, fronturi, accesorii",
                        "Reguli automate de găurire și cotare",
                        "Export instant către CNC",
                        "Suport pentru plug-ins custom"
                    ],
                    link: null,
                }, {
                    title: "Modulul Workshop – Conectează proiectarea cu producția",
                    subtitle: "Workshop",
                    description: "Transformă modelul 3D într-un proiect pregătit pentru execuție automată: găurire, frezare, aplicare de cant, export CNC.",
                    image: null,
                    video: "/videos/workshop.mp4",
                    bulletPoints: [
                        "Recunoaștere automată a îmbinărilor (Footprint)",
                        "Găurire, dibluire, șanțuire, frezare automată",
                        "Aplicare automată de canturi",
                        "Etichetare automată piese",
                        "Suport pentru reguli constructive personalizate",
                    ],
                    link: null,
                }, {
                    title: "Din model, în tabel: control total asupra fiecărei piese",
                    subtitle: "Parts List",
                    description: "Generare automată a listelor de piese detaliate pentru ofertare, documentare sau producție.",
                    image: null,
                    video: "/videos/Din model, în tabel control total asupra fiecărei piese.mp4",
                    bulletPoints: [
                        "Creare automată de listă piese din modelul 3D",
                        "Atribute configurabile: material, dimensiuni, finisaje, greutate",
                        "Export Excel, CSV, TXT, HTML",
                        "Grupare și filtrare personalizată",
                        "Integrare directă în documentație tehnică",
                    ],
                    link: null,
                }, {
                    title: "Modulul Parametric – proiectare inteligentă, adaptabilă și eficientă",
                    subtitle: "Parametrics",
                    description: "Proiectare dinamică și adaptabilă prin definirea relațiilor parametrice între componente.",
                    image: null,
                    video: "/videos/Modulul Parametric – proiectare inteligentă, adaptabilă și eficientă.mp4",
                    bulletPoints: [
                        "Control variabil pentru dimensiuni (lățime, înălțime, adâncime)",
                        "Formule, condiții și restricții în configurare",
                        "Actualizare automată a ansamblurilor",
                        "Funcție Replace pentru componente",
                        "Integrare parametrică în biblioteci de produse",
                    ],
                    link: null,
                }, {
                    title: "Modulul Bibliotecă – acces la zeci de mii de obiecte parametrice si decorative",
                    subtitle: "Library",
                    description: "Acces rapid la peste 30.000 de obiecte 3D parametrice și decorative pentru proiectare și producție.",
                    image: null,
                    video: "/video/Modulul Bibliotecă – acces la zeci de mii de obiecte parametrice si decorative.mp4",
                    bulletPoints: [
                        "Componente 3D pregătite pentru integrare rapidă",
                        "Redimensionare parametrică automată",
                        "Elemente decorative și funcționale",
                        "Obiecte compatibile cu Workshop și export CNC",
                        "Inserare directă în proiect și randare",
                    ],
                    link: null,
                }, {
                    title: "Modulul Freeform – libertate geometrică pentru forme care ies din tipare",
                    subtitle: "Freeform",
                    description: "Modelare avansată de suprafețe libere și forme organice pentru proiecte unicat sau design experimental.",
                    image: null,
                    video: "/videos/Modulul Freeform – libertate geometrică pentru forme care ies din tipare.mp4",
                    bulletPoints: [
                        "Creare suprafețe complexe: Loft, Rail Sweep, Coons Face",
                        "Control complet asupra formei și curburii",
                        "Generare decupaje decorative și piese sculpturale",
                        "Compatibilitate cu fluxul de producție CNC",
                        "Integrare nesting și workshop",
                    ],
                    link: null,
                }, {
                    title: "Modulul Nesting – optimizare avansată a debitării pentru orice tip de piesă",
                    subtitle: "Nesting",
                    description: "Optimizare automată a debitării pieselor pe panouri, pentru reducerea pierderilor și creșterea eficienței.",
                    image: null,
                    video: "/videos/Modulul Nesting – optimizare avansată a debitării pentru orice tip de piesă.mp4",
                    bulletPoints: [
                        "Nesting pentru piese rectangulare și contur liber",
                        "Respectarea fibrei și a marginii de siguranță",
                        "Minimizare pierderi materiale",
                        "Gestionare stocuri de panouri și resturi",
                        "Export optimizat către CNC"
                    ],
                    link: null,
                }, {
                    title: "CAM Interface – Conectivitate extinsă către orice tehnologie CNC",
                    subtitle: "CAM Interface",
                    description: "Integrare fluidă între modelarea 3D și orice sistem CAM/CNC, cu suport pentru multiple formate industriale.",
                    image: null,
                    video: "/videos/CAM Interface – Conectivitate extinsă către orice tehnologie CNC.mp4",
                    bulletPoints: [
                        "Export fișiere G-code, MPR, DXF, CIX, PGM etc.",
                        "Compatibilitate cu Homag, Biesse, SCM, Felder, DDX",
                        "Export automat de prelucrări: găurire, frezare, conturare",
                        "Configurare multiplă de postprocesoare",
                        "Eliminare necesitate softuri intermediare",
                    ],
                    link: null,
                }, {
                    title: "RadioLab – Randare fotorealistă și prezentare în timp real",
                    subtitle: "RadioLab",
                    description: "Randare fotorealistă, iluminare în timp real și animații interactive direct din proiectul PYTHA.",
                    image: "/bg/radio.jpg",
                    video: null,
                    bulletPoints: [
                        "Simulare avansată de iluminat (Radiosity)",
                        "Editare lumini, texturi, reflexii în timp real",
                        "Generare animații și prezentări interactive",
                        "Export video sau integrare VR",
                        "Randare rapidă fără timp mare de calcul",
                    ],
                    link: null,
                }
            ]}/>
        </div>
    );
}
