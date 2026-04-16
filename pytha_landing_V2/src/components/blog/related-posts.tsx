import Image from 'next/image';
import Link from 'next/link';

import type { BlogPost } from '@/lib/blog';

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="mb-6 text-2xl font-bold">Articole similare</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={50}
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold leading-snug group-hover:text-[#8a1820]">
                {post.title}
              </h3>
              <p className="mt-1 text-xs text-gray-400">{post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
