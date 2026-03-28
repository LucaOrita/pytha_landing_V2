import Link from 'next/link';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/navigation';

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const props = { className, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true as const };
  switch (name) {
    case 'facebook':
      return (<svg {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>);
    case 'instagram':
      return (<svg {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>);
    case 'linkedin':
      return (<svg {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>);
    case 'youtube':
      return (<svg {...props}><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>);
    default:
      return null;
  }
}

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
                <SocialIcon name={link.icon} className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient SVG blob */}
      <svg
        className="absolute right-0 bottom-0 -z-10 origin-bottom-right scale-50 md:scale-75 lg:scale-100"
        xmlns="http://www.w3.org/2000/svg"
        width={600}
        height={400}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9D83E7" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D445E7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10CBF4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <ellipse cx="450" cy="350" rx="300" ry="200" fill="url(#footer-grad)" />
      </svg>
    </footer>
  );
};

export default Footer;
