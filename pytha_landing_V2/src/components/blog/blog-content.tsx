import { cn } from '@/lib/utils';

export function BlogContent({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={cn('blog-content max-w-none', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
