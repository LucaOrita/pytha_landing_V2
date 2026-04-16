interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Cuprins" className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Cuprins</h2>
      <ol className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${h.id}`}
              className="text-sm text-gray-600 transition-colors hover:text-[#8a1820]"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
