import React from "react";
import MultipleAsidesAlternating from "../../commons/components/MultipleAsidesAlternating";

export default function DetailsPytha() {
    return (
        <div>
            <section className={"p-56 text-center font-bold text-4xl bg-cover bg-no-repeat bg-center"}
                     style={{backgroundImage: "url('/bg/bg-contact-1.svg')"}}>
                Despre noi
            </section>

            <MultipleAsidesAlternating cards={[
                {
                    title: "Adline Industries",
                    subtitle: null,
                    description: "În România, PYTHA este promovat și susținut sub egida AdLine Industries – un nume respectat în industria echipamentelor CNC, cu activitate extinsă în prelucrarea lemnului, metalului și alte ramuri industriale.\n" +
                        "    AdLine nu se rezumă la a furniza utilaje. Construiește relații pe termen lung cu producătorii, oferind consultanță, suport tehnic și soluții complete adaptate fiecărui flux de producție.\n" +
                        "    Din această filozofie s-a născut și parteneriatul cu PYTHA – o completare firească pentru companiile care vor mai mult decât echipamente: vor control digital, viteză de execuție și precizie absolută.\n" +
                        "    Noi venim cu veriga lipsă din lanțul tehnologic: un software care preia ideea din biroul de proiectare și o duce, exact așa cum a fost gândită, până în utilaj.\n" +
                        "    Împreună cu AdLine, oferim producătorilor un flux complet – de la desenul 3D, la piesa finisată. Cu suport real, local, și rezultate măsurabile în fiecare atelier sau fabrică.",
                    image: "/images/despre/adline.jpeg",
                    video: null,
                    link: null,
                }, {
                    title: "PYTHA Lab GmbH",
                    subtitle: null,
                    description: "PYTHA este un software dezvoltat integral în Germania, de către compania PYTHA Lab GmbH, fondată în anul 1978 în Aschaffenburg. \n" +
                        "PYTHA a fost conceput inițial ca un instrument care să facă proiectarea asistată de calculator mai accesibilă și mai intuitivă. De-a lungul deceniilor, software-ul a evoluat într-un sistem CAD-CAM complet, orientat spre cerințele reale ale producției și integrării industriale. \n" +
                        "Astazi, PYTHA este un sistem CAD-CAM 3D complet, specializat în modelarea solidă și dedicat industriilor care necesită proiectare precisă, vizualizare realistă și conexiune directă cu producția. Utilizat cu precădere în fabricarea mobilierului, amenajări interioare, standuri expoziționale și arhitectură comercială, PYTHA permite construirea de proiecte 3D complet detaliate – de la schiță la execuție CNC.\n" +
                        "PYTHA este folosit de companii din peste 50 de țări și continuă să evolueze constant, ghidat de nevoile reale ale proiectanților și producătorilor profesioniști.",
                    image: "/images/despre/echipagmbh.jpeg",
                    video: null,
                    link: null,
                }
            ]}/>
        </div>
    );
}