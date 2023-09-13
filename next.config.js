/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com'],
  },
  experimental: {
    appDir: true,
  },
  // output: "export"
};

module.exports = nextConfig;
