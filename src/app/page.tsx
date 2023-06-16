import Image from 'next/image'
import cardStyles from './styles/css/card.module.css';
import CardDescription from "@/components/cards/CardDescription";
import CardFooter from "@/components/cards/CardFooter";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div id="wrapper" className={cardStyles.wrapper}>
                <section className={cardStyles.main_card}>
          <span className={cardStyles.avatar}>
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
