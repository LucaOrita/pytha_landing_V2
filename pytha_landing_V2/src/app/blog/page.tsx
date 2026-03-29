import type { Metadata } from 'next';

import { BlogCard } from '@/components/blog/blog-card';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Digitalizare productie mobilier',
  description:
    'Ghiduri, comparatii si resurse despre proiectare 3D mobilier, digitalizare atelier, CAD/CAM si optimizare productie cu PYTHA.',
  openGraph: { title: 'Blog PYTHA Romania — Digitalizare productie mobilier', type: 'website' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
          <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xxl">
            Blog — <span className="text-gradient">Digitalizare si productie</span>
          </h1>
          <p className="mx-auto max-w-2xl leading-snug text-gray-500 md:text-lg lg:text-xl">
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
