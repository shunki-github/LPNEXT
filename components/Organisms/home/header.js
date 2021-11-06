import React, { Component } from "react";
import Link from "next/link";
import * as gtag from "../../../src/gtag.js";
import { JA, EN } from "../../Molecules/i18n"
import OutWhite from "../../Atoms/button/OutWhite"
import OutOrange from "../../Atoms/button/OutOrange"

import bigLogo from "../../Molecules/logo"
import styles from "./header.module.css"

export class Header extends Component {
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
        <div className={styles.top}>
            {bigLogo()}
            <div className={styles.top__right}>
                <div className={styles.top__right__Language}>
                    <div>
                        {JA(locale, asPath)}
                    </div>
                    <div>
                        {EN(locale, asPath)}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.middle}>
            <div className={styles.nav}>
                <div>
                    <a href="#service">{OutWhite("Service")}</a>
                </div>
                <div>
                    <a href="#project">{OutWhite("Project")}</a>
                </div>
                <div>
                    <Link href="/blog" passHref={true}>
                        <div>{OutWhite("Blog")}</div>
                    </Link>
                </div>
                <div onClick={handler}>
                    <Link href="/contact" passHref={true}>
                    <div>{OutOrange("Contact")}</div>
                    </Link>
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

export default Header;
