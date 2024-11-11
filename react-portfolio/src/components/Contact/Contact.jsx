import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>N'hésitez pas à me contacter !</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/emailIcon.png")}
                        alt="Email icon"
                    />
                    <a href="mailto:myemail@email.com">
                        henrion.mathilde.59@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://linkedin.com/in/mathilde-henrion-4b110b260">
                        linkedin.com/mathilde-henrion
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/githubIcon.png")}
                        alt="Github icon"
                    />
                    <a href="https://github.com/Bright4lpha">
                        github.com/Bright4lpha
                    </a>
                </li>
            </ul>
        </footer>
    );
};
