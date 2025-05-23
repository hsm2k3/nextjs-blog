'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';

interface ProtectedRouteProps {
    children: ReactNode;
    redirectPath?: string;
}

export default function ProtectedRoute({
                                           children,
                                           redirectPath = '/prologue'
                                       }: ProtectedRouteProps) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        console.log("Auth state:", { isAuthenticated });
        if (!isAuthenticated) {
            console.log("Redirecting to:", redirectPath);
            router.push(redirectPath);
        }
    }, [isAuthenticated, router, redirectPath]);

    // If not authenticated, return null to prevent flash of content
    if (!isAuthenticated) return null;

    // If authenticated, render the children
    return <>{children}</>;
}