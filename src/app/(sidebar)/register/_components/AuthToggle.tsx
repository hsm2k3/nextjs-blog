import Link from 'next/link';

interface AuthToggleProps {
    type: 'login' | 'register';
}

const AuthToggle = ({ type }: AuthToggleProps) => {
    return (
        <div className="text-center">
            <p className="text-sm text-[var(--text-secondary)]">
                {type === 'register' ? (
                    <>
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-blue-600 hover:underline">
                            Log in
                        </Link>
                    </>
                ) : (
                    <>
                        Don&#39;t have an account?{' '}
                        <Link href="/register" className="font-medium text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </>
                )}
            </p>
        </div>
    );
};

export default AuthToggle;