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
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
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
                <h1 className="text-3xl md:text-4xl font-bold text-blue-300">{name}</h1>
                <h2 className="text-xl md:text-2xl font-medium text-blue-200 mt-2">{title}</h2>
                <p className="text-gray-300 mt-1">{location}</p>
                <p className="mt-4 text-gray-300 max-w-2xl">{description}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;