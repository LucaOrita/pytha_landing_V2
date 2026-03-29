import Link from 'next/link';

import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/blog';

export function BlogSidebar({ recentPosts }: { recentPosts: BlogPost[] }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start">
      {/* CTA Mini */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
        <h3 className="font-bold">Vrei sa vezi PYTHA in actiune?</h3>
        <p className="mt-2 text-sm leading-snug text-gray-500">
          Programeaza o prezentare gratuita de 15 minute.
        </p>
        <Button size="sm" className="mt-4 w-full" asChild>
          <Link href="/solicita-prezentare">Solicita demo</Link>
        </Button>
      </div>

      {/* Recent articles */}
      {recentPosts.length > 0 && (
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
          <h3 className="mb-4 font-bold">Articole recente</h3>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block text-sm leading-snug text-[#8a1820] transition-opacity hover:opacity-80"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
