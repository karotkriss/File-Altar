/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    // Disable SWC compiler
    removeConsole: false,
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig