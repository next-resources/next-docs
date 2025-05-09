const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  output: 'export',            // 💥 required for static export
  trailingSlash: true,
  images: { unoptimized: true },
});
