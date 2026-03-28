import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlogContent } from '@/components/blog/blog-content';
import { BlogSidebar } from '@/components/blog/blog-sidebar';
import { Button } from '@/components/ui/button';
import { getAllPosts, getAllSlugs, getPostBySlug, renderMarkdown } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Articol negasit' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);
  const allPosts = getAllPosts();
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'PYTHA Romania' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb + Hero */}
      <section className="section-padding">
        <div className="container">
          <nav className="text-muted-foreground mb-6 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="hover:opacity-80">Acasa</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:opacity-80">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-muted rounded-full px-2.5 py-0.5 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="text-muted-foreground flex items-center gap-3 text-sm">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{new Date(post.date).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>&middot;</span>
              <span>{post.readTime} citire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="pb-15 md:pb-20 lg:pb-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-18">
          <BlogContent html={html} />
          <BlogSidebar recentPosts={recentPosts} />
        </div>
      </section>

      {/* Blog footer CTA */}
      <section className="section-padding border-t">
        <div className="container text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Ti-a placut articolul?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg leading-snug">
            Programeaza o prezentare si descopera PYTHA in actiune.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4.5">
            <Button asChild>
              <Link href="/solicita-prezentare">Programeaza prezentare</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Inapoi la blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
