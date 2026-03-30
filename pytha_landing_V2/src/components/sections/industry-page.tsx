import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

interface Challenge {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Solution {
  module: string;
  title: string;
  description: string;
  href: string;
}

export interface IndustryPageProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  challenges: Challenge[];
  solutions: Solution[];
  heroImage: string;
  ctaText: string;
}

export default function IndustryPage({
  title,
  subtitle,
  breadcrumbLabel,
  challenges,
  solutions,
  heroImage,
  ctaText,
}: IndustryPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Acasa', href: '/' },
              { label: 'Solutii', href: '/module-pytha' },
              { label: breadcrumbLabel },
            ]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-18">
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-lg leading-snug text-gray-500">
                {subtitle}
              </p>
              <Button asChild>
                <Link href="/solicita-prezentare">Programeaza demo gratuit</Link>
              </Button>
            </div>
            <Image
              src={heroImage}
              alt={title}
              width={640}
              height={480}
              className="w-full rounded-2xl object-cover shadow-xl"
              quality={65}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Provocari pe care le <span className="text-[#8a1820]">cunosti</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-16">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
                    <Icon className="size-5 text-[#8a1820]" />
                  </div>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-sm leading-snug text-gray-500">{c.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-balance sm:text-center">
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Cum rezolva <span className="text-[#8a1820]">PYTHA</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:mt-16">
            {solutions.map((s) => (
              <Link
                key={s.module}
                href={s.href}
                className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="w-fit rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-semibold text-[#8a1820]">
                  {s.module}
                </span>
                <h3 className="text-lg font-bold group-hover:text-[#8a1820]">{s.title}</h3>
                <p className="text-sm leading-snug text-gray-500">{s.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Preturi de la 99€/luna.{' '}
              <Link href="/preturi" className="font-semibold text-[#8a1820] hover:underline">
                Vezi toate pachetele si preturile →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#8a1820] to-[#6d1319] py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {ctaText}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Programeaza o demonstratie gratuita de 15 minute. Fara obligatii.
          </p>
          <div className="mt-8">
            <Link
              href="/solicita-prezentare"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#8a1820] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Vreau o demonstratie gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
