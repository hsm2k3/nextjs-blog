import React from 'react';
import { Navbar } from "@/components/bars/Navbar";
import {AboutMe} from "@/components/AboutMe";

const Page = () => {
    return (
        <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <div className="navbar-container">
                <Navbar />
                <AboutMe title="Software Engineer" />
            </div>
        </div>
    );
};

export default Page;