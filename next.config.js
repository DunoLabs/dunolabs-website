/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = nextConfig;

module.exports = {
  // ...
  async rewrites() {
    return [
      {
        source: "/fonts/:slug*",
        destination: "/fonts/:slug*",
      },
    ];
  },
};

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

