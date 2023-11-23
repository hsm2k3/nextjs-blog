import React from 'react';
import {styles} from "@/app/styles/styles";

export const StarWarsIntro = ({title, text}: {title: string, text: string}) => {
    return (
        <div className={styles.starWarsIntro}>
            <div className="crawl">
                <div className={`title ${styles.starWarsIntroTitle}`}>
                    <p>{title}</p>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}

