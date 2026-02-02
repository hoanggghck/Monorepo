import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  transpilePackages: [
    '@repo/utils',
    '@repo/types',
  ],
}

export default nextConfig
