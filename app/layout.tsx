import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Oxanium({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'File Altar',
  description: 'Convert like Magic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider> 
      </body>
    </html>
  )
}
