import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TendaHaven | Real Estate Expert',
  description: 'The seamless way to find a new home in SA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      {children}
      </div> 
      </body>
    </html>
  )
}   

