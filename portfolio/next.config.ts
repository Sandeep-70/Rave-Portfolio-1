import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  allowedDevOrigins: [
    '*.replit.dev',
    '*.repl.co',
    '127.0.0.1',
    'localhost',
  ],
};

export default nextConfig;
