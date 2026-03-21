/**
 * Calculate read time based on word count
 * @param content - The markdown content to analyze
 * @returns Formatted read time string (e.g., "5 min read")
 */
export function calculateReadTime(content: string): string {
  // Remove markdown syntax and count words
  const cleanContent = content.trim();

  const words = cleanContent.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Average reading speed is 200-250 words per minute, using 225
  const readingSpeed = 225;
  const minutes = Math.ceil(wordCount / readingSpeed);

  return `${Math.max(1, minutes)} min read`;
}
