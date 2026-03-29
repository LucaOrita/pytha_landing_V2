import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni si conditii',
  description: 'Termenii si conditiile de utilizare a site-ului pytha3d.ro.',
  robots: { index: false, follow: false },
};

export default function TermeniPage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Termeni si conditii
          </h1>
          <p className="text-lg leading-snug text-gray-500">
            Pagina este in curs de actualizare. Pentru orice nelamuriri, ne puteti
            contacta la{' '}
            <a
              href="mailto:pytha@adlineindustries.ro"
              className="font-semibold text-[#8a1820] hover:underline"
            >
              pytha@adlineindustries.ro
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
