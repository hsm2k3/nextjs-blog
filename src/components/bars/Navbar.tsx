'use client';

import { motion } from 'framer-motion';
import { navVariants} from "@/utils/motion";
import { styles } from "@/app/styles";

export const Navbar = () => {
    return (
        <motion.nav
            className={styles.navbar}
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            >
            nav
        </motion.nav>
    )
}