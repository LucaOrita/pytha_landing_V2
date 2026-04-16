import type { Metadata } from 'next';

import { BlogCard } from '@/components/blog/blog-card';
import { getAllPosts } from '@/lib/blog';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog | PYTHA 3D-CAD Romania | Digitalizare Productie Mobilier',
  description:
    'Ghiduri, comparatii si resurse despre proiectare CAD 3D mobilier, digitalizare atelier, automatizare CNC si optimizare productie cu PYTHA.',
  openGraph: {
    title: 'Blog PYTHA 3D-CAD Romania | Digitalizare Productie Mobilier',
    description: 'Ghiduri si articole despre proiectare 3D, CAD/CAM, digitalizare productie si automatizare CNC pentru mobilier.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
          <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
            Blog · <span className="text-[#8a1820]">Digitalizare și producție</span>
          </h1>
          <p className="mx-auto max-w-2xl leading-snug text-muted-foreground md:text-lg lg:text-xl">
            Resurse, ghiduri si noutati din lumea proiectarii 3D si a productiei de mobilier.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:mt-16">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
