import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';

const QUICK_LINKS = [
  { label: 'Acasa', href: '/' },
  { label: 'Solutii PYTHA', href: '/module-pytha' },
  { label: 'Despre noi', href: '/despre-noi' },
  { label: 'Asistenta tehnica', href: '/asistenta-tehnica' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_PLATFORMS = ['facebook', 'linkedin', 'instagram', 'youtube'];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a14] text-white">
      {/* CTA Section */}
      <div className="container py-16 text-center md:py-20">
        <div className="mb-12 border-b border-white/10 pb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Pregatit sa digitalizezi{' '}
            <span className="text-gradient">atelierul?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/60">
            Descopera cum PYTHA poate transforma fluxul tau de productie — de la
            proiectare 3D pana la piesa finisata.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/solicita-oferta">Solicita oferta</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/solicita-prezentare">Programeaza prezentare</Link>
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mx-auto mb-12 max-w-md">
          <h3 className="mb-3 text-lg font-semibold">
            Aboneaza-te la newsletter
          </h3>
          <form
            className="flex gap-2"
            onSubmit={undefined}
          >
            <input
              type="email"
              placeholder="Introdu emailul tau"
              className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#8a1820] p-3 transition-colors hover:bg-[#a1131d]"
              aria-label="Trimite"
            >
              <Send className="size-4 text-white" />
            </button>
          </form>
        </div>
      </div>

      {/* Grid 3 columns */}
      <div className="container pb-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Branding */}
          <div>
            <Image
              src="/images/pytha-logo.png"
              alt="PYTHA"
              width={320}
              height={80}
              className="mb-4 w-64"
            />
            <p className="mb-2 text-sm text-white/50">Solutie oferita de</p>
            <Image
              src="/images/logo-adline-min.png"
              alt="AdLine Industries"
              width={160}
              height={40}
              className="w-32"
            />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Linkuri</h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-sm">
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <a
              href="tel:+40742065376"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-[#8a1820]">
                <Phone className="size-3.5" />
              </div>
              +40 742 065 376
            </a>
            <a
              href="tel:+40742065893"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-[#8a1820]">
                <Phone className="size-3.5" />
              </div>
              +40 742 065 893
            </a>
            <a
              href="mailto:pytha@adlineindustries.ro"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-[#8a1820]">
                <Mail className="size-3.5" />
              </div>
              pytha@adlineindustries.ro
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <div className="flex size-8 items-center justify-center rounded-full bg-[#8a1820]">
                <MapPin className="size-3.5" />
              </div>
              Bd. Metalurgiei 99-99B, Bucuresti
            </div>
          </div>
        </div>

        {/* Social + Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-4">
            {SOCIAL_PLATFORMS.map((platform) => (
              <Image
                key={platform}
                src={`/icons/${platform}-logo.svg`}
                alt={platform}
                width={20}
                height={20}
                className="size-5 cursor-pointer opacity-60 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <Link
              href="/termeni"
              className="transition-colors hover:text-white/70"
            >
              Termeni si conditii
            </Link>
            <Link
              href="/confidentialitate"
              className="transition-colors hover:text-white/70"
            >
              Politica de confidentialitate
            </Link>
            <span>
              &copy; {new Date().getFullYear()} PYTHA Romania — AdLine
              Industries
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
