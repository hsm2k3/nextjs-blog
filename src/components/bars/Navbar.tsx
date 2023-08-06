'use client';

import { motion } from 'framer-motion';
import { navVariants} from "@/utils/motion";
import { styles } from "@/app/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDiagramProject, faBlog } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {useState} from "react";

export const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false); // State variable to control visibility

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return (
        <motion.nav
            className={styles.navbar}
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            >
            <div className="flex space-x-4">
                {/* Hamburger Icon */}
                <div className="cursor-pointer" onClick={toggleNavbar}>
                    <Image
                        src={"/menu.svg"}
                        alt="Menu"
                        width={50}
                        height={50}
                    />
                </div>
                {/* Navigation Links */}
                <ul className={`space-y-4 ${isNavbarVisible ? 'block' : 'hidden'}`}> {/* Use CSS classes to show/hide */}
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser} /> {" "} About Me
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faDiagramProject} /> {" "}Projects
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faBlog} /> {" "}Blog
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}