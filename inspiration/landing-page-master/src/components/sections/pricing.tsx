'use client';

import { Check, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

import Logo from '../layout/logo';
import { WaitlistModal } from '../payload/WaitlistModal';

const pricingPlans = {
  individual: {
    title: 'Basic',
    subtitle: 'Pentru',
    description: 'Case de expediție și firme din lanțul logistic',
    undiscountedMonthlyPrice: 20,
    monthlyPrice: 10,
    undiscountedAnnualPrice: 18,
    annualPrice: 9,
    popular: true,
    features: [
      { name: '100 pagini/lună', included: true, emphasize: true },
      { name: '5 utilizatori', included: true },
      {
        name: 'AI avansat prevenție fraudă',
        included: true,
      },
      { name: '5 GB stocare', included: true },

      { name: 'Verificare transportatori & case de expediții', included: true },
      {
        name: 'Dosar digital furnizori & Istoric',
        included: true,
      },
      {
        name: 'Notificări expirări & neconcordanțe',
        included: true,
      },
      { name: 'Suport standard', included: true },
      {
        name: 'Audit log avansat',
        included: false,
      },
      {
        name: 'Dashboard & rapoarte',
        included: false,
      },
      {
        name: 'Reguli & scoring configurabil',
        included: false,
      },
      {
        name: 'Aprobări 4-eyes',
        included: false,
      },
      {
        name: 'Multi-echipă & departamente',
        included: false,
      },
      {
        name: 'Integrări',
        included: false,
      },
    ],
    cta: {
      text: 'Ai nevoie de o soluție personalizată?',
      button: 'Contactează-ne',
    },
  },
  team: {
    title: 'Growth',
    subtitle: 'Pentru',
    description: 'Companii cu flux operațional și volum ridicat de documente',
    undiscountedMonthlyPrice: 100,
    monthlyPrice: 50,
    undiscountedAnnualPrice: 90,
    annualPrice: 45,
    popular: false,
    features: [
      { name: '625 pagini/lună', included: true, emphasize: true },

      { name: '20 utilizatori', included: true },
      {
        name: 'AI avansat prevenție fraudă',
        included: true,
      },
      { name: '20 GB stocare', included: true },

      { name: 'Verificare transportatori & case de expediții', included: true },
      {
        name: 'Dosar digital furnizori & Istoric',
        included: true,
      },
      {
        name: 'Notificări expirări & neconcordanțe',
        included: true,
      },
      { name: 'Suport prioritar', included: true },
      {
        name: 'Audit log avansat',
        included: true,
      },
      {
        name: 'Dashboard & rapoarte',
        included: true,
      },
      {
        name: 'Reguli & scoring configurabil',
        included: true,
      },
      {
        name: 'Aprobări 4-eyes',
        included: true,
      },
      {
        name: 'Multi-echipă & departamente',
        included: true,
      },
      {
        name: 'Integrări',
        included: true,
      },
    ],
    cta: {
      text: 'Ai nevoie de o soluție personalizată?',
      button: 'Contactează-ne',
    },
  },
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="section-padding relative overflow-hidden" id="pricing">
      {/* Background Image with Mask */}
      <div className="absolute size-full mask-t-from-50% mask-t-to-100% mask-b-from-50% mask-b-to-90%">
        <div
          className={cn(
            'bg-chart-3 absolute size-full rounded-full blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/3 md:top-0 md:translate-x-1/3 md:-translate-y-0',
          )}
        />
        <div
          className={cn(
            'bg-chart-2 absolute size-full rounded-full blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/3 md:translate-y-0',
          )}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="from-background/30 to-background/30 pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b"
      />
      <div className="relative z-[2]">
        <Noise />
      </div>

      <div className="bigger-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          {/* Left side - Title and subtitle */}
          <div className="text-center lg:text-left">
            <Badge className="bg-primary/10 hover:bg-primary/5 text-primary my-4 p-1 text-center font-semibold tracking-tighter transition-all duration-200 ease-in-out select-none lg:p-2 lg:text-lg lg:tracking-normal">
              Ofertă de lansare ·{' '}
              <span className="font-bold">50% reducere</span> pentru o perioadă
              limitată
            </Badge>
            <h2 className="text-center text-4xl font-medium tracking-tighter md:text-start md:text-6xl md:leading-none lg:text-7xl">
              Tot ce ai nevoie ca să rulezi <br className="hidden md:block" />
              operațional
            </h2>
            <p className="text-muted-foreground/70 mt-3 hidden text-lg leading-relaxed md:block lg:mt-4">
              Alege planul care se potrivește nevoilor tale și începe să
              optimizezi gestionarea documentelor și conformitatea în
              transporturi.
            </p>
          </div>

          {/* Right side - Billing Switch */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  'text-lg font-semibold transition-colors',
                  !isAnnual ? 'text-foreground' : 'text-muted-foreground/70',
                )}
              >
                Lunar
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                variant="primary"
              />
              <span
                className={cn(
                  'text-lg font-semibold transition-colors',
                  isAnnual ? 'text-foreground' : 'text-muted-foreground/70',
                )}
              >
                Anual
              </span>
            </div>
            <p
              className={cn(
                isAnnual ? 'text-primary' : 'text-muted-foreground/70',
                'text-center text-sm font-medium',
              )}
            >
              Economisește 10% cu facturarea anuală
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-8 grid gap-4 lg:mt-12 lg:grid-cols-2">
          {Object.entries(pricingPlans).map(([key, plan]) => (
            <Card
              key={key}
              className="bg-border hover:shadow-primary/5 h-full gap-4 p-3 transition-all duration-300 hover:shadow-lg md:p-6"
            >
              <CardHeader className="bg-card rounded-md p-4 md:p-6">
                {/* Header with title and badge */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl">{plan.title}</h3>
                  {plan.popular && (
                    <Badge className="rounded-none bg-[#FFE6D0] px-4 py-1 text-[#FB6D21] dark:bg-[#6b3200] dark:text-[#fcaa7d]">
                      Cel mai popular
                    </Badge>
                  )}
                </div>

                {/* Subtitle and description */}
                <div className="mt-6 text-2xl md:mt-8 md:space-y-2 md:text-3xl">
                  <div className="text-muted-foreground/70">
                    {plan.subtitle}
                  </div>
                  <div className="font-medium">{plan.description}</div>
                </div>

                {/* Price and contact section */}
                <div className="mt-8 flex flex-col justify-between gap-8 md:mt-10 md:flex-row">
                  {/* Left side - Price and main CTA */}
                  <div className="flex flex-1 flex-wrap justify-between gap-4 md:flex-col md:gap-8">
                    <div className="space-y-1">
                      {/* Undiscounted price (crossed out) */}
                      <div className="flex items-baseline gap-1 opacity-60">
                        <span className="text-sm font-medium line-through">
                          €
                        </span>
                        <span className="text-xl line-through">
                          {isAnnual
                            ? plan.undiscountedAnnualPrice
                            : plan.undiscountedMonthlyPrice}
                        </span>
                        <span className="text-sm line-through">/ lună</span>
                      </div>
                      {/* Current discounted price */}
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-medium">€</span>
                        <span className="text-5xl md:text-6xl">
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-2xl">/ lună</span>
                      </div>
                    </div>
                    <WaitlistModal>
                      <Button className="h-10 !pl-5.5">
                        Începe acum
                        <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                          <ChevronRight className="size-4" />
                        </div>
                      </Button>
                    </WaitlistModal>
                  </div>

                  {/* Right side - Contact info */}
                  <div className="bg-border flex-1 space-y-4 p-6">
                    <div className="flex justify-between gap-6">
                      <p className="text-card-foreground tracking-tigter leading-none font-medium">
                        {plan.cta.text}
                      </p>
                      <Logo className="h-4 w-12" />
                    </div>
                    <WaitlistModal>
                      <Button variant="light" className="group h-10 w-full">
                        <>
                          Contactează-ne
                          <div className="bg-border border-input grid size-5.5 place-items-center rounded-full border">
                            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.25" />
                          </div>
                        </>
                      </Button>
                    </WaitlistModal>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="">
                      {feature.included ? (
                        <div className="border-muted-foreground flex size-4 items-center justify-center rounded-full">
                          <CheckCircle2
                            className={cn(
                              'text-muted-foreground size-4',
                              feature.emphasize &&
                                'text-secondary border-secondary',
                            )}
                          />
                        </div>
                      ) : (
                        <div className="border-muted-foreground flex size-4 items-center justify-center rounded-full border-[0.5px]">
                          <X className="text-muted-foreground/70 size-2" />
                        </div>
                      )}
                    </div>
                    <span
                      className={cn(
                        'text-sm',
                        feature.included
                          ? 'text-muted-foreground'
                          : 'text-muted-foreground/70',
                        feature.emphasize &&
                          'text-secondary text-base font-semibold',
                      )}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
