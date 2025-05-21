// src/app/(sidebar)/login/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
    const redirectUrl = '/prologue';
    const router = useRouter();

    // Check for existing auth token on page load
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            router.push(redirectUrl);
        }
    }, [router]);

    return (
        <AuthLayout>
            <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-sm">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">Welcome back</h2>
                    <p className="mt-1 text-[var(--text-secondary)]">Sign in to your account</p>
                </div>

                <LoginForm />
            </div>
        </AuthLayout>
    );
};

export default LoginPage;