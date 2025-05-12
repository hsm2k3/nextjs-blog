'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

interface UnderConstructionProps {
    title?: string;
    message?: string;
    mediaPath?: string;
    fallbackMediaPath?: string; // Static fallback
    estimatedCompletion?: string;
    contactEmail?: string;
}

const fallback= '/assets/under_construction.gif'

const UnderConstruction = ({
                               title = 'Under Construction',
                               message = 'We are working hard to bring you an amazing experience. Please check back soon!',
                               mediaPath = '',
                               fallbackMediaPath = '/assets/under_construction.gif',
                               estimatedCompletion = '',
                               contactEmail = '',
                           }: UnderConstructionProps) => {
    const [mounted, setMounted] = useState(false);

    // Helper function to extract file extension
    const getFileExtension = (filePath: string): string => {
        if (!filePath) return "";
        return filePath.split('.').pop()?.toLowerCase() || "";
    };

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

                    <div className="relative w-full h-64 sm:h-80 my-6 flex justify-center">
                        {mediaPath ? (
                            getFileExtension(mediaPath) === "mp4" ? (
                                // Only use video element for MP4 files
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="max-w-full max-h-full object-contain"
                                    poster={fallbackMediaPath}
                                >
                                    <source src={mediaPath} type="video/mp4" />
                                    {/* Fallback for browsers that don't support video */}
                                    <img
                                        src={fallbackMediaPath}
                                        alt="Under Construction"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </video>
                            ) : (
                                // For GIF, WebP, PNG, JPG, etc. - use img tag directly
                                <img
                                    src={mediaPath}
                                    alt="Under Construction"
                                    className="max-w-full max-h-full object-contain"
                                />
                            )
                        ) : (
                            // If mediaPath is empty, show the fallback image
                            <img
                                src={fallbackMediaPath}
                                alt="Under Construction"
                                className="max-w-full max-h-full object-contain"
                            />
                        )}
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