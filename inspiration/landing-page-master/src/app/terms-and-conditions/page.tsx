import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { join } from 'path';

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-12 text-4xl font-semibold tracking-tight md:mb-16 md:text-5xl lg:text-6xl">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-12 mb-6 text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground/80 mb-6 max-w-4xl text-base leading-relaxed md:text-lg md:leading-loose">
      {children}
    </p>
  ),
  a: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 font-medium underline-offset-4 transition-colors hover:underline"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="text-muted-foreground/80 mb-8 max-w-4xl list-disc space-y-3 pl-6 text-base leading-relaxed md:text-lg md:leading-loose">
      {children}
    </ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="text-muted-foreground/80 marker:text-primary mb-8 max-w-4xl list-decimal space-y-3 pl-6 text-base leading-relaxed marker:font-semibold md:text-lg md:leading-loose">
      {children}
    </ol>
  ),
};

export const metadata = {
  title: 'Termeni și condiții',
  description: 'Citiți termenii și condițiile pentru utilizarea Doco.',
};

export default async function TermsOfService() {
  // Read the MDX file
  const filePath = join(
    process.cwd(),
    './src/app/terms-and-conditions/index.mdx',
  );
  const source = readFileSync(filePath, 'utf8');

  // Compile the MDX content
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        format: 'mdx',
      },
    },
    components,
  });

  return (
    <section className="section-padding bg-chart-4 text-justify">
      <div className="container">{content}</div>
    </section>
  );
}
