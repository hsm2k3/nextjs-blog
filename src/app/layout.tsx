import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexander Braverman',
  description: 'A nextjs project',
  icons: {
    icon: [
      { url: '/alex.svg', type: 'image/svg+xml' },
      { url: '/alex.ico' },
      { url: '/alex-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/alex-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/alex-16x16.png' },
  }
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
