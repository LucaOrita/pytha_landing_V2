import { getAllBlogs, getAllCategories } from '@/lib/blog';
import { calculateReadTime } from '@/lib/read-time';

import BlogClient from './blog-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog Doco - Verificare CMR și documente de transport'
  },
  description: 'Știri, analize și ghiduri despre verificarea CMR-urilor și a documentelor de transport: fraude, furturi, tendințe din logistică și bune practici operaționale.'
}

export default async function BlogPage() {
  // Get all blog posts on the server side
  const allBlogPosts = await getAllBlogs();

  // Add category and readTime to posts, then sort by newest first
  const enhancedBlogPosts = allBlogPosts
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
    <BlogClient
      posts={enhancedBlogPosts}
      categories={[{ name: 'Toate', slug: 'view-all' }, ...categories]}
    />
  );
}
