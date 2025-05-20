import React from 'react';
import Image from 'next/image';

interface ProfileHeaderProps {
    name: string;
    title: string;
    location: string;
    description: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title, location, description }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--bg-secondary)] shadow-lg">
                <Image
                    src="/alex.svg"
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="rounded-full"
                />
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{name}</h1>
                <h2 className="text-xl md:text-2xl font-medium text-[var(--text-primary)] opacity-80 mt-2">{title}</h2>
                <p className="text-[var(--text-secondary)] mt-1">{location}</p>
                <p className="mt-4 text-[var(--text-secondary)] max-w-2xl">{description}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;