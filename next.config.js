/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['upload.wikimedia.org', 'logos-world.net', 'cdn.worldvectorlogo.com', 'www.vectorlogo.zone', 'www.amat.com'],
  },
}

module.exports = nextConfig 