/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')
const nextra = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/primitive',
        permanent: true,
      },
    ]
  }
}

module.exports = withNextra(nextConfig)