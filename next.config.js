/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  images: {
    domains: ['github.com'],
    loader: 'akamai',
    path: '',
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
