import React, { Component } from "react";
import styles from "../../styles/Body.module.css";

export class body extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.body}>
        <div className={styles.service} id="service">
          <div className={styles.service__title}>
            <h1>Service</h1>
            <p>{t.service.subTitle}</p>
          </div>
          <div className={styles.service__list}>
            <div
              className={`${styles.service__item} ${styles.service__item__nocode}`}
            >
              <h2>NoCode</h2>
            </div>
            <div
              className={`${styles.service__item} ${styles.service__item__iosAndroid}`}
            >
              <h2>iOS Android</h2>
            </div>
            <div
              className={`${styles.service__item} ${styles.service__item__web}`}
            >
              <h2>Web</h2>
            </div>
            <div
              className={`${styles.service__item} ${styles.service__item__ai}`}
            >
              <h2>AI</h2>
            </div>
            <div
              className={`${styles.service__item} ${styles.service__item__webMarketing}`}
            >
              <h2>Web Marketing</h2>
            </div>
            <div
              className={`${styles.service__item} ${styles.service__item__globalMarketing}`}
            >
              <h2>Global Marketing</h2>
            </div>
          </div>
          <div className={styles.none__box} />
        </div>

        <div className={styles.point}>
          <div className={styles.point__left} />
          <div className={styles.point__right}>
            <h1>Who we are</h1>
            <h2>{t.point.subTitle}</h2>
            <p>{t.point.description}</p>
          </div>
          <div className={styles.none__box} />
        </div>

        <div className={styles.project} id="project">
          <div className={styles.project__title}>
            <h1>Project</h1>
            <p>{t.project.subTitle}</p>
          </div>
          <ul className={styles.project__list}>
            <li>{t.project.sns}</li>
            <li>{t.project.medic}</li>
            <li>{t.project.nocode}</li>
            <li>{t.project.chatbot}</li>
            <li>{t.project.alexa}</li>
            <li>{t.project.other}</li>
          </ul>
          <div className={styles.none__box} />
        </div>
      </div>
    );
  }
}

export default body;
