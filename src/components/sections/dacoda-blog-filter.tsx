'use client';

import * as React from 'react';

import BlogCard, { type BlogCardProps } from '@/components/ui/blog-card';

const CATEGORIES = [
  'Toate',
  'Ghiduri practice',
  'Rute',
  'Legislație',
  'Transport special',
];

const PER_PAGE = 6;

export default function DacodaBlogFilter({
  posts,
}: {
  posts: Omit<BlogCardProps, 'imagePlaceholderColor'>[];
}) {
  const [activeCategory, setActiveCategory] = React.useState('Toate');
  const [page, setPage] = React.useState(1);

  React.useEffect(() => setPage(1), [activeCategory]);

  const filtered =
    activeCategory === 'Toate'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  return (
    <section className="bg-white">
      <div className="container px-4 py-10 lg:px-6 lg:py-16">
        {/* Category pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-dacoda-orange text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {pageItems.length === 0 ? (
          <p className="py-12 text-center text-gray-500">
            Niciun articol în această categorie.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Pagina {page} din {totalPages}
            </p>
            <div className="flex gap-3">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40"
              >
                Anterior
              </button>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="bg-dacoda-orange rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-40"
              >
                Următorul
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
