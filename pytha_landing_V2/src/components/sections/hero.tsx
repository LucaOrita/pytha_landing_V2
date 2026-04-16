import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#0a0a14]">
      {/* Brand gradient background */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#1a1a2e] via-[#2d1b33] to-[#8a1820]/80" />

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 z-0 size-144 rounded-full bg-[#8a1820]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 z-0 size-128 rounded-full bg-[#10a5ca]/25 blur-3xl" />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 z-1 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: 'url(/images/noise.webp)', backgroundSize: '200px' }}
      />

      {/* Composed SVG: idea -> 3D model -> CNC piece */}
      <svg
        className="pointer-events-none absolute inset-y-0 right-0 z-2 hidden h-full w-[60%] opacity-80 lg:block"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff6974" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10a5ca" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="heroFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a1820" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10a5ca" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Stage 1: sketch (idea) */}
        <g transform="translate(40,180)" opacity="0.9">
          <rect x="0" y="0" width="180" height="140" rx="6" stroke="url(#heroStroke)" strokeWidth="1.2" strokeDasharray="4 4" fill="url(#heroFill)" />
          <line x1="18" y1="30" x2="120" y2="30" stroke="#ff6974" strokeWidth="1" opacity="0.6" />
          <line x1="18" y1="50" x2="90" y2="50" stroke="#ff6974" strokeWidth="1" opacity="0.4" />
          <path d="M 20 90 L 60 70 L 100 95 L 140 75 L 160 90" stroke="#10a5ca" strokeWidth="1.4" fill="none" />
          <circle cx="60" cy="70" r="2.5" fill="#ff6974" />
          <circle cx="100" cy="95" r="2.5" fill="#ff6974" />
          <circle cx="140" cy="75" r="2.5" fill="#ff6974" />
        </g>

        {/* Connector 1 -> 2 */}
        <path d="M 230 250 C 270 240, 280 280, 320 270" stroke="url(#heroStroke)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
        <polygon points="320,270 312,265 314,275" fill="#10a5ca" />

        {/* Stage 2: 3D wireframe model */}
        <g transform="translate(330,140)" opacity="0.95">
          {/* Isometric cabinet wireframe */}
          <g stroke="url(#heroStroke)" strokeWidth="1.3" fill="none">
            <polygon points="20,60 120,20 220,60 220,180 120,220 20,180" fill="url(#heroFill)" />
            <polygon points="20,60 120,100 220,60" />
            <line x1="120" y1="100" x2="120" y2="220" />
            {/* internal shelves */}
            <line x1="40" y1="110" x2="210" y2="110" strokeOpacity="0.5" />
            <line x1="40" y1="150" x2="210" y2="150" strokeOpacity="0.4" />
            {/* dimension ticks */}
            <line x1="20" y1="240" x2="220" y2="240" stroke="#ff6974" strokeWidth="0.8" />
            <line x1="20" y1="236" x2="20" y2="244" stroke="#ff6974" strokeWidth="0.8" />
            <line x1="220" y1="236" x2="220" y2="244" stroke="#ff6974" strokeWidth="0.8" />
          </g>
          <circle cx="20" cy="60" r="2" fill="#10a5ca" />
          <circle cx="220" cy="60" r="2" fill="#10a5ca" />
          <circle cx="120" cy="20" r="2" fill="#10a5ca" />
          <circle cx="120" cy="220" r="2" fill="#ff6974" />
        </g>

        {/* Connector 2 -> 3 */}
        <path d="M 570 260 C 610 260, 620 300, 660 295" stroke="url(#heroStroke)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
        <polygon points="660,295 652,290 654,300" fill="#10a5ca" />

        {/* Stage 3: CNC / machined part */}
        <g transform="translate(600,200)" opacity="0.9">
          <rect x="0" y="20" width="160" height="110" rx="4" stroke="url(#heroStroke)" strokeWidth="1.2" fill="url(#heroFill)" />
          {/* drilled holes grid */}
          <g fill="#ff6974" opacity="0.85">
            <circle cx="20" cy="40" r="2.5" />
            <circle cx="50" cy="40" r="2.5" />
            <circle cx="80" cy="40" r="2.5" />
            <circle cx="110" cy="40" r="2.5" />
            <circle cx="140" cy="40" r="2.5" />
            <circle cx="20" cy="110" r="2.5" />
            <circle cx="50" cy="110" r="2.5" />
            <circle cx="80" cy="110" r="2.5" />
            <circle cx="110" cy="110" r="2.5" />
            <circle cx="140" cy="110" r="2.5" />
          </g>
          {/* CNC toolpath */}
          <path d="M 30 75 L 70 75 L 70 95 L 110 95 L 110 75 L 150 75" stroke="#10a5ca" strokeWidth="1.4" fill="none" strokeDasharray="2 2" />
          {/* G-code label */}
          <text x="0" y="12" fill="#10a5ca" fontSize="9" fontFamily="monospace" opacity="0.8">G01 X0 Y0 Z-5</text>
        </g>

        {/* Stage labels */}
        <text x="40" y="170" fill="#ffffff" fontSize="10" fontFamily="monospace" opacity="0.55">01 · IDEE</text>
        <text x="330" y="130" fill="#ffffff" fontSize="10" fontFamily="monospace" opacity="0.55">02 · MODEL 3D</text>
        <text x="600" y="190" fill="#ffffff" fontSize="10" fontFamily="monospace" opacity="0.55">03 · CNC</text>
      </svg>

      {/* Bottom fade — melts hero into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-3 h-60 bg-linear-to-b from-transparent to-white md:h-80" />

      <div className="container relative z-10 py-20 md:py-28 lg:py-36">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          {/* Left: Copy */}
          <div className="flex max-w-3xl flex-1 flex-col items-start gap-5">
            <div
              className="fade-up flex items-center rounded-full border border-white/20 bg-white/10 p-1 text-xs text-white/90 backdrop-blur-sm"
              style={{ animationDelay: '0ms' }}
            >
              <span className="rounded-full bg-white px-3 py-1 text-[#8a1820] font-medium">Partener autorizat</span>
              <span className="px-3">PYTHA în România</span>
            </div>

            <h1
              className="fade-up text-4xl leading-tight tracking-tight text-balance text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: '0ms' }}
            >
              Software-ul CAD 3D ales de peste 30.000 de ateliere din întreaga lume.{' '}
              <span className="text-[#ff6974]">Acum cu suport complet în România.</span>
            </h1>

            <p
              className="fade-up max-w-2xl leading-snug text-lg text-white/70 md:text-xl"
              style={{ animationDelay: '130ms' }}
            >
              De la proiect 3D la producție CNC într-un singur flux. PYTHA unifică proiectarea,
              listele de piese, nesting-ul și exportul CNC — totul cu suport local dedicat.
            </p>
            <div
              className="fade-up flex flex-wrap gap-4 text-sm text-white/60"
              style={{ animationDelay: '200ms' }}
            >
              <span className="flex items-center gap-1.5">
                <svg className="size-4 text-[#ff6974]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                30.000+ ateliere global
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="size-4 text-[#ff6974]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                50+ țări
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="size-4 text-[#ff6974]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                Suport local România
              </span>
            </div>
          </div>

          {/* Right: CTA buttons */}
          <div
            className="fade-up space-y-3"
            style={{ animationDelay: '260ms' }}
          >
            <div className="flex gap-4.5">
              <Button className="flex-1 md:min-w-45" asChild>
                <Link href="/solicita-prezentare">Programează Demo</Link>
              </Button>
              <Button className="flex-1 md:min-w-45 border-white/30 text-white hover:bg-white/10" variant="outline" asChild>
                <Link href="/module-pytha">Module și prețuri</Link>
              </Button>
            </div>
            <div className="text-center text-sm text-white/60">
              Prezentare personalizată de 30 min &middot; Adaptată nevoilor tale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
