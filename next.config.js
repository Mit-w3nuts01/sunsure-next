/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/sunsure/wp-content/uploads/**',
      },
    ],
  },
  // reactStrictMode: true,
}

module.exports = nextConfig
