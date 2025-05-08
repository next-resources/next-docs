// next.config.js
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

const nextConfig = {
  output: 'export',
  // optioneel, alleen als je mdx-components gebruikt
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.js'
    }
  }
}

export default withNextra(nextConfig)