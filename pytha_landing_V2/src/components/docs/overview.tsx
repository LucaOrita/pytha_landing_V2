'use client';

import { create } from '@orama/orama';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
  BookOpen,
  Cpu,
  FileText,
  Hash,
  HelpCircle,
  Package,
  Search,
  Wrench,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

const QUICK_START_SECTIONS = [
  {
    title: 'Instalare si Configurare',
    description:
      'Cerinte de sistem, pasi de instalare si configurare initiala PYTHA.',
    icon: Package,
    href: '/docs/instalare',
  },
  {
    title: 'Module Disponibile',
    description:
      'Prezentare generala a modulelor: Basic, Workshop, Nesting, CAM si altele.',
    icon: BookOpen,
    href: '/docs/module',
  },
  {
    title: 'Integrare CNC',
    description:
      'Cum conectezi PYTHA cu masinile CNC: WoodWop, bSolid, G-code.',
    icon: Cpu,
    href: '/docs/integrare-cnc',
  },
  {
    title: 'Intrebari Frecvente',
    description:
      'Raspunsuri la cele mai comune intrebari despre PYTHA si licente.',
    icon: HelpCircle,
    href: '/docs/faq',
  },
  {
    title: 'Referinta API si Export',
    description:
      'Formate de export 3D, CNC, CSV si XML — ghid complet.',
    icon: FileText,
    href: '/docs/api',
  },
  {
    title: 'Asistenta Tehnica',
    description:
      'Suport local in Romania, training si acord de service.',
    icon: Wrench,
    href: '/asistenta-tehnica',
  },
];

const POPULAR_SEARCHES = ['CNC', 'Nesting', 'Instalare', 'Export'];

function initOrama() {
  return create({
    schema: { _: 'string' },
    language: 'english',
  });
}

export function DocsOverview() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { search, setSearch, query } = useDocsSearch({
    type: 'static',
    initOrama,
  });

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        event.stopPropagation();
        setIsSearchExpanded(true);
      }
    };
    document.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, []);

  return (
    <div className="text-center">
      <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center gap-5">
        <div className="flex items-center rounded-full border p-1 text-xs">
          <span className="rounded-full bg-[#fff1f2] px-3 py-1 text-[#8a1820]">
            Documentatie
          </span>
          <span className="px-3">Ghiduri si referinte PYTHA 3D-CAD</span>
        </div>

        <h1 className="!mb-0 text-balance text-4xl leading-none md:text-5xl lg:text-6xl">
          Bine ai venit in <span className="text-gradient">PYTHA Docs</span>
        </h1>

        <p className="text-muted-foreground !my-0 leading-snug md:text-lg">
          Gaseste raspunsuri, ghiduri si referinte pentru PYTHA 3D-CAD
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl md:mt-12">
        <InlineSearchDialog
          search={search}
          setSearch={setSearch}
          query={query}
          isExpanded={isSearchExpanded}
          onExpand={() => setIsSearchExpanded(true)}
          onClose={() => setIsSearchExpanded(false)}
        />

        <div className="mt-3 flex items-center justify-center gap-3 text-start">
          <div className="text-sm text-gray-400">Cautari populare</div>
          <div className="flex justify-center gap-2">
            {POPULAR_SEARCHES.map((tag) => (
              <button
                key={tag}
                onClick={() => { setSearch(tag); setIsSearchExpanded(true); }}
                className="cursor-pointer rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="mx-auto mt-16 grid gap-4 text-start md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {QUICK_START_SECTIONS.map((section) => {
          const IconComponent = section.icon;
          return (
            <Link key={section.title} href={section.href} className="no-underline">
              <div className="group flex h-full cursor-pointer flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <IconComponent className="size-6 text-[#8a1820]" />
                <h3 className="text-lg font-bold">{section.title}</h3>
                <p className="text-sm leading-snug text-gray-500">
                  {section.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function InlineSearchDialog({
  search,
  setSearch,
  query,
  isExpanded,
  onExpand,
  onClose,
}: {
  search: string;
  setSearch: (value: string) => void;
  query: { data?: unknown[] | 'empty' };
  isExpanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <div className="relative text-start">
      <div className="relative h-12 w-full rounded-xl border border-gray-200 bg-white shadow-sm">
        <input
          ref={inputRef}
          placeholder="Cauta in documentatie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          onClick={() => !isExpanded && onExpand()}
          readOnly={!isExpanded}
          className="h-full w-full cursor-pointer rounded-xl bg-transparent ps-12 pr-16 text-sm outline-none placeholder:text-gray-400"
        />
        <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
        {isExpanded ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 !px-2"
          >
            <X className="size-4" />
          </Button>
        ) : (
          <kbd className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
            Ctrl K
          </kbd>
        )}
      </div>

      {isExpanded && search.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="p-2">
            {query.data && Array.isArray(query.data) && query.data.length > 0 ? (
              <div className="space-y-1">
                {query.data.map((result: unknown, index: number) => {
                  const item = result as {
                    id?: string;
                    url?: string;
                    content?: string;
                    type?: string;
                  };
                  const title = item.content || item.id?.split('/').pop()?.replace(/-/g, ' ') || 'Untitled';
                  const url = item.url || item.id || '#';
                  const isPage = item.type === 'page';
                  const displayTitle = isPage
                    ? title.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                    : title;

                  return (
                    <Link
                      key={index}
                      href={url}
                      className="flex items-start gap-3 rounded-lg p-3 no-underline transition-colors hover:bg-gray-50"
                      onClick={onClose}
                    >
                      <div className="mt-0.5 shrink-0 text-gray-400">
                        {isPage ? <FileText className="size-4" /> : <Hash className="size-4" />}
                      </div>
                      <span className="text-sm font-medium">{displayTitle}</span>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="py-8 text-center text-sm text-gray-400">
                Niciun rezultat pentru &ldquo;{search}&rdquo;
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
