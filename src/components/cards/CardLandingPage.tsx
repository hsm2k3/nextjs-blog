'use client';


import css from "@/app/styles/css/card.module.css";
import Image from "next/image";
import CardDescription from "@/components/cards/CardDescription";
import CardFooter from "@/components/cards/CardFooter";
import { motion, useAnimation } from "framer-motion";
import {useEffect} from "react";
import {burstVariants} from "@/utils/motion";


export const CardLandingPage = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("burst").then(r => r);
    }, []);

    return (
        <motion.div
            initial="initial"
            animate={controls}
            variants={burstVariants}
        >
        <div id="wrapper" className={css.wrapper}>
            <section className={css.main_card}>
                    <span className={css.avatar}>
                        <Image src="/Screenshot-from-2023-02-21-12-16-29.svg"
                               alt="A black and white picture of Alex"
                               width={500}
                               height={500}
                        />
                    </span>
                <CardDescription/>
                <CardFooter/>
            </section>
        </div>
        </motion.div>
    )
}