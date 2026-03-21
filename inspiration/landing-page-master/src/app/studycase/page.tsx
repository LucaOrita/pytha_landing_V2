import { getAllCategories } from '@/lib/blog';
import { calculateReadTime } from '@/lib/read-time';

import StudycaseClient from './studycase-client';
import { getAllStudycases } from '@/lib/studycase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Studii de caz Doco - Verificare CMR și documente de transport'
  },
  description: 'Descoperă cum companii de transport reduc fraudele, pierderile și erorile prin verificarea CMR-urilor și a documentelor de transport cu DOCO.'
}

export default async function StudycasePage() {
  // Get all blog posts on the server side
  const allStudycases = await getAllStudycases();

  // Add category and readTime to posts, then sort by newest first
  const enhancedStudycases = allStudycases
    .map((post) => ({
      ...post,
      mainCategory: post.categories?.[0]?.name || 'General',
      readTime: calculateReadTime(post.plainContent),
    }))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  const categories = await getAllCategories();

  return (
    <StudycaseClient
      posts={enhancedStudycases}
      categories={[{ name: 'Toate', slug: 'view-all' }, ...categories]}
    />
  );
}
