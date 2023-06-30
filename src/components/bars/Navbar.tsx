'use client';

import { motion } from 'framer-motion';
import { navVariants} from "@/utils/motion";
import { styles } from "@/app/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDiagramProject, faBlog } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {


    return (
        <motion.nav
            className={styles.navbar}
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            >
            <div className="flex space-x-4">
                <ul className="space-y-4">
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