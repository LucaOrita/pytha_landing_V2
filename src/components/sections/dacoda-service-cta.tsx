'use client';

import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const CARGO_TYPES = [
  'Rutier Standard',
  'ADR',
  'Frigorific',
  'Agabaritic',
  'Aerian',
  'Maritim',
];

export default function DacodaServiceCta({
  title = 'Ai marfă de transportat?',
}: {
  title?: string;
}) {
  const [form, setForm] = useState({
    origin: '',
    destination: '',
    cargoType: '',
    phone: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/cerere-oferta?origin=${encodeURIComponent(form.origin)}&destination=${encodeURIComponent(form.destination)}&type=${encodeURIComponent(form.cargoType)}&phone=${encodeURIComponent(form.phone)}`;
  };

  return (
    <section style={{ backgroundColor: 'var(--dacoda-navy)' }}>
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
              Completează formularul alăturat sau contactează-ne direct.
              Răspundem în maxim 2 ore în zilele lucrătoare.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+40785225446"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Phone className="text-dacoda-orange h-4 w-4" />
                +40 785 225 446
              </a>
              <a
                href="mailto:comercial@dacoda.ro"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail className="text-dacoda-orange h-4 w-4" />
                comercial@dacoda.ro
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Clock className="text-dacoda-orange h-4 w-4" />
                Luni–Vineri, 8:00–18:00
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="origin"
                placeholder="De unde pleacă marfa?"
                value={form.origin}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
              />
              <input
                type="text"
                name="destination"
                placeholder="Unde ajunge marfa?"
                value={form.destination}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
              />
              <select
                name="cargoType"
                aria-label="Tip transport"
                value={form.cargoType}
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
                style={form.cargoType ? { color: 'white' } : undefined}
              >
                <option value="" disabled>
                  Tip transport
                </option>
                {CARGO_TYPES.map((type) => (
                  <option key={type} value={type} className="text-gray-900">
                    {type}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Telefon de contact"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-[var(--dacoda-orange)] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-dacoda-orange hover:bg-dacoda-orange-dark flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-colors"
              >
                Trimite cererea
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-white/50">
              Sau scrie-ne direct pe{' '}
              <a
                href="https://wa.me/40785225446?text=Buna%20ziua%2C%20doresc%20o%20oferta%20pentru%20transport"
                target="_blank"
                rel="noreferrer"
                className="text-dacoda-orange underline underline-offset-2"
              >
                WhatsApp &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
