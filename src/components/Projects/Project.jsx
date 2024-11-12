import React from "react";

import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";

export const Project = ({
    project: {
        title,
        skills,
        p1,
        img1,
        t2,
        p2,
        img2,
        t3,
        p3,
        img3,
        t4,
        p4,
        img4,
        t5,
        p5,
        img5,
    },
}) => {
    return (
        <section className={styles.container} id={title}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.description}>
                <p>{p1 && <p>{p1}</p>}</p>
                {img1 && (
                    <img
                        src={getImageUrl(img1)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                )}
                <br></br>
                {t2 && <h2 className={styles.title}>{t2}</h2>}
                {p2 && <p>{p2}</p>}
                {img2 && (
                    <img
                        src={getImageUrl(img2)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                )}
                <br></br>
                {t3 && <h2 className={styles.title}>{t3}</h2>}
                {p3 && <p>{p3}</p>}
                {img3 && (
                    <img
                        src={getImageUrl(img3)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                )}
                <br></br>
                {t4 && <h2 className={styles.title}>{t4}</h2>}
                {p4 && <p>{p4}</p>}
                {img4 && (
                    <img
                        src={getImageUrl(img4)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                )}
                <br></br>
                {t5 && <h2 className={styles.title}>{t5}</h2>}
                {p5 && <p>{p5}</p>}
                {img5 && (
                    <img
                        src={getImageUrl(img5)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                )}
            </div>
            <div className={styles.links}>
                <a href="#projects" className={styles.link}>
                    Retour
                </a>
            </div>
        </section>
    );
};
