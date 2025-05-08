'use client'
import React, {useEffect, useState} from "react";
import cardStyles from "@/app/styles/css/card.module.css";
import FontAwesomeIcon from '@/components/fontawesome/DynamicFontAwesomeIcon';
import {faGithub, faLinkedin, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons";

const iconFontSize = 64;

const CardFooter = () => {
    return (
        <div>
            <ul className={cardStyles.icons}>
                <li>
                    <a href="https://www.linkedin.com/in/alex-braverman/"
                       target="_blank"
                       className="icon brands fa-linkedin">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{color: "rgba(0, 114, 177, 1.0)", fontSize: iconFontSize}}
                        title={"Check out my LinkedIn"}
                    />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/hsm2k3"
                       target="_blank"
                       className="icon brands fa-github">
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{color: "rgba(23, 21, 21, 1.0)", fontSize: iconFontSize}}
                        title={"Check out my GitHub"}
                    />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/AlexBraverman4"
                       target="_blank"
                       className="icon brands fa-twitter">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{color: "rgba(0, 172, 238, 1.0)", fontSize: iconFontSize}}
                        title={"Check out my Twitter"}
                    />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/7092930/alex"
                       target="_blank"
                       className="icon brands fa-stack-overflow">
                    <FontAwesomeIcon
                        icon={faStackOverflow}
                        style={{color: "rgba(239, 130, 54, 1.0)", fontSize: iconFontSize}}
                        title={"Check out my Stack Overflow"}
                    />
                    </a>
                </li>
                <li><a href="/assets/Alex%20Braverman%20Resume%202023.pdf" download>
                    <FontAwesomeIcon
                        icon={faFile}
                        style={{color: "rgba(23, 21, 21, 1.0)", fontSize: iconFontSize}}
                        title={"Download my resume"}
                    />
                </a></li>
            </ul>
        </div>
    );
};

export default CardFooter;