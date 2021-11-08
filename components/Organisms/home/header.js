import React, { Component } from "react";
import Link from "next/link";
import * as gtag from "../../../src/gtag.js";
import { JA, EN } from "../../Molecules/i18n"
import OutWhite from "../../Atoms/button/OutWhite"
import OutOrange from "../../Atoms/button/OutOrange"

import bigLogo from "../../Molecules/logo"
import styles from "./header.module.css"

import { VscClose, VscListFlat } from "react-icons/vsc"

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        time: 0,
        animationBox: ""
    };
  }

  componentDidMount(){

        let title__en = document.getElementById('title-en')
        let title__ja = document.getElementById('title-ja')

        window.onload = function() {
            title__en.className += ` ${styles.loaded}`
            title__ja.className += ` ${styles.loaded}`
        }
  }

  openMenu(){
        let menu = document.getElementById('burgerMenu')
        menu.className += ` ${styles["burgerMenu--active"]}`
  }

  closeMenu(){
        let menu = document.getElementById('burgerMenu')
        menu.className = `${styles["burgerMenu"]}`
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
        <div className={styles.container} id="container">
            <div className={styles.top}>
                {bigLogo()}
                <div className={styles.top__right}>
                        <div>
                            {JA(locale, asPath)}
                        </div>
                        <div>
                            {EN(locale, asPath)}
                        </div>
                        <div onClick={this.openMenu}>
                            <VscListFlat color="white" fontSize="27px"
                            className={styles["top__right--burger"]}/>
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
                    <Link href="/blog" passHref={true}>
                            <div>{OutWhite("Blog")}</div>
                    </Link>
                    <Link href="/contact" passHref={true}>
                        <div onClick={handler}>{OutOrange("Contact")}</div>
                    </Link>
                </div>
            </div>
            <div className={styles["burgerMenu"]} id="burgerMenu">
                <div onClick={this.closeMenu} className={styles["burgerMenu__item--close"]}>
                            <VscClose color="black" fontSize="27px"
                            className={styles["burger-option--close"]}/>
                </div>
                <div className={styles["burgerMenu__item"]}>
                    <a href="#service"  onClick={this.closeMenu}>Service</a>
                </div>
                <div className={styles["burgerMenu__item"]}>
                    <a href="#project"  onClick={this.closeMenu}>Project</a>
                </div>
                <Link href="/blog" passHref={true}>
                    <div className={styles["burgerMenu__item"]}>Blog</div>
                </Link>
                <Link href="/contact" passHref={true}>
                    <div className={styles["burgerMenu__item"]} onClick={handler}>Contact</div>
                </Link>
            </div>
            <div className={styles.bottomBox} id="bottomBox">
                <p className={styles.bottomBox__EN} id="title-en">
                Select the right technology for your business
                </p>
                <p className={styles.bottomBox__JA} id="title-ja">ビジネスに向き合った技術選定</p>

            </div>
        </div>
        );
    }
}

export default Header;
