/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for static export if needed
  output: 'standalone',
  // Experimental features
  experimental: {
    // Disable problematic features that might cause permission issues
    optimizeCss: false,
  },
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
