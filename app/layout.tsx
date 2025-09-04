import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GasLite - Find Cheapest Gas Prices Near You',
  description: 'Save money on gas with real-time price updates from your community. Find the cheapest gas stations nearby with GasLite.',
  keywords: 'gas prices, cheap gas, fuel prices, gas stations, gasoline prices, diesel prices, gas near me',
  authors: [{ name: 'GasLite Team' }],
  openGraph: {
    title: 'GasLite - Find Cheapest Gas Prices Near You',
    description: 'Save money on gas with real-time price updates from your community.',
    url: 'https://gaslite.app',
    siteName: 'GasLite',
    images: [
      {
        url: 'https://gaslite.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GasLite - Find Cheapest Gas Prices Near You',
    description: 'Save money on gas with real-time price updates from your community.',
    images: ['https://gaslite.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/new-splash.png', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}