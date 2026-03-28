import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative gradient SVG blob */}
      <svg
        className="absolute top-0 right-0 -z-10 origin-top-right scale-50 md:scale-75 lg:scale-100"
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={700}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9259ED" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#CF54EE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FB8684" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hero-grad-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10CBF4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9672FF" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <ellipse cx="500" cy="200" rx="350" ry="250" fill="url(#hero-grad-a)" />
        <ellipse cx="350" cy="450" rx="280" ry="200" fill="url(#hero-grad-b)" />
      </svg>

      <div className="container relative">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          {/* Left: Copy */}
          <div className="flex max-w-3xl flex-1 flex-col items-start gap-5">
            {/* Pill tag */}
            <div
              className="fade-up flex items-center rounded-full border p-1 text-xs"
              style={{ animationDelay: '0ms' }}
            >
              <span className="bg-muted rounded-full px-3 py-1">Partener oficial</span>
              <span className="px-3">PYTHA in Romania — distribuit de AdLine Industries</span>
            </div>

            {/* H1 */}
            <h1
              className="fade-up text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl"
              style={{ animationDelay: '0ms' }}
            >
              Proiecteaza. Planifica. Produ. Totul intr-un{' '}
              <span className="text-gradient">singur software.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="fade-up text-muted-foreground max-w-2xl leading-snug text-lg md:text-xl"
              style={{ animationDelay: '130ms' }}
            >
              PYTHA unifica designul 3D, documentatia tehnica si generarea codului CNC
              intr-un singur ecosistem. Fara erori. Fara plug-in-uri. Doar eficienta.
            </p>
          </div>

          {/* Right: CTA buttons */}
          <div
            className="fade-up space-y-3"
            style={{ animationDelay: '260ms' }}
          >
            <div className="flex gap-4.5">
              <Button className="flex-1 md:min-w-45" asChild>
                <Link href="/solicita-prezentare">Solicita demo gratuit</Link>
              </Button>
              <Button className="flex-1 md:min-w-45" variant="outline" asChild>
                <Link href="/module-pytha">Descopera modulele</Link>
              </Button>
            </div>
            <div className="text-muted-foreground text-center text-sm">
              40+ ani experienta &middot; 50+ tari &middot; Suport local Romania
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
            className="ring-foreground/5 w-full rounded-xs shadow-2xl ring-6 md:rounded-sm md:ring-16"
            width={1440}
            height={905}
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
