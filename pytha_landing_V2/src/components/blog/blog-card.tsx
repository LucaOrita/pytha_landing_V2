import Link from 'next/link';

import type { BlogPost } from '@/lib/blog';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-card text-card-foreground group flex flex-col overflow-hidden rounded-md border shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="bg-muted aspect-[16/9] w-full" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="bg-muted rounded-full px-2.5 py-0.5 text-xs">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-accent-foreground text-lg font-bold leading-tight group-hover:underline">
          {post.title}
        </h2>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {post.description}
        </p>
        <div className="text-muted-foreground mt-auto flex items-center gap-3 pt-2 text-xs">
          <span>{new Date(post.date).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>&middot;</span>
          <span>{post.readTime} citire</span>
        </div>
      </div>
    </Link>
  );
}
