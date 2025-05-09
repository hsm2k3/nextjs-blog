'use client'
import React from 'react';
import Link from "next/link";
import SvgIcon from "@/components/images/SvgIcon";

const iconFontSize = 64;

const CardDescription = () => {
    return (
        <div>
            <h1>Alex Braverman</h1>
            <p>Software Engineer</p>
            <p>BS Computer Science</p>
            <Link href="/prologue" className={"prologue-link"}>
                <SvgIcon name="chevron-right-square" size={iconFontSize} />
                {" "}
                Learn More
            </Link>
        </div>
    );
};

export default CardDescription;