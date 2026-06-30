import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Optimizar importaciones para tree-shaking más agresivo
  experimental: {
    optimizePackageImports: ['lucide-react', 'ai', '@ai-sdk/react'],
  },
};

export default nextConfig;
