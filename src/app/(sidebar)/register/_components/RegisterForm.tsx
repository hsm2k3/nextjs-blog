'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SvgIcon from '@/components/images/SvgIcon';
import PasswordStrengthMeter from './PasswordStrengthMeter';

interface RegisterFormProps {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const RegisterForm = ({ isLoading, setIsLoading }: RegisterFormProps) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when field is edited
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // Mock registration - replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Redirect to onboarding or dashboard after successful registration
            router.push('/onboarding');
        } catch (error) {
            console.error('Registration error:', error);
            setErrors({ form: 'Failed to register. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Full Name
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SvgIcon name="user" size={18} useSystemTheme={true} />
                    </div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-500' : 'border-[var(--border-color)]'} rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]`}
                        placeholder="John Doe"
                        disabled={isLoading}
                    />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

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
                        autoComplete="off"
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
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-[var(--border-color)]'} rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]`}
                        placeholder="••••••••"
                        disabled={isLoading}
                    />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                {formData.password && <PasswordStrengthMeter password={formData.password} />}
            </div>

            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Confirm Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SvgIcon name="lock" size={18} useSystemTheme={true} />
                    </div>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="off"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-[var(--border-color)]'} rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]`}
                        placeholder="••••••••"
                        disabled={isLoading}
                    />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        disabled={isLoading}
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="agreeToTerms" className="font-medium text-[var(--text-secondary)]">
                        I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                    {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
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
            Creating account...
          </span>
                ) : (
                    'Create Account'
                )}
            </button>
        </form>
    );
};

export default RegisterForm;