/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meju.eu.pythonanywhere.com',
        port: '',
        pathname: '/media/**'
      }
    ]
    // domains: ['127.0.0.1']
    // domains: ['http://meju.eu.pythonanywhere.com/']
  }
}

module.exports = nextConfig
