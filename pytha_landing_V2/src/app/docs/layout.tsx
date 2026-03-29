import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

import { source } from '@/lib/docs-source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        tree={source.pageTree}
        nav={{ title: 'PYTHA Docs' }}
        sidebar={{
          collapsible: false,
          banner: (
            <div className="relative h-8 w-fit rounded-full p-[1px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8a1820]/20 via-[#e71b29]/20 to-[#10a5ca]/20" />
              <div className="relative flex h-full items-center rounded-full border border-gray-200/50 text-xs backdrop-blur-sm">
                <span className="flex h-full items-center justify-center rounded-full bg-[#fff1f2] px-3 text-[11px] font-medium text-[#8a1820]">
                  Docs
                </span>
                <span className="flex h-full items-center px-3 text-gray-500">
                  Ghiduri PYTHA 3D-CAD
                </span>
              </div>
            </div>
          ),
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
