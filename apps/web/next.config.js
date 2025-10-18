/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mono/ui', '@mono/types', '@mono/core'],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
