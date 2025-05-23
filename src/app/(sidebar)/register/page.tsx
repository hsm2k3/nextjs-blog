'use client';

import {useState} from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from './_components/RegisterForm';
import AuthInfo from './_components/AuthInfo';
import AuthToggle from './_components/AuthToggle';

const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AuthLayout>
            <div className="w-full max-w-md mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[var(--text-primary)]">Create an Account</h1>
                    <p className="mt-2 text-[var(--text-secondary)]">Join our community to start creating and sharing
                        content</p>
                </div>

                <RegisterForm isLoading={isLoading} setIsLoading={setIsLoading}/>
                <AuthInfo/>
                <AuthToggle type="register"/>
            </div>
        </AuthLayout>
    );
};

export default RegisterPage;