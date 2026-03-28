'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_CATEGORIES = [
  {
    title: 'Modelare si design',
    faqs: [
      {
        question: 'Ce tipuri de produse pot fi proiectate cu PYTHA?',
        answer:
          'Mobilier din lemn industrial (dulapuri, rafturi, mese), mobilier din lemn natural, standuri expozitionale, rafturi de prezentare si orice combinatie de materiale. Imaginatia dumneavoastra este limita.',
      },
      {
        question: 'Pot specifica materiale diferite pentru fiecare parte a unui produs?',
        answer:
          'Da, folosind functia de atribuire „Material Assigning" puteti selecta materiale diferite pentru fiecare suprafata a unui component — lemn, MDF, sticla, metal.',
      },
      {
        question: 'Este posibila setarea tesiturilor in timpul proiectarii?',
        answer:
          'Da, folosind functia „Chamfer 3D" puteti introduce latimea si unghiul tesiturii, apoi aplica pe orice muchie a modelului.',
      },
    ],
  },
  {
    title: 'Biblioteci si personalizare',
    faqs: [
      {
        question: 'Ce tipuri de imbinari sunt disponibile in biblioteca PYTHA?',
        answer:
          'Biblioteca include imbinari precum cam & diblu, suruburi, dibluri reglabile, caneluri si balamale. Este actualizata periodic cu modele de la Blum, Hettich, Hafele si alti producatori importanti.',
      },
      {
        question: 'Pot fi ajustate pozitia si cantitatea imbinarilor?',
        answer:
          'Da, puteti seta formule astfel incat numarul de imbinari sa se ajusteze automat in functie de dimensiunile componentului.',
      },
      {
        question: 'Pot utilizatorii crea imbinari personalizate?',
        answer:
          'Da, utilizatorii pot crea singuri noi imbinari (denumite macro-uri in PYTHA) fara a fi nevoie de suport tehnic.',
      },
    ],
  },
  {
    title: 'Feronerie si componente',
    faqs: [
      {
        question: 'Pot tipuri diferite de balamale sa isi actualizeze automat cantitatile?',
        answer:
          'Da, diferitele tipuri de balamale pot fi setate sa corespunda cu diferite stiluri de usi, iar cantitatile se actualizeaza automat.',
      },
      {
        question: 'Pot produsele semifabricate cu forme neregulate fi optimizate?',
        answer:
          'Da, PYTHA ofera optiuni pentru optimizarea, decalarea si aranjarea produselor semifabricate cu forme neregulate in resturi de material.',
      },
      {
        question: 'Pot dimensiunile semifabricatelor fi setate automat?',
        answer:
          'Da, prin salvarea automata a dimensiunilor pe baza ultimei editari sau setarea de dimensiuni implicite bazate pe dimensiunile dulapului.',
      },
    ],
  },
  {
    title: 'Integrare CNC si productie',
    faqs: [
      {
        question: 'Pot fi configurate automat setarile pentru frezarea usilor cu profil?',
        answer:
          'Da, creati seturi de usi profilate, salvati-le in biblioteca si inlocuiti-le in modelele de dulapuri dupa necesitati.',
      },
      {
        question: 'Ce formate CNC suporta PYTHA pentru export?',
        answer:
          'PYTHA exporta G-code, MPR (WoodWop), DXF, CIX (bSolid), PGM, XML si multe altele. Compatibil cu Homag, Biesse, SCM, Felder, DDX.',
      },
      {
        question: 'Exista avertismente pentru erori de proiectare?',
        answer:
          'PYTHA ofera avertismente pentru panouri supradimensionate si validari de grosime. Pentru selectia sculelor, utilizatorii gestioneaza acest aspect conform configurarii proprii.',
      },
    ],
  },
];

export default function FaqSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Intrebari <span className="text-gradient">frecvente</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-snug">
            Raspunsuri la cele mai importante intrebari despre PYTHA,
            modulele disponibile si integrarea CNC.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10 lg:mt-16">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="text-accent-foreground mb-4 text-lg font-bold">
                {category.title}
              </h3>
              <Accordion type="single" collapsible>
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.title}-${index}`}>
                    <AccordionTrigger className="text-left text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <p className="text-muted-foreground mb-4">
            Ai alte intrebari? Suntem aici sa te ajutam.
          </p>
          <Button asChild>
            <Link href="/contact">Contacteaza-ne</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
