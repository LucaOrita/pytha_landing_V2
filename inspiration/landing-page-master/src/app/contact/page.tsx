import { Contact6 } from '@/components/contact6';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Doco - Discută cu echipa noastră',
  },
  description:
    'Ia legătura cu DOCO pentru soluții de verificare CMR, documente de transport, prevenirea fraudelor și optimizarea proceselor logistice.',
};

export default function ContactPage() {
  return <Contact6 />;
}
