import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { WaitlistModal } from './payload/WaitlistModal';
import { Stats14 } from './stats14';

interface Cta15Props {
  className?: string;
}

const Cta15 = ({ className }: Cta15Props) => {
  return (
    <section className={cn('bg-section-alt', className)}>
      <div className="container pt-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-card),transparent)] sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-card),transparent)] lg:pl-20">
          <div className="mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left lg:text-xl">
            {/* <p className="mb-6 font-medium">aa</p> */}
            <Stats14 />
            <h2 className="mb-6 pt-4 text-4xl font-bold md:text-5xl">
              Rezervă-ți locul în lista de așteptare
            </h2>
            <p className="text-muted-foreground text-lg">
              Platformă AI pentru validarea documentelor CMR și identificarea
              riscurilor înainte de acceptare. Acces inițial disponibil pentru
              un număr limitat de utilizatori.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <WaitlistModal key="">
                <Button className="rounded-full shadow-none">
                  Înscrie-te pe listă
                </Button>
              </WaitlistModal>
              <Link href="#pricing">
                <Button variant="outline">Vezi planuri</Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full pl-4 sm:pl-0">
            <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl"></div>
            <Image
              src="/images/hero.png"
              alt="placeholder"
              width={800}
              height={400}
              className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta15 };
