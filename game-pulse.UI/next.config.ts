const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})

const nextConfig = {
  reactStrictMode: true
}

module.exports = withPWA(nextConfig)
