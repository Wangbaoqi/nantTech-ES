/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')

const nextra = require('nextra')
const path = require('path')

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

  // webpack: (config, { isServer }) => {
  //   // 排除特定目录
  //   // config.module.rules.push({
  //   //   test: /\.txt$/,
  //   //   exclude: /node_modules/,
  //   // });
  //   // 如果你想排除整个目录，可以这样做
  //   // config.exclude = [path.resolve(__dirname, 'packages')];

  //   return config;
  // },
}

module.exports = withNextra(nextConfig)