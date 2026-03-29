import Link from 'next/link';

export default function CtaFinal() {
  return (
    <section className="bg-gradient-to-br from-[#8a1820] to-[#6d1319] py-20 md:py-28">
      <div className="container text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Pregatit sa vezi PYTHA in actiune?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Programeaza o demonstratie gratuita de 15 minute. Fara obligatii, fara
          costuri.
        </p>
        <div className="mt-8">
          <Link
            href="/solicita-prezentare"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#8a1820] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Vreau o demonstratie gratuita
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/50">
          sau suna-ne direct:{' '}
          <a href="tel:+40742065893" className="text-white/70 underline underline-offset-4 hover:text-white">
            +40 742 065 893
          </a>{' '}
          (L-V, 09-17)
        </p>
      </div>
    </section>
  );
}
