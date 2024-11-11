import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Salut, c'est Mathilde !</h1>
                <p className={styles.description}>
                    Je suis développeuse informatique en 3ème année de BUT
                    Informatique à l'IUT de Calais. Découvrez mon CV et mes
                    projets !
                </p>
                <a
                    href="mailto:mathi.henrion@gmail.com"
                    className={styles.contactBtn}
                >
                    Contactez-moi
                </a>
            </div>
            <img
                src={getImageUrl("hero/moi.png")}
                alt="hero"
                className={styles.heroImage}
            />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
