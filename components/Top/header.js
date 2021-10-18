import React, { Component } from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import * as gtag from "../../src/gtag.js";
import { JA, EN } from "../i18n";
import naviNormal from "../button/naviNormal";
import naviOrange from "../button/naviOrange";

import bigLogo from "../logo";

export class header extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  render() {
    const { asPath, locale } = this.props;

    const handler = () => {
      this.setState({
        time: this.state.time + 1,
      });

      // Information for sending to Analytics
      gtag.event({
        action: "headerContactPushTime",
        category: "time",
        label: this.state.time,
      });
    };

    return (
      <div className={styles.container}>
        <div className={styles.topBox}>
          {bigLogo()}
          <div className={styles.topBox_left}>
            <div className={styles.topBox_left__Language}>
              <div className={styles.topBox_left__Language_JA}>
                {JA(locale, asPath)}
              </div>
              <div className={styles.topBox_left__Language_EN}>
                {EN(locale, asPath)}
              </div>
            </div>
            <div className={styles.topBox_left__nav}>
              <div>
                <a href="#service">{naviNormal("Service")}</a>
              </div>
              <div>
                <a href="#project">{naviNormal("Project")}</a>
              </div>
              <div>
                <Link href="/blog" passHref={true}>
                    <div>{naviNormal("Blog")}</div>
                </Link>
              </div>
              <div onClick={handler}>
                <Link href="/contact" passHref={true}>
                  <div>{naviOrange("Contact")}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <p className={styles.bottomBox__EN}>
            Select the right technology for your business
          </p>
          <p className={styles.bottomBox__JA}>ビジネスに向き合った技術選定</p>
        </div>
      </div>
    );
  }
}

export default header;
