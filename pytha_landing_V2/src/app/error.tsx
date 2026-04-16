'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-padding flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold text-[#8a1820]">Eroare</h1>
      <p className="mb-2 text-xl font-semibold">Ceva nu a funcționat corect</p>
      <p className="mb-8 max-w-md text-gray-500">
        Ne cerem scuze pentru inconveniență. Poți încerca din nou sau te poți întoarce la pagina principală.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>Încearcă din nou</Button>
        <Button variant="outline" asChild>
          <Link href="/">Pagina principală</Link>
        </Button>
      </div>
    </section>
  );
}
