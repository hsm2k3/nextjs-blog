import Image from "next/image"
import css from "./styles/css/card.module.css";
import {styles} from "./styles/";
import CardDescription from "@/components/cards/CardDescription";
import CardFooter from "@/components/cards/CardFooter";


export default function Home() {
    return (
        <main className={styles.main}>
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
        </main>
    )
}
