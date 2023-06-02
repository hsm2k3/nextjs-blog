import React from "react";
import cardStyles from "@/app/styles/css/card.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";

const iconFontSize = 64;

const CardFooter = () => {
    return (
        <div>
            <ul className={cardStyles.icons}>
                <li>
                    <a href="https://www.linkedin.com/in/alex-braverman/"
                       className="icon brands fa-linkedin">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{color: "rgba(0, 114, 177, 1.0)", fontSize: iconFontSize}}
                    />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/hsm2k3" className="icon brands fa-github">
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{color: "rgba(23, 21, 21, 1.0)", fontSize: iconFontSize}}
                    />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/AlexBraverman4"
                       className="icon brands fa-twitter">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{color: "rgba(0, 172, 238, 1.0)", fontSize: iconFontSize}}
                    />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/7092930/alex"
                       className="icon brands fa-stack-overflow">
                    <FontAwesomeIcon
                        icon={faStackOverflow}
                        style={{color: "rgba(239, 130, 54, 1.0)", fontSize: iconFontSize}}
                    />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CardFooter;