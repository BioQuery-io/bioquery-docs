import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>Bio<span style={{ color: '#2563eb' }}>Query</span> Docs</span>,
  project: {
    link: 'https://github.com/BioQuery-io/bioquery',
  },
  docsRepositoryBase: 'https://github.com/BioQuery-io/bioquery-docs/tree/main',
  footer: {
    text: '© 2024 BioQuery. All rights reserved.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BioQuery Documentation" />
      <meta property="og:description" content="Natural language queries for cancer genomics research" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 217, // Blue
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BioQuery Docs'
    }
  },
  banner: {
    key: 'beta-banner',
    text: '🧬 BioQuery is in beta. We\'d love your feedback!',
  },
}

export default config
