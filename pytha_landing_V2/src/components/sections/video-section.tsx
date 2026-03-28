export default function VideoSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Descopera PYTHA <span className="text-gradient">in actiune</span>
          </h2>
          <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
            Vezi cum PYTHA transforma un concept 3D in piese gata de productie —
            intr-un flux continuu, fara erori.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl md:mt-15">
          <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
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
      </div>
    </section>
  );
}
