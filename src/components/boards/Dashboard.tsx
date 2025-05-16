'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Define the props we'll pass to the DashboardLayout wrapper
interface DashboardLayoutProps {
    user: string;
    children: React.ReactNode;
}

// Dynamically import the Sidebar with no SSR to ensure it's only loaded when needed
const Sidebar = dynamic(() => import('@/components/bars/Sidebar'), {
    ssr: false,
    loading: () => <div className="h-screen w-16 bg-gray-100 animate-pulse"></div>
});

export default function DashboardLayout({ user, children }: DashboardLayoutProps) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    // Ensure component only renders on client-side to avoid hydration issues
    useEffect(() => {
        setMounted(true);
    }, []);

    // Only show the sidebar if not on the root path and component is mounted
    const showSidebar = mounted && pathname !== '/';

    if (!mounted) {
        return null; // Don't render anything during SSR
    }

    return (
        <div className="flex h-screen">
            {showSidebar && <Sidebar />}

            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}