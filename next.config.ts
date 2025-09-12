import { env } from '@/env';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: env.CLOUDFLARE_PUBLIC_URL,
      },
    ],
  },
};

export default nextConfig;
