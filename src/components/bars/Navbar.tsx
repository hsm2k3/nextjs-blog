'use client';

import { motion } from 'framer-motion';
import { navVariants} from "@/utils/motion";
import { styles } from "@/app/styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDiagramProject, faBlog, faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";

export const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false); // State variable to control visibility
    const [initialAnimationState, setInitialAnimationState] = useState('hidden');

    useEffect(() => {
        setInitialAnimationState('show');
    }, []);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return (
        <motion.nav
            className={styles.navbar}
            variants={navVariants}
            initial={initialAnimationState}
            whileInView={initialAnimationState}
            >
            <div className="flex space-x-4">
                {/* Hamburger Icon */}
                <div className="cursor-pointer" onClick={toggleNavbar}>
                    <Image
                        src={"/menu.svg"}
                        alt="Menu"
                        width={35}
                        height={35}
                    />
                </div>
                {/* Navigation Links */}
                <ul className={`space-y-4 ${isNavbarVisible ? 'block' : 'hidden'}`}> {/* Use CSS classes to show/hide */}
                    <li>
                        <Link href={"/"} className={"home-link"} onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faHome} /> {" "}Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/prologue/about-me"} className={"about-me-link"} onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faUser} /> {" "} About Me
                        </Link>
                    </li>
                    <li>
                        <Link href={"/prologue/projects"} className={"projects-link"} onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faDiagramProject} /> {" "}Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={"/prologue/blog"} className={"blog-link"} onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faBlog} /> {" "}Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}