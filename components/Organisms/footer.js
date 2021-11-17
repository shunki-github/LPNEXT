import styles from "@/styles/Organisms/footer.module.css";
import * as gtag from "@/src/gtag";

import React, {useState} from "react";

import {BigLogo} from "@/Molecules/logo";

export function Footer(projectPath, contactPath, servicePath, blogPath){
    const [count, setCount] = useState(0);
    const handler = () => {
      setCount(count+1)
      gtag.event({
        action: "footerContactPushTime",
        category: "time",
        label: count
      });
    };

    return (
      <div className={styles.container}>
        {BigLogo()}
        <div className={styles.bottom}>
          <div className={styles.botto__row}>
            <p className={styles.bottom__button}>
              <a href={projectPath}>Project →</a>
            </p>
            <p className={styles.bottom__button} onClick={handler}>
              <a href={contactPath}>Contact →</a>
            </p>
          </div>
          <div className={styles.botto__row}>
            <p className={styles.bottom__button}>
              <a href={servicePath}>Service →</a>
            </p>
            <p className={styles.bottom__button}>
              <a href={blogPath}>Blog →</a>
            </p>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>©︎2021 Oovo</p>
        </div>
      </div>
    );
  }

export default Footer;
