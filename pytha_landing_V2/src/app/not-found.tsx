import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container text-center">
        <div className="mx-auto max-w-lg space-y-6">
          <h1 className="text-6xxl font-display leading-none tracking-tight">
            <span className="text-gradient">404</span>
          </h1>
          <h2 className="text-4xxl leading-tight tracking-tight">
            Pagina nu a fost gasita
          </h2>
          <p className="text-muted-foreground text-lg leading-snug">
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
