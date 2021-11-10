import React, { Component } from "react";
import styles from "./body.module.css";

import TopComponent from "../../../Molecules/blog/List/topBlog";
import BlogList from "../../../Molecules/blog/List/blogList";
import RankList from "../../sub/rankList";

import en from "../../../../public/locales/en/common.json";
import ja from "../../../../public/locales/ja/common.json";

export class Body extends Component {
  render() {
    const { locale, rawBlogs, rawRanking } = this.props;
    let t = locale === "ja" ? ja : en;

    const blogs = [];

    for (let key in rawBlogs) {
      if (key === "0") {
        var topBlog = rawBlogs[key];
      } else {
        blogs.push(rawBlogs[key]);
      }
    }

    const ranking = [];
    for (let key in rawRanking) {
      ranking.push(rawRanking[key]);
    }

    return (
      <div className={styles.body}>
        <div className={styles.blog}>
          {TopComponent(topBlog)}
          <div className={styles.blog__list}>
            {topBlog === undefined ? (
              <div className={styles["preparation--big"]}>
                {t.sub.preparationText}
              </div>
            ) : (
              BlogList(blogs)
            )}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.side__box}>
            <div className={styles.side__title}>
              <p>{t.sub.popularTitle}</p>
            </div>
            <div>
              {rawRanking.length === 0 ? (
                <div>{t.sub.preparationText}</div>
              ) : (
                RankList(rawRanking, "blog/")
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
