export default function VideoSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Descopera PYTHA <span className="text-[#8a1820]">in actiune</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Vezi cum PYTHA transforma un concept 3D in piese gata de productie —
            intr-un flux continuu, fara erori.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl md:mt-16">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
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
