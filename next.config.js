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
  // Additional options to fix runtime issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Disable telemetry and tracing to avoid permission issues
  generateBuildId: async () => {
    return Date.now().toString()
  },
}

module.exports = nextConfig
