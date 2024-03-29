import './globals.css'
import type { Metadata } from 'next'
import { Lateef } from 'next/font/google'

// const font = Lateef({ weight: "200", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dylan RB',
  description: 'Dylan\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
