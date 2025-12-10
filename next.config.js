/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // Removed 'output: export' to enable API routes
  // If you need static export, you'll need to use a client-side email service instead
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
}

module.exports = nextConfig
