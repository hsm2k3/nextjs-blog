import cardStyles from '@/app/styles/css/card.module.css';
import Image from "next/image";
import CardDescription from "@/components/cards/CardDescription";
import CardFooter from "@/components/cards/CardFooter";
import ClientOnly from "@/components/ClientOnly";

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div id="wrapper" className={cardStyles.wrapper}>
                <section className={cardStyles.main_card}>
          <span className={cardStyles.avatar}>
            <Image src="/alex.svg"
                   alt="A black and white picture of Alex"
                   width={500}
                   height={500}
            />
              <ClientOnly>
                  <CardDescription />
                  <CardFooter />
              </ClientOnly>
                    </span>
                </section>
            </div>
        </main>
    )
}
