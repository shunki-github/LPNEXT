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
                <ul className={styles.service__list}>
                    <li className={styles.n}>

                        <div className={styles.service__item__textbox}>
                            <h2>{t.service.first.title}</h2>
                            <p>{t.service.first.description}</p>
                        </div>
                    </li>
                    <li className={`${styles.n}`}>

                        <div className={styles.service__item__textbox}>
                            <h2>{t.service.second.title}</h2>
                            <p>{t.service.second.description}</p>
                        </div>
                    </li>
                    <li className={`${styles.n}`}>

                        <div className={styles.service__item__textbox}>
                            <h2>{t.service.third.title}</h2>
                            <p>{t.service.third.description}</p>
                        </div>
                    </li>
                    <li className={`${styles.n}`}>

                        <div className={styles.service__item__textbox}>
                            <h2>{t.service.forth.title}</h2>
                            <p>{t.service.forth.description}</p>
                        </div>
                    </li>
                </ul>
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
                <li className={styles.bgBlue}>
                    <div>
                    <h2>{t.project.first.title}</h2>
                    <h3>{t.project.first.h3}</h3>
                    <p>{t.project.first.p}</p>
                    </div>
                </li>
                <li className={styles.bgBlue}>
                    <div>
                    <h2>{t.project.second.title}</h2>
                    <h3>{t.project.second.h3}</h3>
                    <p>{t.project.second.p}</p>
                    </div>
                </li>
                <li className={styles.bgBlue}>
                    <div>
                    <h2>{t.project.third.title}</h2>
                    <h3>{t.project.third.h3}</h3>
                    <p>{t.project.third.p}</p>
                    </div>
                </li>
                <li className={styles.bgBlue}>
                    <div>
                    <h2>{t.project.forth.title}</h2>
                    <h3>{t.project.forth.h3}</h3>
                    <p>{t.project.forth.p}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
  }
}

export default body;
