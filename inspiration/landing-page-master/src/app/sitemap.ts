import { getAllBlogs } from '@/lib/blog';
import { getAllStudycases } from '@/lib/studycase';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://doco.ro';

  // Static routes
  const routes = [
    '',
    '/contact',
    '/faq',
    '/pricing',
    '/studycase',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog posts (example - update with your actual data source)
  const blogPosts = await getAllBlogs();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic study cases (example - update with your actual data source)
  const studyCases = await getAllStudycases();
  const studyCaseRoutes = studyCases.map((studyCase) => ({
    url: `${baseUrl}/studycase/${studyCase.slug}`,
    lastModified: new Date(studyCase.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes, ...studyCaseRoutes];
}
