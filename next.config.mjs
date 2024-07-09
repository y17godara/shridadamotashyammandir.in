/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
}

export default nextConfig
