'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function BlogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-padding flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold text-[#8a1820]">Eroare</h1>
      <p className="mb-2 text-xl font-semibold">Nu am putut încărca articolul</p>
      <p className="mb-8 max-w-md text-gray-500">
        Poți încerca din nou sau poți reveni la lista de articole.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>Încearcă din nou</Button>
        <Button variant="outline" asChild>
          <Link href="/blog">Toate articolele</Link>
        </Button>
      </div>
    </section>
  );
}
