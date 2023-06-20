'use client';

import { motion } from 'framer-motion';
import { navVariants} from "@/utils/motion";

export const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            >
            nav
        </motion.nav>
    )
}