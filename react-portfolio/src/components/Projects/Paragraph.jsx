import React from "react";

import styles from "./Paragraph.module.css";
import { getImageUrl } from "../../utils";

export const Paragraph = ({ article: { title, p, img } }) => {
    return (
        <div className={styles.description}>
            <p>{p}</p>
        </div>
    );
};
