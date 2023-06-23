import {styles} from "./styles/";
import {CardLandingPage} from "@/components/cards/CardLandingPage";


export default function Home() {
    return (
        <main className={styles.main}>
            <CardLandingPage/>
        </main>
    )
}
