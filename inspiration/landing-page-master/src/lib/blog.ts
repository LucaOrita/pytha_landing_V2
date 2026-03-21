import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';

import sdk from './payload';

export type Author = {
  email: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
  // author: Author;
  categories: Category[];
  content: SerializedEditorState<SerializedLexicalNode>;
  plainContent: string;
  featuredImage: {
    url: string;
    width: number;
    height: number;
  };
  related?: BlogPost[];
};

export type Category = {
  name: string;
  slug: string;
};

// export function getBlogSlugs(): string[] {
//   return fs.readdirSync(BLOGS_PATH).filter((path) => /\.mdx?$/.test(path));
// }

export async function getBlogBySlug(
  slug: string,
  draft = false,
): Promise<BlogPost> {
  const data = await sdk.find({
    collection: 'blogs',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft,
  });

  // TODO: Fix this later
  return data.docs[0] as unknown as BlogPost;
}

export async function getAllBlogs(limit?: number): Promise<BlogPost[]> {
  const data = await sdk.find({
    collection: 'blogs',
    depth: 2,
    limit: limit ?? undefined,
  });

  return data.docs as unknown as BlogPost[];
}

export async function getAllCategories(): Promise<Category[]> {
  const data = await sdk.find({
    collection: 'categories',
    limit: 100,
  });

  return data.docs as unknown as Category[];
}
