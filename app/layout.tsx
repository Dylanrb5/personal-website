import './globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/next"

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lateef:wght@200;300;400;500;600;700;800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
