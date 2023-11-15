'use client';

import React from 'react';
import PrologueLayout from "@/app/prologue/layout";


const Page = () => {

    return (
            <div>
                Hi
            </div>
    );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <>
            <PrologueLayout>
                <div>{page}</div>
            </PrologueLayout>
        </>
    );
}

export default Page;