import type { Viewport } from 'next'

import '@/styles/globals.css'

const DEFAULT_TITLE = 'shift'

export const metadata = {
  manifest: '/manifest.json',
  description: 'Generated by create-t3-app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
  title: DEFAULT_TITLE,
}

export const viewport: Viewport = {
  themeColor: '#193549',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='bg-cb-dark-blue text-cb-white flex min-h-screen flex-col'>
          {children}
        </div>
      </body>
    </html>
  )
}
