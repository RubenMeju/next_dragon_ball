/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    // domains: ['127.0.0.1']
    domains: ['http://meju.eu.pythonanywhere.com/']
  }
}

module.exports = nextConfig
