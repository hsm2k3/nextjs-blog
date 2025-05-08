// 'use client'

import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const CardDescription = () => {
    return (
        <div>
            <h1>Alex Braverman</h1>
            <p>Software Engineer</p>
            <p>BS Computer Science</p>
            <Link href="prologue" className={"prologue-link"}>
                <FontAwesomeIcon icon={faChevronRight} />
                { " " }
                Learn More
            </Link>
        </div>
    );
};

export default CardDescription;