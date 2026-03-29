import Link from 'next/link';

import type { BlogPost } from '@/lib/blog';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#fff1f2] to-[#f8f8f8]" />
      <div className="flex flex-1 flex-col gap-3 p-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-[#fff1f2] px-2.5 py-0.5 text-xs font-medium text-[#8a1820]">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-bold leading-tight group-hover:text-[#8a1820]">
          {post.title}
        </h2>
        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
          {post.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-gray-400">
          <span>{new Date(post.date).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>&middot;</span>
          <span>{post.readTime} citire</span>
        </div>
      </div>
    </Link>
  );
}
