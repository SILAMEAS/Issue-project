/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  server: {
    port: process.env.PORT || 3000,
  },
};

module.exports = nextConfig;
