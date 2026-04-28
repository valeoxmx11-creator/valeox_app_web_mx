import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { siteConfig } from '@/shared/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  title: {
    default: `VALEOX | ${siteConfig.description}`,
    template: '%s | VALEOX',
  },
  description: siteConfig.description,
  openGraph: {
    title: 'VALEOX',
    description: siteConfig.description,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
