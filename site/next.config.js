/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'k0m4n',
    description: 'k0m4n store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://k0m4n.github.io/kasm_registry',
    contactUrl: 'https://k0m4n.github.io',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
