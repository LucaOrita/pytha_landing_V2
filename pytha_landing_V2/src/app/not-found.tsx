import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container text-center">
        <div className="mx-auto max-w-lg space-y-6">
          <h1 className="text-6xxl leading-none tracking-tight">
            <span className="text-[#8a1820]">404</span>
          </h1>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Pagina nu a fost gasita
          </h2>
          <p className="text-lg leading-snug text-gray-500">
            Ne pare rau, dar pagina pe care o cauti nu exista sau a fost mutata.
          </p>
          <Button asChild>
            <Link href="/">Inapoi la pagina principala</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
