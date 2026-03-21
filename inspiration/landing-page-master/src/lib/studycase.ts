import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';

import sdk from './payload';
import { Category } from './blog';

export type Author = {
  email: string;
};

export type Studycase = {
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
  related?: Studycase[];
};
// export function getBlogSlugs(): string[] {
//   return fs.readdirSync(BLOGS_PATH).filter((path) => /\.mdx?$/.test(path));
// }

export async function getStudycaseBySlug(
  slug: string,
  draft = false,
): Promise<Studycase> {
  const data = await sdk.find({
    collection: 'studycases',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft,
  });

  // TODO: Fix this later
  return data.docs[0] as unknown as Studycase;
}

export async function getAllStudycases(limit?: number): Promise<Studycase[]> {
  const data = await sdk.find({
    collection: 'studycases',
    depth: 2,
    limit: limit ?? undefined,
  });

  return data.docs as unknown as Studycase[];
}
