'use client';

import React from 'react';

export const AboutMe = ({ title, company }: {title: string; company?: string;}) => {
    return (
        <div>
            <h2 className="alt">
                Hi! I&apos;m <strong>Alex Braverman</strong>, a {title}.
                <br />
            </h2>
            <p>
                {company ? `Currently I&apos;m working at ${company}.` : null }
                <br />
            </p>
            <p>
                If you&apos;re interested in working with me please reach out to me.
                <br />
            </p>
        </div>
    );
};
