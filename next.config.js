// next.config.js
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

const nextConfig = {
  output: 'export',
  basePath: "/next-docs",
  // optioneel, alleen als je mdx-components gebruikt
  images: {
    unoptimized: true,
  },
}

export default withNextra(nextConfig)