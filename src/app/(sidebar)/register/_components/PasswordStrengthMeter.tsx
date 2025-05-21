interface PasswordStrengthMeterProps {
    password: string;
}

const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
    // Calculate password strength
    const getPasswordStrength = (password: string): number => {
        let strength = 0;

        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;

        return Math.min(strength, 4);
    };

    const strength = getPasswordStrength(password);

    const getStrengthLabel = (strength: number): string => {
        if (strength === 0) return 'Very weak';
        if (strength === 1) return 'Weak';
        if (strength === 2) return 'Fair';
        if (strength === 3) return 'Good';
        return 'Strong';
    };

    const getStrengthColor = (strength: number): string => {
        if (strength === 0) return 'bg-red-500';
        if (strength === 1) return 'bg-orange-500';
        if (strength === 2) return 'bg-yellow-500';
        if (strength === 3) return 'bg-lime-500';
        return 'bg-green-500';
    };

    return (
        <div className="mt-2">
            <div className="flex h-1 overflow-hidden rounded bg-gray-200">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-full w-1/4 ${index < strength ? getStrengthColor(strength) : 'bg-gray-200'}`}
                    />
                ))}
            </div>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Password strength: <span className="font-medium">{getStrengthLabel(strength)}</span>
            </p>
        </div>
    );
};

export default PasswordStrengthMeter;