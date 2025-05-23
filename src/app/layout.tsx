import './globals.css'
import './styles/css/typography.css'
import {Inter} from 'next/font/google'
import {ReduxProvider} from "@/lib/redux";
import {AuthProvider} from '@/components/auth/AuthContext';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Alexander Braverman',
    description: 'A nextjs project',
    icons: {
        icon: [
            {url: '/alex.svg', type: 'image/svg+xml'},
            {url: '/alex.ico'},
            {url: '/alex-16x16.png', sizes: '16x16', type: 'image/png'},
            {url: '/alex-32x32.png', sizes: '32x32', type: 'image/png'},
        ],
        apple: {url: '/alex-16x16.png'},
    },
    colorScheme: 'dark light', // Support both schemes
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="light dark:dark">
        <body className={inter.className}>
        <AuthProvider>
            <ReduxProvider>{children}</ReduxProvider>
        </AuthProvider>
        </body>
        </html>
    )
}
