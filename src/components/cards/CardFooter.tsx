'use client'
import React from "react";
import cardStyles from "@/app/styles/css/card.module.css";
import SvgIcon from "@/components/images/SvgIcon";

const iconFontSize = 54;

const CardFooter = () => {
    return (
        <div>
            <ul className={cardStyles.icons}>
                <li>
                    <a href="https://www.linkedin.com/in/alex-braverman/"
                       target="_blank"
                       className="icon brands">
                        <SvgIcon
                            name="linkedin"
                            size={iconFontSize}
                            alt="Check out my LinkedIn"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/hsm2k3"
                       target="_blank"
                       className="icon brands">
                        <SvgIcon
                            name="github"
                            size={iconFontSize}
                            alt="Check out my GitHub"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/AlexBraverman4"
                       target="_blank"
                       className="icon brands">
                        <SvgIcon
                            name="twitter"
                            size={iconFontSize}
                            alt="Check out my Twitter"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/7092930/alex"
                       target="_blank"
                       className="icon brands">
                        <SvgIcon
                            name="stackoverflow"
                            size={iconFontSize}
                            alt="Check out my Stack Overflow"
                        />
                    </a>
                </li>
                <li>
                    <a href="/assets/Alex%20Braverman%20Resume%202023.pdf" download>
                        <SvgIcon
                            name="file-cv"
                            size={iconFontSize}
                            alt="Download my resume"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CardFooter;