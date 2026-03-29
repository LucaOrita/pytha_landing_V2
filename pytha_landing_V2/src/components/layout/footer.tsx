import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/navigation';

const SOCIAL_ICON_FILES: Record<string, string> = {
  facebook: '/icons/facebook-logo.svg',
  instagram: '/icons/instagram-logo.svg',
  linkedin: '/icons/linkedin-logo.svg',
  youtube: '/icons/youtube-logo.svg',
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Pregatit sa digitalizezi{' '}
            <span className="text-gradient">atelierul?</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg leading-snug">
            Descopera cum PYTHA poate transforma fluxul tau de productie — de la proiectare
            3D pana la piesa finisata.
          </p>
          <div className="mx-auto mt-8 flex max-w-sm justify-center gap-4.5">
            <Button className="flex-1" asChild>
              <Link href="/solicita-oferta">Solicita oferta</Link>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/solicita-prezentare">Programeaza prezentare</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Links Grid */}
      <div className="border-t">
        <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:py-16">
          <div>
            <h3 className="text-accent-foreground mb-4 text-sm font-semibold">Solutii</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.solutii.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground text-sm transition-opacity hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-accent-foreground mb-4 text-sm font-semibold">Companie</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.companie.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground text-sm transition-opacity hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-accent-foreground mb-4 text-sm font-semibold">Suport</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.suport.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground text-sm transition-opacity hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-accent-foreground mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground text-sm transition-opacity hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs md:flex-row">
          <div className="flex items-center gap-4">
            <Logo showPartner iconClassName="w-5" wordmarkClassName="text-sm" />
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()} PYTHA Romania — Partener oficial AdLine Industries
            </span>
          </div>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Image
                  src={SOCIAL_ICON_FILES[link.icon] || ''}
                  alt={link.name}
                  width={16}
                  height={16}
                  className="size-4 opacity-70 transition-opacity hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient blob — red/cyan brand colors */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/blobs/blob-footer.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 -z-10 origin-bottom-right scale-50 md:scale-75 lg:scale-100"
        width={600}
        height={400}
      />
    </footer>
  );
};

export default Footer;
