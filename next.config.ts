import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
  search: { codeblocks: false }
})

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/next-docs',
  assetPrefix: '/next-docs',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
}

export default withNextra(nextConfig)
