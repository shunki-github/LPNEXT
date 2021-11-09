import React, { Component } from "react";
import styles from "./Body.module.css";
import Image from "next/image";
import en from "../../../public/locales/en/common.json";
import ja from "../../../public/locales/ja/common.json";

export class Body extends Component {
  render() {
    const { locale } = this.props;

    let t = locale === "ja" ? ja : en;

    return (
      <div>
        <div className={styles.service} id="service">
          <div className={styles.service__title}>
            <h2>Service</h2>
            <p>{t.service.subTitle}</p>
          </div>
          <ul className={styles.service__list}>
            <li>
              <div className={styles.service__item__textbox}>
                <h3>{t.service.first.title}</h3>
                <p>{t.service.first.description}</p>
              </div>
            </li>
            <li>
              <div className={styles.service__item__textbox}>
                <h3>{t.service.second.title}</h3>
                <p>{t.service.second.description}</p>
              </div>
            </li>
            <li>
              <div className={styles.service__item__textbox}>
                <h3>{t.service.third.title}</h3>
                <p>{t.service.third.description}</p>
              </div>
            </li>
            <li>
              <div className={styles.service__item__textbox}>
                <h3>{t.service.forth.title}</h3>
                <p>{t.service.forth.description}</p>
              </div>
            </li>
          </ul>
          <div className={styles.none__box} />
        </div>

        <div className={styles.point} id="point">
          <div className={styles.point__image}>
            <Image
              src={process.env.NEXT_PUBLIC_TALK_PATH}
              alt="MAKASERU Who We Are"
              layout="responsive"
              objectPosition="50% 50%"
              width="400px"
              height="280px"
              loading="lazy"
            />
          </div>
          <div className={styles.point__text}>
            <h2>Who we are</h2>
            <h3>{t.point.subTitle}</h3>
            <p>{t.point.description}</p>
          </div>
        </div>

        <div className={styles.project} id="project">
          <div className={styles.project__title}>
            <h2>Project</h2>
            <p>{t.project.subTitle}</p>
          </div>
          <ul className={styles.project__list}>
            <li>
              <div>
                <h3>{t.project.first.title}</h3>
                <h4>{t.project.first.h3}</h4>
                <p>{t.project.first.p}</p>
              </div>
            </li>
            <li>
              <div>
                <h3>{t.project.second.title}</h3>
                <h4>{t.project.second.h3}</h4>
                <p>{t.project.second.p}</p>
              </div>
            </li>
            <li>
              <div>
                <h3>{t.project.third.title}</h3>
                <h4>{t.project.third.h3}</h4>
                <p>{t.project.third.p}</p>
              </div>
            </li>
            <li>
              <div>
                <h3>{t.project.forth.title}</h3>
                <h4>{t.project.forth.h3}</h4>
                <p>{t.project.forth.p}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Body;
