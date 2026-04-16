import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import AuthorBox from '@/components/blog/author-box';
import { BlogContent } from '@/components/blog/blog-content';
import { BlogSidebar } from '@/components/blog/blog-sidebar';
import RelatedPosts from '@/components/blog/related-posts';
import TableOfContents from '@/components/blog/table-of-contents';
import { Button } from '@/components/ui/button';
import { getAllPosts, getAllSlugs, getPostBySlug, renderMarkdown } from '@/lib/blog';
import { calculateReadingTime, extractHeadings, getRelatedPosts } from '@/lib/blog-utils';

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

  const headings = extractHeadings(post.content);
  const readingTime = calculateReadingTime(post.content);
  const relatedPosts = getRelatedPosts(post, allPosts);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://pytha3d.ro${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'PYTHA Romania',
      logo: { '@type': 'ImageObject', url: 'https://pytha3d.ro/images/pytha-theoram-logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://pytha3d.ro/blog/${post.slug}` },
    wordCount: post.content.trim().split(/\s+/).length,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasa', item: 'https://pytha3d.ro' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://pytha3d.ro/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://pytha3d.ro/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb + Hero */}
      <section className="section-padding">
        <div className="container">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:opacity-80">Acasa</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:opacity-80">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#fff1f2] px-2.5 py-0.5 text-xs font-medium text-[#8a1820]">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{new Date(post.date).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>&middot;</span>
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="pb-15 md:pb-20 lg:pb-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-18">
          <div>
            <TableOfContents headings={headings} />
            <BlogContent html={html} />
            <AuthorBox />
            <RelatedPosts posts={relatedPosts} />
          </div>
          <BlogSidebar recentPosts={recentPosts} />
        </div>
      </section>

      {/* Blog footer CTA */}
      <section className="section-padding border-t">
        <div className="container text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Ti-a placut articolul?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-snug text-muted-foreground">
            Programează o prezentare și descoperă PYTHA în acțiune.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4.5">
            <Button asChild>
              <Link href="/solicita-prezentare">Programează prezentare</Link>
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
