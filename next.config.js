import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
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
})