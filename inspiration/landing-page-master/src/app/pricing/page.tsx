import { Metadata } from 'next';

import Pricing from '@/components/sections/pricing';
import PricingTable from '@/components/sections/pricing-table';

export const metadata: Metadata = {
  title: 'Prețuri',
  description:
    'Află costurile pentru verificarea documentelor de transport, prevenirea fraudelor și conformitate operațională în logistică și transport.',
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <PricingTable />
    </>
  );
}
