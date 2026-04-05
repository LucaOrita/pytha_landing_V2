import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni si Conditii | PYTHA 3D Romania',
  description: 'Termenii si conditiile de utilizare a site-ului PYTHA 3D Romania. Cititi regulile de acces si utilizare a serviciilor noastre.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Termeni si Conditii | PYTHA 3D Romania',
    description: 'Termenii si conditiile de utilizare a site-ului PYTHA 3D Romania.',
    type: 'website',
  },
};

export default function TermeniPage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Termeni si conditii
          </h1>
          <p className="text-lg leading-snug text-muted-foreground">
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
