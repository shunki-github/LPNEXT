import styles from "@/styles/Organisms/blogListBody.module.css";

import {TopComponent} from "@/components/Molecules/blog/List/topBlog";
import {BlogList} from "@/components/Molecules/blog/List/blogList";
import {RankList} from "@/components/Organisms/sub/rankList";

import en from "@/public/locales/en/common.json";
import ja from "@/public/locales/ja/common.json";

export function Body(locale, rawBlogs, rawRanking){
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
            {!topBlog ? (
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
