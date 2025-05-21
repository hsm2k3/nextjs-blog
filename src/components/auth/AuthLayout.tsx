import React from 'react';
import Link from 'next/link';
import SvgIcon from '@/components/images/SvgIcon';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const appName = 'Alex\'s Blog';

    return (
        <div className="min-h-screen flex flex-col bg-[var(--bg-main)]">
            <header className="py-4 px-6 border-b border-[var(--border-color)]">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <SvgIcon
                            name="alex"
                            size={32}
                            className="mr-2"
                            useSystemTheme={false}
                        />
                        <span className="text-xl font-bold text-[var(--text-primary)]">
                          {appName}
                        </span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </main>

            <footer className="py-4 px-6 border-t border-[var(--border-color)]">
                <div className="container mx-auto text-center text-sm text-[var(--text-secondary)]">
                    <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/terms" className="hover:text-[var(--text-primary)]">Terms</Link>
                        <Link href="/privacy" className="hover:text-[var(--text-primary)]">Privacy</Link>
                        <Link href="/help" className="hover:text-[var(--text-primary)]">Help</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AuthLayout;