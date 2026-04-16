import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 65, 75],
    minimumCacheTTL: 31536000,
  },
  headers: async () => [
    {
      source: '/bg/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/videos/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/icons/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
  redirects: async () => [
    {
      source: '/adline-industries',
      destination: '/despre-noi#adline',
      permanent: true,
    },
    {
      source: '/solicita-oferta',
      destination: '/solicita-prezentare',
      permanent: true,
    },
    {
      source: '/solutii/tamplarie-comerciala',
      destination: '/solutii/mobilier-industrial',
      permanent: true,
    },
  ],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
