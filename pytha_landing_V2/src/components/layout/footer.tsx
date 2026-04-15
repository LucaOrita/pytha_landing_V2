import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/navigation';

const QUICK_LINKS = [
  { label: 'Acasă', href: '/' },
  { label: 'Prețuri', href: '/preturi' },
  { label: 'Despre noi', href: '/despre-noi' },
  { label: 'Asistență tehnică', href: '/asistenta-tehnica' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const MODULE_LINKS = [
  { label: 'Pachet de Bază', href: '/module-pytha#modul-basic' },
  { label: 'Generatoare', href: '/module-pytha#modul-generators' },
  { label: 'Workshop', href: '/module-pytha#modul-workshop' },
  { label: 'Parts List', href: '/module-pytha#modul-parts-list' },
  { label: 'Parametrizare', href: '/module-pytha#modul-parametrics' },
  { label: 'Biblioteca', href: '/module-pytha#modul-library' },
  { label: 'Freeform', href: '/module-pytha#modul-freeform' },
  { label: 'Nesting', href: '/module-pytha#modul-nesting' },
  { label: 'Interfața CAM', href: '/module-pytha#modul-cam' },
  { label: 'RadioLab', href: '/module-pytha#modul-radiolab' },
];

const SOLUTION_LINKS = [
  { label: 'Mobilier la comandă', href: '/solutii/mobilier-la-comanda' },
  { label: 'Mobilier industrial', href: '/solutii/mobilier-industrial' },
  { label: 'Mobilier de serie', href: '/solutii/mobilier-de-serie' },
  { label: 'Design interior', href: '/solutii/design-interior' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a14] text-white">
      {/* CTA Section */}
      <div className="container py-16 text-center md:py-20">
        <div className="mb-12 border-b border-white/10 pb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Pregătit să digitalizezi{' '}
            <span className="text-[#8a1820]">atelierul?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/60">
            Descoperă cum PYTHA poate transforma fluxul tău de producție,
            de la proiectare 3D până la piesa finisată.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/solicita-prezentare">Solicită demo gratuit</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/preturi">Vezi prețurile</Link>
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mx-auto mb-12 max-w-md">
          <h3 className="mb-3 text-lg font-semibold">
            Abonează-te la newsletter
          </h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Introdu emailul tău"
              disabled
              className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white opacity-50 placeholder:text-white/40"
            />
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-[#8a1820] p-3 opacity-50"
              aria-label="Trimite"
            >
              <Send className="size-4 text-white" />
            </button>
          </form>
          <p className="mt-2 text-xs text-white/30">În curând disponibil</p>
        </div>
      </div>

      {/* Grid 5 columns */}
      <div className="container pb-12">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/pytha-logo.png"
              alt="PYTHA"
              width={320}
              height={80}
              className="mb-4 w-48"
            />
            <p className="mt-2 text-sm text-white/50">
              Distribuit în România de{' '}
              <a
                href="https://adlineindustries.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/70"
              >
                Adline Industries
              </a>
            </p>
          </div>

          {/* Linkuri rapide */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">Linkuri</h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Module */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">Module</h3>
            <ul className="space-y-2 text-sm">
              {MODULE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluții pe industrie */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">Soluții</h3>
            <ul className="space-y-2 text-sm">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-sm">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">Contact</h3>
            <a
              href="tel:+40742065376"
              className="flex items-center gap-2 text-white/50 transition-colors hover:text-white"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8a1820]">
                <Phone className="size-3" />
              </div>
              +40 742 065 376
            </a>
            <a
              href="tel:+40742065893"
              className="flex items-center gap-2 text-white/50 transition-colors hover:text-white"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8a1820]">
                <Phone className="size-3" />
              </div>
              +40 742 065 893
            </a>
            <a
              href="mailto:pytha@adlineindustries.ro"
              className="flex items-center gap-2 text-white/50 transition-colors hover:text-white"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8a1820]">
                <Mail className="size-3" />
              </div>
              pytha@adlineindustries.ro
            </a>
            <div className="flex items-center gap-2 text-white/50">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8a1820]">
                <MapPin className="size-3" />
              </div>
              Bd. Metalurgiei 99-99B, București
            </div>
          </div>
        </div>

        {/* Social + Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Image
                  src={`/icons/${link.icon}-logo.svg`}
                  alt={link.name}
                  width={20}
                  height={20}
                  className="size-5 opacity-60 transition-opacity hover:opacity-100"
                />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <Link
              href="/termeni-si-conditii"
              className="transition-colors hover:text-white/70"
            >
              Termeni și condiții
            </Link>
            <Link
              href="/politica-confidentialitate"
              className="transition-colors hover:text-white/70"
            >
              Politica de confidențialitate
            </Link>
            <span>
              &copy; {new Date().getFullYear()} PYTHA România. Adline Industries SRL.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
