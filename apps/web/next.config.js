/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mono/ui', '@mono/types', '@mono/core'],
  images: { // images 설정 추가
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;