import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 65, 75],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
