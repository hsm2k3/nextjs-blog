'use client';

import React from 'react';
import PrologueLayout from "@/app/prologue/layout";


const Page = () => {

    return (
            <div>
                Hi from prologue and stuff
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