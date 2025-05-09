import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Image 
        src="https://cdn.discordapp.com/attachments/1365267177380249710/1365398501248335933/nextjs-icon-dark-background_1.png?ex=681e4d72&is=681cfbf2&hm=3ef41db99e530caef7e461262853b23078a876d1f096cf2e0441206ec48dc12b&" 
        alt="Logo" 
        className="h-8 w-8" 
        height={32}
        width={32}
      />
      <span>Next Extended</span>
    </div>
  ),
  project: {
    link: 'https://github.com/next-resources/next-docs',
  },
  chat: {
    link: 'https://discord.nextextended.com',
  },
  docsRepositoryBase: 'https://github.com/next-resources/next-docs',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
