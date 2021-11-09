import React, { Component } from "react";
import styles from "./Body.module.css";

import RankList from "../../sub/RankList";
import RelateList from "../../sub/RelateList";

import ContentBody from "../../../Molecules/blog/elm/ContentBody";
import ContentDesc from "../../../Molecules/blog/elm/ContentDesc";
import TopImage from "../../../Molecules/blog/elm/TopImage";

import ShareList from "../../../Molecules/Share";
import Link from "next/link";

export class Body extends Component {
  render() {
    const { asPath, blog, rawRanking, rawRelated, subText } = this.props;

    let createeDate = blog.createdAt.split("T")[0];
    let desc = blog.richDesc;
    let body = blog.richBody;

    const bodySentences = [];
    for (let key in body) {
      bodySentences.push(body[key]);
    }
    let bodyContents = new Object();
    bodyContents = bodySentences[0];

    const descSentences = [];
    for (let key in desc) {
      descSentences.push(desc[key]);
    }
    let descContents = new Object();
    descContents = descSentences[0];

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
        <div className={styles["blog-header"]}>
          <Link href="/blog" passHref={true}>
            <h1>MAKASERUブログ</h1>
          </Link>
        </div>
        <div className={styles.rowcontent}>
          <div className={styles.content}>
            <div className={styles.content__head}>
              <div className={styles.content__head__title}>
                <h1>{blog.title}</h1>
              </div>
              <div className={styles.content__head__desc}>
                <div className={styles.content__head__desc__left}>
                  <div className={styles.content__head__left__top}>
                    <div>
                      <p className={"grey"}>by&nbsp;</p>
                      <p className={"brand--light"}>{blog.author.authorName}</p>
                      <p className={"lightgrey"}>・</p>
                      <p className={"brand--light"}>
                        <p className={styles.blog__blandColor}>
                          {blog.category.categoryName}
                        </p>
                      </p>
                      <p className={`lightgrey ${styles.hide}`}>・</p>
                    </div>
                    <div>
                      <p className={"grey"}>{createeDate}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content__head__desc__right}>
                  {ShareList(blog, asPath)}
                </div>
              </div>
            </div>
            <div>
              <div>{TopImage(blog)}</div>
              <div className={styles.content__body__desc}>
                {blog === undefined ? <div /> : ContentDesc(descContents)}
              </div>
              <div className={styles.content__main__toc}>
                {blog === undefined ? <div /> : ContentBody(blog, bodyContents)}
              </div>
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.side__box}>
              <div className={styles.side__title}>
                <p className={styles.side__title__name}>
                  {subText.popularTitle}
                </p>
              </div>
              <div className={styles.side__list}>
                {rankBlogs.length === 0 ? (
                  <div>{subText.preparationText}</div>
                ) : (
                  RankList(rawRanking)
                )}
              </div>
            </div>
            <div className={styles.side__box}>
              <div className={styles.side__title}>
                <p className={styles.side__title__name}>
                  {subText.relationTitle}
                </p>
              </div>
              <div className={styles.side__list}>
                {relateBlogs.length === 0 ? (
                  <div>{subText.preparationText}</div>
                ) : (
                  RelateList(rawRelated)
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
