import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SERVICII = [
  { name: 'Transport Rutier', href: '/servicii/transport-rutier' },
  { name: 'Transport ADR', href: '/servicii/transport-adr' },
  { name: 'Transport Frigorific', href: '/servicii/transport-frigorific' },
  { name: 'Transport Agabaritic', href: '/servicii/transport-agabaritic' },
  { name: 'Aerian & Maritim', href: '/servicii/aerian-maritim' },
];

const COMPANIE = [
  { name: 'Despre noi', href: '/despre-noi' },
  { name: 'Blog', href: '/blog' },
  { name: 'Cariere', href: '/cariere' },
  { name: 'Transportatori', href: '/transportatori' },
  { name: 'Contact', href: '/contact' },
];

const LEGAL = [
  { name: 'Politică confidențialitate', href: '/confidentialitate' },
  { name: 'Termeni și condiții', href: '/termeni' },
  { name: 'Politică cookies', href: '/cookies' },
];

export default function Footer() {
  return (
    <footer className="bg-dacoda-navy text-white">
      <div className="container px-4 py-12 lg:px-6 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo-dacoda.png"
                  alt="DACODA — Expediții Rutiere"
                  width={140}
                  height={59}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-1 text-sm font-medium text-white/80">
                Siguranță și Predictibilitate
              </p>
            </div>

            <p className="text-sm leading-relaxed text-white/60">
              Casă de expediții cu tradiție din 1993.
              <br />
              Capital 100% românesc.
            </p>

            <div className="space-y-2.5 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="text-dacoda-orange mt-0.5 h-4 w-4 shrink-0" />
                <span>Timișoara, România</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-dacoda-orange h-4 w-4 shrink-0" />
                <a
                  href="tel:+40785225446"
                  className="transition-colors hover:text-white"
                >
                  +40 785 225 446
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-dacoda-orange h-4 w-4 shrink-0" />
                <a
                  href="mailto:comercial@dacoda.ro"
                  className="transition-colors hover:text-white"
                >
                  comercial@dacoda.ro
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Servicii */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Servicii
            </h4>
            <ul className="space-y-3">
              {SERVICII.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Companie */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Companie
            </h4>
            <ul className="space-y-3">
              {COMPANIE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal & Contact */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-gray-400">
                Licență intermediere transport
              </li>
            </ul>

            <Link
              href="/cerere-oferta"
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark mt-6 inline-block rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-colors"
            >
              Cere ofertă
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; 2025 DACODA SRL &middot; Toate drepturile rezervate
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/confidentialitate"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Confidențialitate
              </Link>
              <Link
                href="/termeni"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Termeni
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
