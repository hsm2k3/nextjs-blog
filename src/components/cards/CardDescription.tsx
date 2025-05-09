'use client'

import React, {useEffect, useState} from 'react';
import cardStyles from "@/app/styles/css/card.module.css";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CardDescription = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Return a placeholder during server rendering
    if (!isClient) {
        return <div className={cardStyles.icons}>Loading social links...</div>;
    }

    // Full component renders only on the client
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