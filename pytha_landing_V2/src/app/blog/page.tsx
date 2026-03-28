import type { Metadata } from 'next';

import { BlogCard } from '@/components/blog/blog-card';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Digitalizare si productie mobilier',
  description:
    'Articole si resurse despre proiectare mobilier 3D, digitalizare atelier, CAD/CAM, optimizare productie si noutati PYTHA.',
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
          <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
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
