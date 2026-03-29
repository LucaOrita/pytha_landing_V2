import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Video background with poster fallback */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-screenshot.webp)' }}
      >
        <video
          className="h-full w-full object-cover"
          src="/bg/bg-hero-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-screenshot.webp"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      <div className="container relative z-20 py-20 md:py-28 lg:py-36">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          {/* Left: Copy */}
          <div className="flex max-w-3xl flex-1 flex-col items-start gap-5">
            <div
              className="fade-up flex items-center rounded-full border border-[#8a1820]/30 bg-[#8a1820]/10 p-1 text-xs text-white/90"
              style={{ animationDelay: '0ms' }}
            >
              <span className="rounded-full bg-[#8a1820] px-3 py-1 text-white">Partener autorizat</span>
              <span className="px-3">PYTHA in Romania</span>
            </div>

            <h1
              className="fade-up text-4xl leading-tight tracking-tight text-balance text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: '0ms' }}
            >
              Software-ul CAD 3D care duce mobilierul tau de la idee la CNC —{' '}
              <span className="text-gradient">fara erori, fara bajbaieli</span>
            </h1>

            <p
              className="fade-up max-w-2xl leading-snug text-lg text-white/70 md:text-xl"
              style={{ animationDelay: '130ms' }}
            >
              PYTHA unifica proiectarea 3D, listele de piese, nesting-ul si exportul CNC
              intr-un singur flux. Folosit de peste 2.000 de ateliere in 50+ tari.
            </p>
          </div>

          {/* Right: CTA buttons */}
          <div
            className="fade-up space-y-3"
            style={{ animationDelay: '260ms' }}
          >
            <div className="flex gap-4.5">
              <Button className="flex-1 md:min-w-45" asChild>
                <Link href="/solicita-prezentare">Programeaza demo gratuit</Link>
              </Button>
              <Button className="flex-1 md:min-w-45 border-white/30 text-white hover:bg-white/10" variant="outline" asChild>
                <Link href="/module-pytha">Module si preturi</Link>
              </Button>
            </div>
            <div className="text-center text-sm text-white/60">
              Demo 15 min &middot; Fara obligatii &middot; Made in Germany
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="fade-up-scale mt-10 md:mt-20 lg:mt-30"
          style={{ animationDelay: '400ms' }}
        >
          <Image
            src="/images/hero-screenshot.webp"
            alt="Interfata software PYTHA 3D — proiectare mobilier"
            className="ring-white/10 w-full rounded-xs shadow-2xl ring-6 md:rounded-sm md:ring-16"
            width={1440}
            height={905}
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
