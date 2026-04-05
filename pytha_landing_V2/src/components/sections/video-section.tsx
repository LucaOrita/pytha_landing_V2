import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2d1b33] to-[#8a1820]/90 py-20 md:py-28">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 size-72 rounded-full bg-[#8a1820]/20 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-[#10a5ca]/15 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl space-y-4 text-balance text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
            <Play className="size-3.5 fill-current" />
            Prezentare video
          </div>
          <h2 className="text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Vezi PYTHA <span className="text-[#ff6974]">in actiune</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            De la prima schita pana la piesa finisata: urmareste cum un proiect
            prinde viata in cateva minute, cu export CNC inclus.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl md:mt-16">
          <div className="rounded-2xl bg-white/5 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm md:p-3">
            <div className="aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/tXBObV8mDgM"
                title="Prezentare software PYTHA 3D"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-white/40">
            Durata: ~3 minute &middot; Limba: Engleza &middot; Subtitrari disponibile
          </p>
        </div>
      </div>
    </section>
  );
}
