'use client';

import Link from 'next/link';
import SvgIcon from '@/components/images/SvgIcon';

const OnboardingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-color)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-[var(--bg-elevated)] shadow-xl rounded-lg text-center">
                <div>
                    <SvgIcon name="tool" size={64} className="mx-auto text-blue-600" useSystemTheme={true} />
                    <h2 className="mt-6 text-3xl font-extrabold text-[var(--text-primary)]">
                        Welcome Aboard (Almost)!
                    </h2>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Thank you for signing up!
                    </p>
                </div>
                <div className="rounded-md bg-[var(--bg-subtle)] p-4 border border-[var(--border-color)]">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <SvgIcon name="info" size={20} className="text-blue-400" useSystemTheme={true} />
                        </div>
                        <div className="ml-3 flex-1 md:flex md:justify-between">
                            <p className="text-sm text-[var(--text-primary)]">
                                Please note: Your account registration was a simulated process. This site is currently under active construction.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-md text-[var(--text-secondary)]">
                        We&#39;re working hard to bring you the full experience soon. Stay tuned for updates!
                    </p>
                </div>
                <div className="mt-5">
                    <Link
                        href="/"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Go to Homepage
                    </Link>
                </div>
                <div className="mt-3">
                    <Link
                        href="/login"
                        className="group relative w-full flex justify-center py-2 px-4 border border-[var(--border-color)] text-sm font-medium rounded-md text-[var(--text-primary)] bg-[var(--bg-input)] hover:bg-[var(--bg-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;