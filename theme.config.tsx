import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.nextextended.com${asPath}`;
  const description = frontMatter.description || "Documentation for Next Extended's resources for FiveM/RedM";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/nexthub.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Next Extended';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://avatars.githubusercontent.com/u/209795011?s=64') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Next Extended
    </div>
  ),
  project: {
    link: 'https://github.com/next-resources/next-docs',
  },
  chat: {
    link: 'https://discord.nextextended.com',
  },
  docsRepositoryBase: 'https://github.com/next-resources/next-resources.github.io/blob/main',
  footer: {
    text: 'Next Extended',
  },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    // backToTop: true,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;