import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'BioQuery Docs',
    template: '%s – BioQuery Docs'
  },
  description: 'Natural language queries for cancer genomics research',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'BioQuery Documentation',
    description: 'Natural language queries for cancer genomics research',
  }
}

const banner = (
  <Banner storageKey="bioquery-beta-banner">
    🧬 BioQuery is in beta. We&apos;d love your feedback!
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700 }}>
        Bio<span style={{ color: '#2563eb' }}>Query</span> Docs
      </span>
    }
    projectLink="https://github.com/BioQuery-io/bioquery"
  />
)

const footer = (
  <Footer>
    © {new Date().getFullYear()} BioQuery. All rights reserved.
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/BioQuery-io/bioquery-docs/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
