import './globals.css'
import type { Metadata } from 'next'
// Remove Google Fonts dependency to fix build issues
// import { Inter } from 'next/font/google'
import { Providers } from './providers'

// Use system fonts instead of Google Fonts to avoid network dependency issues
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'P2P Financial NFT Barter Exchange',
  description: 'A decentralized platform for trading Financial NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 