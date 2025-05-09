'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface UnderConstructionProps {
    title?: string;
    message?: string;
    gifPath?: string;
    estimatedCompletion?: string;
    contactEmail?: string;
}

const UnderConstruction = ({
                               title = 'Under Construction',
                               message = 'We are working hard to bring you an amazing experience. Please check back soon!',
                               gifPath = '/icons/under_construction.gif', // Assuming your GIF is named "construction.gif" in the public folder
                               estimatedCompletion = 'Coming Soon',
                               contactEmail = '',
                           }: UnderConstructionProps) => {
    const [mounted, setMounted] = useState(false);

    // This ensures the component only renders on the client to avoid hydration issues
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Head>
                <title>{title}</title>
                <meta name="description" content="This page is under construction" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

                    <div className="relative w-full h-64 sm:h-80 my-6">
                        <Image
                            src={gifPath}
                            alt="Under Construction"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>

                    <p className="text-lg text-gray-600 mb-4">{message}</p>

                    {estimatedCompletion && (
                        <p className="text-md text-gray-500 mb-2">
                            <span className="font-semibold">Estimated Completion:</span> {estimatedCompletion}
                        </p>
                    )}

                    {contactEmail && (
                        <p className="text-md text-gray-500 mt-4">
                            <span className="font-semibold">Questions?</span> Contact us at{' '}
                            <a
                                href={`mailto:${contactEmail}`}
                                className="text-blue-500 hover:text-blue-700 underline"
                            >
                                {contactEmail}
                            </a>
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default UnderConstruction;