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

// todo: OLD
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Your configs goes here.
//   // TODO: This was to prevent window.close call header.
//   // async headers() {
//   //   return [
//   //     {
//   //       source: "/(.*)",
//   //       headers: [
//   //         {
//   //           key: "Cross-Origin-Opener-Policy",
//   //           value: "unsafe-none",
//   //         },
//   //         {
//   //           key: "Cross-Origin-Embedder-Policy",
//   //           value: "unsafe-none",
//   //         }
//   //       ]
//   //     }
//   //   ]
//   // }
// }

// export default nextConfig;
