import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as gtag from "@/src/gtag";
import { JA, EN } from "@/Molecules/i18n";
import {OutWhite} from "@/Atoms/button/OutWhite";
import {OutOrange} from "@/Atoms/button/OutOrange";

import {BigLogo} from "@/Molecules/logo";
import styles from "@/styles/Organisms/homeHeader.module.css";

import { VscClose, VscListFlat } from "react-icons/vsc";

export function Header(asPath, locale){

  const [count, setCount] = useState(0);

  useEffect(() => {
    let title__en = document.getElementById("title-en");
    let title__ja = document.getElementById("title-ja");

    if (window.onload !== null) {
      window.location.reload();
    }

    window.onload = function () {
      title__en.className += ` ${styles.loaded}`;
      title__ja.className += ` ${styles.loaded}`;
    };
  }, [locale]);


  const openMenu = () => {
    let menu = document.getElementById("burgerMenu");
    menu.className += ` ${styles["burgerMenu--active"]}`;
  }

  const closeMenu = () => {
    let menu = document.getElementById("burgerMenu");
    menu.className = `${styles["burgerMenu"]}`;
  }

  const handler = () => {
    setCount(count+1)
    gtag.event({
      action: "headerContactPushTime",
      category: "time",
      label: count
    });
  };
  return (
    <div className={styles.container} id="container">
      <div className={styles.top}>
        {BigLogo()}
        <div className={styles.top__right}>
          <div>{JA(locale, asPath)}</div>
          <div>{EN(locale, asPath)}</div>
          <div onClick={openMenu}>
            <VscListFlat
              color="white"
              fontSize="27px"
              className={styles["top__right--burger"]}
            />
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
          <Link href="/blog">
            <a>{OutWhite("Blog")}</a>
          </Link>
          <Link href="/contact">
            <a onClick={handler}>{OutOrange("Contact")}</a>
          </Link>
        </div>
      </div>
      <div className={styles["burgerMenu"]} id="burgerMenu">
        <div
          onClick={closeMenu}
          className={styles["burgerMenu__item--close"]}
        >
          <VscClose
            color="black"
            fontSize="27px"
            className={styles["burger-option--close"]}
          />
        </div>
        <div className={styles["burgerMenu__item"]}>
          <a href="#service" onClick={closeMenu}>
            Service
          </a>
        </div>
        <div className={styles["burgerMenu__item"]}>
          <a href="#project" onClick={closeMenu}>
            Project
          </a>
        </div>
        <Link href="/blog">
          <a className={styles["burgerMenu__item"]}>Blog</a>
        </Link>
        <Link href="/contact">
          <a className={styles["burgerMenu__item"]} onClick={handler}>
            Contact
          </a>
        </Link>
      </div>
      <div className={styles.bottomBox} id="bottomBox">
        <p className={styles.bottomBox__EN} id="title-en">
          Select the right technology for your business
        </p>
        <p className={styles.bottomBox__JA} id="title-ja">
          ビジネスに向き合った技術選定
        </p>
      </div>
    </div>
  );
}
