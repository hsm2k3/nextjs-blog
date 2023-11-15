'use client';

import React from "react";
import PrologueLayout from "@/app/prologue/layout";

const Page = () => {
    const title = "Software Engineer";
    const company = null;
    return (
        <>
            <h2 className="alt">
                Hi! I&apos;m <strong>Alex Braverman</strong>, a {title}.
                <br/>
            </h2>
            <p>
                {company ? `Currently I&apos;m working at ${company}.` : null}
                <br/>
            </p>
            <p>
                If you&apos;re interested in working with me please reach out to me.
                <br/>
            </p>
        </>
    );
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <PrologueLayout>
            <div>{page}</div>
        </PrologueLayout>
    );
};


export default Page;