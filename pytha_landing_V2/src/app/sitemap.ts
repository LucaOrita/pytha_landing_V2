import type { MetadataRoute } from 'next';

import { getAllSlugs } from '@/lib/blog';

const BASE_URL = 'https://pytha3d.ro';

const DOCS_SLUGS = ['', '/instalare', '/module', '/integrare-cnc', '/faq', '/api'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/despre-noi', '/module-pytha', '/blog', '/asistenta-tehnica',
    '/contact', '/adline-industries', '/solicita-oferta', '/solicita-prezentare',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const blogPosts = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const docsPages = DOCS_SLUGS.map((slug) => ({
    url: `${BASE_URL}/docs${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...blogPosts, ...docsPages];
}
