'use client';

import React from 'react';
import { Navbar } from "@/components/bars/Navbar";
// import {AboutMe} from "@/components/AboutMe";
// import {Projects} from "@/components/Projects";
// import {Blog} from "@/components/Blog";
// import {usePathname} from "next/navigation";

const Page = () => {
    // const pathName = usePathname();
    //
    // let componentToRender;
    //
    // console.log({pathName});
    //
    // switch(pathName) {
    //     case "/prologue":
    //         componentToRender = <AboutMe title="Software Engineer" />;
    //         break;
    //     case "/about-me":
    //         componentToRender = <AboutMe title="Software Engineer" />;
    //         break;
    //     case "/projects":
    //         componentToRender = <Projects />;
    //         break;
    //     case "/blog":
    //         componentToRender = <Blog />;
    //         break;
    //     default:
    //         componentToRender= <div>Page not found</div>;
    // }

    return (
        <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <div className="navbar-container">
                <Navbar />
                {/*{componentToRender}*/}
            </div>
        </div>
    );
};

export default Page;