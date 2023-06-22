'use client';

import { motion } from 'framer-motion';
import { navVariants} from "@/utils/motion";
import { styles } from "@/app/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <motion.nav
            className={styles.navbar}
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            >
            <div className="text-lg font-bold">Navbar</div>
            <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faUser} /> {" "} About Me</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Projects</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Blog</a>
            </div>
        </motion.nav>
    )
}