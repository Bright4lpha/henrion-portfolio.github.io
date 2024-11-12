import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>À propos</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/info.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Étudiante</h3>
                            <p>
                                Je suis étudiante en troisième année de BUT
                                Informatique à l'IUT de Calais.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="Server icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Alternante</h3>
                            <p>
                                Je réalise mon alternance dans le département
                                infrastructure d'ArcelotMittal Dunkerque.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/music.png")} alt="Hobby" />
                        <div className={styles.aboutItemText}>
                            <h3>Centres d'intérets</h3>
                            <p>
                                J'aime apprendre de nouvelles choses, joueur et
                                écouter de la musique. J'aime aussi faire du
                                running avec mes amis.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
