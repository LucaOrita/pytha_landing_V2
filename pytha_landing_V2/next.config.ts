import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 65, 75],
  },
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
