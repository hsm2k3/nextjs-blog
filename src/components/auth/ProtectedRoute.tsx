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
        if (!isAuthenticated) {
            router.push(redirectPath);
        }
    }, [isAuthenticated, router, redirectPath]);

    // If not authenticated, return null to prevent flash of content
    if (!isAuthenticated) return null;

    // If authenticated, render the children
    return <>{children}</>;
}