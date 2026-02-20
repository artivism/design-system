/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@artivism/tokens', '@artivism/ui'],
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
