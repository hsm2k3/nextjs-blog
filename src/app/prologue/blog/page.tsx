'use client';

import React from 'react';
import PrologueLayout from "@/app/prologue/layout";

export default function Page() {
    return (
        <div>
            Hi from blog
        </div>
    )
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <PrologueLayout>
            <div>{page}</div>
        </PrologueLayout>
    );
}