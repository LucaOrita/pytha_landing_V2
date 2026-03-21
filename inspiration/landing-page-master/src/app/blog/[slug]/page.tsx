import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical';
import {
  JSXConvertersFunction,
  RichText,
} from '@payloadcms/richtext-lexical/react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { BlogCard, EnhancedBlogPost } from '@/app/blog/blog-client';
import { Cta5, Cta5Props } from '@/components/cta5';
import Table1, { Table1Props } from '@/components/table-advanced-3';
import { getBlogBySlug } from '@/lib/blog';
import { calculateReadTime } from '@/lib/read-time';

import { AnimatedHeroImage } from './animated-hero-image';
import { Metadata } from 'next';

// export async function generateStaticParams() {
//   const slugs = getBlogSlugs();
//   return slugs.map((slug) => ({
//     slug: slug.replace(/\.mdx$/, ''),
//   }));
// }

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draft?: string }>;
}


export async function generateMetadata({params}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogBySlug((await params).slug, false);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage.url,
          alt: post.title,
        },
      ],
    },
    authors: [
      {
        name: 'Echipa Doco',
        url: 'https://doco.ro'
      }
    ]
  };
}

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<Cta5Props>
  | SerializedBlockNode<Table1Props>;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => {
  return {
    ...defaultConverters,
    blocks: {
      'cta-5': ({ node }: { node: SerializedBlockNode<Cta5Props> }) => {
        return (
          <Cta5
            title={node.fields.title}
            buttonLink={node.fields.buttonLink}
            buttonText={node.fields.buttonText}
            description={node.fields.description}
            image={node.fields.image}
          />
        );
      },
      'table-1': ({ node }: { node: SerializedBlockNode<Table1Props> }) => {
        return <Table1 headers={node.fields.headers} rows={node.fields.rows} />;
      },
    },
  };
};

export default async function BlogPostPage({
  params,
  searchParams,
}: BlogPostPageProps) {
  const { slug } = await params;
  const { draft } = await searchParams;
  const post = await getBlogBySlug(slug, draft === 'true');

  // Get related posts
  const relatedPosts = post.related?.slice(0, 3) ?? [];

  const readTime = calculateReadTime(post.plainContent);

  return (
    <div className="section-padding container">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/blog"
            className="group text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            înapoi la Blog
          </Link>

          {/* Title and Description */}
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground mb-8 text-lg md:text-xl">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="">
          <AnimatedHeroImage
            src={post.featuredImage.url}
            alt={post.title}
            slug={post.slug}
          />
        </div>

        {/* Author Information */}
        <div className="mt-8 mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* <div className="relative size-14 overflow-hidden rounded-full">
              <Image
                src={post.author.image}
                alt={post.author.email}
                fill
                className="object-cover"
              />
            </div> */}
            <div>
              {/* <div className="text-foreground text-2xl font-semibold">
                {post.author.email}
              </div> */}
              <div className="">
                {new Date(post.createdAt).toLocaleDateString('en-GB', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                · {readTime}
              </div>
            </div>
          </div>

          {/* Social Share Icons */}
          {/* <div className="bg-background border-input [&_*]:border-input grid grid-cols-3 items-center divide-x rounded-sm border shadow-sm">
            <Link
              href={post.author.facebookUrl}
              className="flex items-center justify-center px-3 py-2.5 md:px-5"
            >
              <Facebook className="size-4 shrink-0 md:size-5" />
            </Link>
            <Link
              href={post.author.twitterUrl}
              className="flex items-center justify-center px-3 py-2.5 md:px-5"
            >
              <Twitter className="size-4 shrink-0 md:size-5" />
            </Link>
            <Link
              href={post.author.linkedinUrl}
              className="flex items-center justify-center px-3 py-2.5 md:px-5"
            >
              <MessageCircle className="size-4 shrink-0 md:size-5" />
            </Link>
          </div> */}
        </div>

        {/* Article Content */}
        <article className="">
          {/* <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} /> */}
          <RichText
            data={post.content}
            converters={jsxConverters}
            className="prose lg:prose-lg prose-headings:font-weight-display dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed prose-img:rounded-xl prose-img:shadow-sm prose-a:text-primary prose-a:no-underline hover:prose-a:underline mx-auto max-w-none"
          />
        </article>
      </div>

      {/* Articole similare */}
      {relatedPosts.length > 0 && (
        <section className="mt-20 lg:mt-24">
          <h2 className="text-4xl tracking-tight lg:text-5xl">
            Articole similare
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => {
              const enhancedPost: EnhancedBlogPost = {
                ...relatedPost,
                mainCategory: relatedPost.categories?.[0]?.name || 'General',
                readTime: calculateReadTime(relatedPost.plainContent),
              };

              return (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block h-full"
                >
                  <BlogCard post={enhancedPost} />
                </Link>
              );
            })}
          </div>
        </section>
      )}
      {/* <RefreshRouteOnSave /> */}
    </div>
  );
}
