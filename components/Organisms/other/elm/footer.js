import React, { Component } from "react";

import styles from "./footer.module.css"
import shareList from "../../../Molecules/share"

import relateListImage from "../../../Organisms/sub/relateListImage"
import rankList from "../../../Organisms/sub/rankList"

import Footer from "../../footer"

export class Footer__blog extends Component {
  render() {
    const { asPath, blog, rawRanking, rawRelated, subText } = this.props;
    const rankBlogs = [];
    for (let key in rawRanking) {
        rankBlogs.push(rawRanking[key]);
    }

    const relateBlogs = [];
    for (let key in rawRelated) {
        relateBlogs.push(rawRelated[key]);
    }

    return (
        <>
        <div className={styles.footer__add}>
        <div className={styles.share}>
          {shareList(blog, asPath)}
        </div>
        <div className={styles.footer__box}>
          <div className={styles.footer__box__title}>
            <p>{subText.relationTitle}</p>
          </div>
          <div className={styles["footer__box__list--relate"]}>
              {(relateBlogs.length === 0) ? <div>{subText.preparationText}</div>:
              (relateListImage(rawRelated))}
          </div>
        </div>
        <div className={styles["footer__box--bottom"]}>
          <div className={styles.footer__box__title}>
            <p>{subText.popularTitle}</p>
          </div>
          <div className={styles.footer__content__list}>
              {(rankBlogs.length===0) ? <div>{subText.preparationText}</div>:
              (rankList(rawRanking))}
          </div>
        </div>
      </div>
      <Footer
        projectPath="/#project"
        contactPath="/contact"
        servicePath="/#service"
        blogPath="/blog"
      />
      </>
    );
  }
}

export default Footer__blog;
