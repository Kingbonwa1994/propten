import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TendaHaven | Real Estate Expert',
  description: 'The best Experience of finding a new home in SA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >        
        
        <main className="min-h-screen p-4 md:p-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

