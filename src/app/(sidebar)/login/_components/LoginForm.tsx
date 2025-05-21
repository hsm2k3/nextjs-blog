// src/app/(sidebar)/login/_components/LoginForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SvgIcon from '@/components/images/SvgIcon';

const LoginForm = () => {
    const redirectUrl = '/prologue';
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        form: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear errors when user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: '',
                form: ''
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // Mock API call with a timeout
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock successful authentication
            const mockToken = `mock_token_${Date.now()}`;
            const mockUser = {
                id: 'user123',
                name: 'John Doe',
                email: formData.email,
                role: 'user'
            };

            // Store in localStorage
            localStorage.setItem('authToken', mockToken);
            localStorage.setItem('user', JSON.stringify(mockUser));

            // Redirect to dashboard
            router.push(redirectUrl);
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                form: 'Invalid email or password. Please try again.'
            }));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SvgIcon name="email" size={18} useSystemTheme={true} />
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-[var(--border-color)]'} rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]`}
                        placeholder="you@example.com"
                        disabled={isLoading}
                    />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SvgIcon name="lock" size={18} useSystemTheme={true} />
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-[var(--border-color)]'} rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]`}
                        placeholder="••••••••"
                        disabled={isLoading}
                    />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        disabled={isLoading}
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-[var(--text-secondary)]">
                        Remember me
                    </label>
                </div>
                <div className="text-sm">
                    <Link href="/forgot-password" className="text-blue-600 hover:text-blue-500">
                        Forgot your password?
                    </Link>
                </div>
            </div>

            {errors.form && <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-600">{errors.form}</div>}

            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center">
                        <SvgIcon name="spinner" size={20} className="animate-spin mr-2" useSystemTheme={true} />
                        Signing in...
                    </span>
                ) : (
                    'Sign in'
                )}
            </button>

            <div className="mt-4 text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        Create account
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;