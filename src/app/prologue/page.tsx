'use client';

import React from 'react';
import PrologueLayout from "@/app/prologue/layout";
import {StarWarsIntro} from "@/components/StarWarsIntro";


const Page = () => {

    return (
            <div>
                <StarWarsIntro title={"hi"} text={"text"}/>
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