/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // Removed as it's not recognized in this Next.js version
  },
  images: {
    domains: ['img.youtube.com'],
  },
}

module.exports = nextConfig 