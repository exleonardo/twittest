import type { Metadata } from 'next'

import { Provider } from '@/store/provider'
import { Inter } from 'next/font/google'

import '@/styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Blog for developers',
  title: 'Twit App',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
