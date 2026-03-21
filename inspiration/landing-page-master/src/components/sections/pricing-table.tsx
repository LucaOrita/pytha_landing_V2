'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface FeatureSection {
  category: string;
  isNew?: boolean;
  features: {
    name: string;
    isNew?: boolean;
    basic: string | boolean | null;
    growth: string | boolean | null;
    enterprise: string | boolean | null;
  }[];
}

const pricingPlans = [
  {
    name: 'Basic',
    price: '€10/lună',
    yearlyPrice: '€10/lună',
  },
  {
    name: 'Growth',
    price: '€50/lună',
    yearlyPrice: '€50/lună',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    yearlyPrice: 'Custom',
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: 'Pricing',
    features: [
      {
        name: 'Preț / lună',
        basic: '€10/lună',
        growth: '€50/lună',
        enterprise: 'Custom',
      },
      {
        name: 'Preț / an',
        basic: '€108/an',
        growth: '€540/an',
        enterprise: 'Custom',
      },
    ],
  },
  {
    category: 'Funcționalități',
    features: [
      {
        name: 'Verificare transportatori & case de expediții',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Prevenție avansată fraudă ',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Analiză documente AI',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Extragere date documente automată',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Dosar digital furnizori & Istoric',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Procedură verificare ghidată',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Căutare & filtre avansate',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Notificări expirări & neconcordanțe',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Export excel & PDF',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Audit log',
        basic: 'Basic',
        growth: 'Avansat',
        enterprise: 'Custom',
      },
      {
        name: 'Reguli & scoring configurabil',
        basic: null,
        growth: true,
        enterprise: 'Custom',
      },
      {
        name: 'Dashboard & rapoarte',
        basic: null,
        growth: true,
        enterprise: 'Custom',
      },
      {
        name: 'Aprobări 4-eyes',
        basic: null,
        growth: true,
        enterprise: 'Custom',
      },
      {
        name: 'Task-uri & comentarii interne',
        basic: null,
        growth: null,
        enterprise: true,
      },
      {
        name: 'Integrări',
        basic: null,
        growth: null,
        enterprise: true,
      },
      {
        name: 'API',
        basic: null,
        growth: null,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Utilizare & limite',
    features: [
      {
        name: 'Utilizatori incluși',
        basic: '5',
        growth: '20',
        enterprise: 'Custom',
      },
      {
        name: 'Storage inclus',
        basic: '5 GB',
        growth: '10 GB',
        enterprise: 'Custom',
      },
      {
        name: 'Pagini incluse / lună',
        basic: '100',
        growth: '625',
        enterprise: 'Custom',
      },
      {
        name: 'Pagini suplimentare',
        basic: 'Pachete fixe',
        growth: 'Pachete fixe',
        enterprise: 'Custom',
      },
      {
        name: 'Multi-echipă & departamente',
        basic: null,
        growth: true,
        enterprise: 'Custom',
      },
    ],
  },
  {
    category: 'Securitate & control',
    features: [
      {
        name: 'Roluri & permisiuni',
        basic: 'Basic',
        growth: 'Avansate',
        enterprise: 'Custom',
      },
      {
        name: 'Opțiuni de securitate avansate (ex. IP allowlist)',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'SSO (SAML/OIDC)',
        basic: null,
        growth: null,
        enterprise: true,
      },
      {
        name: 'Audit Securitate Cibernetică',
        basic: null,
        growth: null,
        enterprise: 'La cerere',
      },
    ],
  },
  {
    category: 'Suport',
    features: [
      {
        name: 'Help-center',
        basic: true,
        growth: true,
        enterprise: true,
      },
      {
        name: 'Suport email',
        basic: 'Standard',
        growth: 'Prioritar',
        enterprise: 'Prioritar + CSM',
      },
      {
        name: 'SLA răspuns',
        basic: 'Best effort',
        growth: 'Prioritizat',
        enterprise: 'SLA contractual',
      },
    ],
  },
];

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="section-padding">
      <div className="bigger-container space-y-8 lg:space-y-12">
        <Noise />

        <h2 className="text-4xl leading-tight font-bold tracking-tight lg:text-5xl text-black">
          Pricing Details
        </h2>

        <div>
          <PlanHeaders
            selectedPlan={selectedPlan}
            onPlanChange={setSelectedPlan}
          />
          <FeatureSections selectedPlan={selectedPlan} />
        </div>
      </div>
    </section>
  );
};

const PlanHeaders = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
  prefersReducedMotion?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="flex items-center justify-between py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-black">
                {pricingPlans[selectedPlan].name}
              </h3>
              <ChevronsUpDown
                className={`size-5 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 p-2">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    variant="outline"
                    key={index}
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                    className="text-black"
                  >
                    {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="grid grid-cols-5 gap-4 max-md:hidden">
        <div className="col-span-2"></div>

        {pricingPlans.map((plan, index) => (
          <h3
            key={index}
            className="mb-3 text-center text-2xl font-bold text-black"
          >
            {plan.name}
          </h3>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }: { selectedPlan: number }) => {
  return (
    <>
      {comparisonFeatures.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col md:mt-4 md:gap-1">
          <div className="py-4">
            <h3 className="flex items-center gap-8 text-lg font-bold text-black">
              {section.category}
              {section.isNew && <Badge variant="outline">NEW</Badge>}
            </h3>
          </div>

          {section.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="text-black grid grid-cols-2 items-center font-medium md:grid-cols-5"
            >
              <span className="me-8 inline-flex items-center gap-4 py-4 md:col-span-2 text-black">
                {feature.name}
                {feature.isNew && (
                  <Badge variant="default" className="rounded-sm">
                    NEW
                  </Badge>
                )}
              </span>

              <div className="md:hidden">
                <div className="bg-border border-input flex items-center justify-center gap-1 rounded-md border py-3 text-sm">
                  {renderFeatureValue(
                    [feature.basic, feature.growth, feature.enterprise][
                      selectedPlan
                    ],
                  )}
                </div>
              </div>

              <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-1">
                {[feature.basic, feature.growth, feature.enterprise].map(
                  (value, i) => (
                    <div
                      key={i}
                      className="bg-border border-input flex items-center justify-center gap-1 rounded-md border py-3 text-sm"
                    >
                      {renderFeatureValue(value)}
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const renderFeatureValue = (value: string | boolean | null) => {
  if (value === null || value === '-') {
    return <span className="text-zinc-400">-</span>;
  }

  if (typeof value === 'boolean') {
    return value ? (
      <Check className="size-5 text-primary" />
    ) : (
      <span className="text-zinc-400">-</span>
    );
  }

  return <span className="text-black">{value}</span>;
};

export default PricingTable;
