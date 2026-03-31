import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    // Allow images from assets folder
    unoptimized: false,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Ensure static assets are accessible
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
}

export default nextConfig

