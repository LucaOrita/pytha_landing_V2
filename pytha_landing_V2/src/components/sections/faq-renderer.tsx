'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FaqCategory {
  title: string;
  faqs: { question: string; answer: string }[];
}

export function FaqRenderer({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
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
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
