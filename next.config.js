/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meju.eu.pythonanywhere.com',
        port: '',
        pathname: '/media/**'
      }
    ] */
    domains: ['127.0.0.1']
  }
}

module.exports = nextConfig
