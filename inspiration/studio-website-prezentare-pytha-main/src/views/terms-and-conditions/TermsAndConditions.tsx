// src/views/terms-and-conditions/TermsAndConditions.tsx
export default function TermsAndConditions() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-10 pt-16 md:pt-24">

                <div className="max-w-4xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
                    {/* HERO (titlul mare) */}
                    <div className="p-6 md:p-10">
                        <h1 className="text-3xl md:text-4xl font-black leading-tight mb-2">
                            Termeni și Condiții – PYTHA3D.ro
                        </h1>
                        <p className="text-sm text-gray-600">Ultima actualizare: 14 august 2025</p>
                    </div>

                    {/* Linie roșie de separare */}
                    <div className="h-[3px] bg-#8a1820 rounded-full my-6 md:my-8" />

                    {/* CORPUL PAGINII (de la secțiunea 0 în jos) */}
                    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                        {/* 0. Preambul și identificare */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                0. Preambul și identificare
                            </h2>

                            <p className="mb-4">
                                Site-ul{" "}
                                <a href="https://www.pytha3d.ro" className="text-blue-600 hover:underline">
                                    www.pytha3d.ro
                                </a>{" "}
                                (“PYTHA3D” / “Site-ul”) este operat de <strong>ADLINE INDUSTRIES S.R.L.</strong>
                                {" "} (“Adline”, “Prestatorul”), cu sediul în București, Bld. Metalurgiei 99-99B, e-mail:{" "}
                                <a href="mailto:sales@adlineindustries.ro" className="text-blue-600 hover:underline">
                                    sales@adlineindustries.ro
                                </a>
                                , telefon:{" "}
                                <a href="tel:+40784211448" className="text-blue-600 hover:underline">
                                    0784.211.448
                                </a>
                                . Adline comercializează pe teritoriul României licențe pentru software-ul PYTHA (“Software-ul”),
                                în regim abonament sau licență permanentă (lifetime), cu livrare prin dongle hardware și activare pe server.
                            </p>

                            {/* Card identificare companie */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 mb-4">
                                <ul className="space-y-1">
                                    <li><span className="font-medium">Denumire:</span> ADLINE INDUSTRIES S.R.L.</li>
                                    <li><span className="font-medium">Sediu social:</span> București, Bld. Metalurgiei 99-99B</li>
                                    <li><span className="font-medium">CUI:</span> RO•••••••</li>
                                    <li><span className="font-medium">Nr. Registrul Comerțului:</span> J40/••••/20••</li>
                                    <li><span className="font-medium">Cont IBAN:</span> RO•••• •••• •••• •••• •••• ••</li>
                                    <li><span className="font-medium">Banca:</span> [numele băncii]</li>
                                    <li><span className="font-medium">Capital social:</span> [valoare] RON</li>
                                </ul>
                            </div>

                            <p>
                                Prin utilizarea Site-ului și/sau plasarea unei comenzi (online sau telefonic), confirmați că ați citit
                                și acceptat prezentul document (“T&amp;C”). T&amp;C fac parte integrantă din contractul de
                                vânzare/licență software la distanță.
                            </p>
                        </section>

                        {/* 1. Definiții */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">1. Definiții</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Client/Utilizator</strong> – persoană juridică sau fizică profesionistă care achiziționează licențe; dacă vindeți și către consumatori, se aplică și dispozițiile pentru consumatori.</li>
                                <li><strong>Comandă</strong> – solicitarea de achiziție transmisă prin Site sau telefonic.</li>
                                <li><strong>Licență</strong> – dreptul de utilizare a Software-ului conform tipului (abonament/lifetime) și configurației achiziționate.</li>
                                <li><strong>Dongle</strong> – dispozitiv USB de autentificare/activare a licenței.</li>
                                <li><strong>Suport</strong> – servicii de asistență tehnică oferite de Adline conform pachetului.</li>
                                <li><strong>Actualizări</strong> – patch-uri, versiuni, module, în condițiile licenței.</li>
                            </ul>
                        </section>

                        {/* 2. Sfera de aplicare și teritorialitate */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                2. Sfera de aplicare și teritorialitate
                            </h2>
                            <p className="mb-2">2.1. T&amp;C se aplică tuturor Comenzilor plasate exclusiv pentru livrări în România.</p>
                            <p>2.2. Versiunea aplicabilă este cea valabilă la data plasării Comenzii. Adline poate actualiza T&amp;C prin publicare pe Site.</p>
                        </section>

                        {/* 3. Eligibilitate și cont */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                3. Eligibilitate și cont
                            </h2>
                            <p className="mb-2">3.1. Clientul declară că are capacitatea de a contracta și, dacă acționează pentru o entitate, deține împuternicire valabilă.</p>
                            <p className="mb-2">3.2. Pentru anumite funcții poate fi necesară crearea unui cont. Sunteți responsabil(ă) de păstrarea confidențialității credențialelor.</p>
                            <p>3.3. Adline poate suspenda/închide conturi în caz de abuz, fraudă, neplată, încălcarea T&amp;C sau cerințe legale.</p>
                        </section>

                        {/* 4. Oferte, prețuri și taxe */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                4. Oferte, prețuri și taxe
                            </h2>
                            <p className="mb-2">4.1. Ofertele, configurațiile și prețurile sunt afișate pe Site sau comunicate de reprezentanții Adline (pentru Comenzi telefonice). Prețurile includ TVA, dacă nu se indică altfel.</p>
                            <p className="mb-2">4.2. Adline poate modifica prețurile; pentru Comenzile confirmate rămâne valabil prețul acceptat la momentul confirmării.</p>
                            <p>4.3. Costurile de livrare a dongle-ului (curier, asigurare) sunt comunicate separat, după caz.</p>
                        </section>

                        {/* 5. Comenzi: online și telefonic */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                5. Comenzi: online și telefonic
                            </h2>
                            <p className="mb-2">5.1. Comenzile se pot plasa prin Site sau telefonic folosind datele de contact publicate pe Site.</p>
                            <p className="mb-2">5.2. Contractul se consideră încheiat la data confirmării Comenzii de către Adline (prin e-mail/SMS/telefon).</p>
                            <p>5.3. Pentru comenzile online, bifarea casetei “Am citit și accept T&amp;C” reprezintă acceptarea ofertei și semnătură electronică în sensul legii.</p>
                        </section>

                        {/* 6. Plată și facturare */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                6. Plată și facturare
                            </h2>
                            <p className="mb-2">6.1. Plata: online cu card/transfer bancar/OP sau conform înțelegerii pentru Comenzi telefonice.</p>
                            <p className="mb-2">6.2. Pentru abonamente, facturarea este recurentă. Neachitarea la scadență poate duce la suspendarea licenței până la stingerea debitului (se pot aplica penalități rezonabile).</p>
                            <p>6.3. Orice reducere/discount se aplică condiționat; neîndeplinirea condițiilor poate conduce la regularizări.</p>
                        </section>

                        {/* 7. Livrarea dongle-ului și activarea licenței */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                7. Livrarea dongle-ului și activarea licenței
                            </h2>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Licența este livrată fizic prin expedierea dongle-ului la adresa indicată de Client.</li>
                                <li>Dongle-ul include codul unic necesar activării. După confirmarea livrării, Adline efectuează deblocarea/activarea pe server.</li>
                                <li>Riscul se transferă la predarea către Client/curier; verificați integritatea coletului la recepție.</li>
                                <li>Termenele de livrare sunt comunicate la confirmarea Comenzii; pot apărea întârzieri rezonabile (curier/forță majoră).</li>
                                <li>În caz de defect de fabricație al dongle-ului, Adline va repara/înlocui dispozitivul conform legii.</li>
                            </ol>
                        </section>

                        {/* 8. Acceptare, instalare și compatibilitate */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                8. Acceptare, instalare și compatibilitate
                            </h2>
                            <p className="mb-2">8.1. Licența se consideră acceptată la recepția dongle-ului și activarea pe server.</p>
                            <p>8.2. Clientul asigură îndeplinirea cerințelor minime de sistem. Adline poate recomanda configurații, fără a garanta compatibilitatea cu toate mediile.</p>
                        </section>

                        {/* 9. Abonamente: durată, reînnoire, upgrade/downgrade */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                9. Abonamente: durată, reînnoire, upgrade/downgrade
                            </h2>
                            <p className="mb-2">9.1. Abonamentele sunt pe perioade determinate (ex. 3/12 luni) și pot include actualizări/suport conform pachetului.</p>
                            <p className="mb-2">9.2. Dacă oferta/contractul prevede reînnoire automată, Clientul poate denunța reînnoirea prin notificare transmisă înainte de data de expirare, în termenul indicat în ofertă/contract.</p>
                            <p>9.3. Upgrade/downgrade: intră în vigoare după regularizarea diferențelor; poate necesita înlocuire dongle (după caz).</p>
                        </section>

                        {/* 10. Dreptul de retragere (consumatori) și anulări */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                10. Dreptul de retragere (consumatori) și anulări
                            </h2>
                            <p className="mb-2">10.1. Conform OUG 34/2014, consumatorii au drept de retragere în 14 zile pentru contractele la distanță, cu excepția conținutului digital/serviciilor a căror executare a început cu acordul expres al consumatorului.</p>
                            <p className="mb-2">10.2. Licențele PYTHA (abonament sau lifetime) devin nerecuperabile după livrarea dongle-ului și activarea licenței. Prin plasarea Comenzii, consumatorul își dă acordul expres privind începerea executării înainte de expirarea termenului de retragere și ia act că își pierde dreptul de retragere după activare.</p>
                            <p>10.3. Clienții non-consumatori (profesioniști) nu beneficiază de regimul retragerii pentru consumatori.</p>
                        </section>

                        {/* 11. Actualizări, mentenanță, disponibilitate */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                11. Actualizări, mentenanță, disponibilitate
                            </h2>
                            <p className="mb-2">11.1. Pentru abonamente: actualizări/patch-uri și suport conform pachetului. Pentru licențe lifetime, actualizările majore pot necesita achiziție separată.</p>
                            <p className="mb-2">11.2. Pot exista ferestre de mentenanță anunțate; Adline urmărește o disponibilitate ridicată a serviciilor conexe, fără garanția indisponibilității zero.</p>
                            <p>11.3. În caz de indisponibilitate imputabilă Adline peste pragurile rezonabile, se pot acorda compensații proporționale (ex. prelungire).</p>
                        </section>

                        {/* 12. Licență și proprietate intelectuală */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                12. Licență și proprietate intelectuală
                            </h2>
                            <p className="mb-2">12.1. Adline acordă o licență neexclusivă de utilizare a Software-ului, limitată de tipul licenței, numărul de posturi și mecanismul dongle.</p>
                            <p className="mb-2">12.2. Sunt interzise: reproducerea, distribuirea, ingineria inversă, decompilarea, înlăturarea protecțiilor tehnice sau orice utilizare în afara licenței.</p>
                            <p className="mb-2">12.3. Mărcile, logo-urile, conținutul Site-ului, manualele și bazele de date sunt protejate de legislația drepturilor de autor și a mărcilor.</p>
                            <p>12.4. Clientul notifică prompt Adline orice suspiciune de încălcare.</p>
                        </section>

                        {/* 13. Utilizare acceptabilă */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                13. Utilizare acceptabilă
                            </h2>
                            <p>Este interzisă utilizarea Software-ului în scopuri ilicite, vătămătoare sau care lezează drepturile terților, precum și distribuirea de malware sau tentativele de ocolire a protecțiilor tehnice.</p>
                        </section>

                        {/* 14. Garanții și limitarea răspunderii */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                14. Garanții și limitarea răspunderii
                            </h2>
                            <p className="mb-2">14.1. Software-ul este furnizat “ca atare”, conform documentației producătorului; Adline nu garantează adecvarea pentru un scop particular al Clientului.</p>
                            <p className="mb-2">14.2. Pentru defecte hardware ale dongle-ului, Adline asigură remedii conforme legii.</p>
                            <p>14.3. Limitare: Adline nu răspunde pentru pierderi indirecte (pierdere de profit/date, întreruperi). Răspunderea totală, indiferent de temei, nu va depăși suma plătită de Client pentru perioada afectată.</p>
                        </section>

                        {/* 15. Protecția datelor */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                15. Protecția datelor
                            </h2>
                            <p>
                                Prelucrarea datelor se realizează potrivit Politicii de Confidențialitate PYTHA3D, care face parte din T&amp;C.{" "}
                                <a href="/privacy-policy" className="text-blue-600 hover:underline">Vezi Politica de Confidențialitate</a>.
                            </p>
                        </section>

                        {/* 16. Forță majoră */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                16. Forță majoră
                            </h2>
                            <p className="mb-2">Nicio parte nu răspunde pentru neexecutări cauzate de forță majoră, în condițiile legii; partea afectată notifică cealaltă parte și depune diligențe pentru limitarea efectelor.</p>
                            <p>Partea afectată va informa de îndată ce evenimentul a încetat.</p>
                        </section>

                        {/* 17. Legea aplicabilă. Litigii. SAL/ODR */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                17. Legea aplicabilă. Litigii. SAL/ODR
                            </h2>
                            <p className="mb-2">17.1. T&amp;C sunt guvernate de legea română.</p>
                            <p className="mb-2">17.2. Litigiile se soluționează mai întâi pe cale amiabilă; în lipsă, de instanțele competente din România.</p>
                            <p>
                                17.3. Informații despre Soluționarea Alternativă a Litigiilor (SAL) – ANPC și platforma ODR a Comisiei Europene (link-urile pot fi consultate în footer-ul site-ului).{" "}
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Platforma ODR
                                </a>.
                            </p>
                        </section>

                        {/* 18. Dispoziții finale */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 scroll-mt-24">
                                18. Dispoziții finale
                            </h2>
                            <p className="mb-2">Invaliditatea unei clauze nu afectează restul T&amp;C.</p>
                            <p>
                                Comunicările oficiale către Adline se transmit la{" "}
                                <a href="mailto:sales@adlineindustries.ro" className="text-blue-600 hover:underline">
                                    sales@adlineindustries.ro
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
