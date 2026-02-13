import './globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/next"
import { Lateef } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Dylan RB',
  description: 'Dylan\'s personal website',
}

const lateef = Lateef({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['arabic'],
  variable: '--my-font', // This creates the hook for CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lateef.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
