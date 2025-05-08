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
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.js'
    }
  },
  images: {
    unoptimized: true,
  },
}

export default withNextra(nextConfig)