/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@artivism/tokens', '@artivism/ui'],
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
