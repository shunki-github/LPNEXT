/* eslint-disable */

import Head from "next/head";
import styles from "../../styles/blog/BlogId.module.css";
import { useRouter } from "next/router";
import en from "../../public/static/locales/en/common.json";
import ja from "../../public/static/locales/ja/common.json";
import React, { useEffect } from "react";
import tocbot from "tocbot";
import Footer from "../../components/utils/commonFooter";

import gqlBlogELm from "../../lib/graphQL/getBlogElm"
import gqlBlogList from "../../lib/graphQL/getBlogList"

import { JA, EN } from "../../components/utils/i18n";

import rankingList from "../../components/core/sub/rankingList";
import relatedList from "../../components/core/sub/relatedList";
import relatedImageList from "../../components/core/sub/relatedImageList";

import contentBody from "../../components/core/blog/elm/contentBody";
import contentDesc from "../../components/core/blog/elm/contentDesc";
import topImage from "../../components/core/blog/elm/topImage";

import shareList from "../../components/utils/share";
import bigLogo from "../../components/utils/logo";

//componentは頭文字が大文字で読み込む必要がある

export default function Blog(staticData) {
  //router
  const router = useRouter();
  const id = router.query.id;
  const { locale, asPath } = useRouter();
  let t = locale === "ja" ? ja : en;

  //////content data
  //const [rawdata, setRaw] = useState([]);
  //let blog = undefined;
  //let desc = undefined;
  //let body = undefined;
  //let rawRanking = undefined;
  //let rawRelated = undefined;
//
  //if (rawdata.length === 0) {
  //  //console.log("rawdata is still undefined.")
  //  //gqlBlogELm(id, locale).then((blogdata) => setRaw(blogdata))
  //} else if (rawdata.data.blogs.length === 0) {
  //  router.push("/blog");
  //} else if (blog === undefined) {
  //  //console.log("blog is still undefined.")
  //  blog = rawdata.data.blogs[0];
  //  desc = blog.richDesc.raw;
  //  body = blog.richBody.raw;
  //  rawRanking = rawdata.data.popularBlogs;
  //  rawRelated = blog.relatedBlogs;
  //}

  let blog = staticData.staticData[0];
  let desc = blog.richDesc;
  let body = blog.richBody;
  let rawRanking = staticData.subPopular;
  let rawRelated = staticData.staticData.relatedBlogs

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".content__main__body",
      headingSelector: "h2, h6",
      listItemClass: "toc__list__item",

      scrollSmooth: true,
      scrollSmoothDuration: 420,
      orderedList: false,
      includeTitleTags: true,
    });
    return () => tocbot.destroy();
  }, [blog]);

  //useEffect(() => {
  //  //console.log("locale is updated.")
  //  //ここはクライアントサイドの処理だから、環境変数が読み込めずエラーになる
  //  gqlBlogELm(id, locale).then((blogdata) => setRaw(blogdata));
  //}, [locale]);

  const ranking = [];
  for (let key in rawRanking) {
    ranking.push(rawRanking[key]);
  }

  const relatedBlogs = [];
  for (let key in rawRelated) {
    relatedBlogs.push(rawRelated[key]);
  }

  if (blog === undefined) {
    var headerTitle,
      headerDesc = "";
    var title,
      authorName,
      category,
      createdAt = <div />;
  } else {
    headerTitle = blog.title;
    headerDesc = blog.headerDescription;
    title = <h1>{blog.title}</h1>;
    authorName = (
      <>
        <p className={styles.blog__grey}>by&nbsp;</p>
        <p className={styles.blog__blandColor}>{blog.author.authorName}</p>
        <p className={styles.blog__lightgrey}>・</p>
      </>
    );
    category = (
      <p className={styles.blog__blandColor}>{blog.category.categoryName}</p>
    );
    let createeDate = blog.createdAt.split("T")[0];
    createdAt = (
      <>
        <p className={styles.blog__grey}>{createeDate}</p>
        <p className={styles.blog__lightgrey}>・</p>
      </>
    );
  }

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

  return (
    <div className={styles.container}>
      <Head>
        <title>{headerTitle}</title>
        <meta name="description" content={`${headerDesc}`} />
        <link rel="icon" href="/makaseruICO.webp" />
      </Head>
      <main>
        <div className={styles.top}>
          {bigLogo()}
          <div className={styles.top__language}>
            <div className={styles.top__language__JA}>{JA(locale, asPath)}</div>
            <div className={styles.top__language__EN}>{EN(locale, asPath)}</div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.top__title}>
            <h1>MAKASERU&nbsp;Blog</h1>
          </div>
          <div className={styles.rowcontent}>
            <div className={styles.content}>
              <div className={styles.content__head}>
                <div className={styles.content__head__top}>{title}</div>
                <div className={styles.content__head__content}>
                  <div className={styles.content__head__left}>
                    <div className={styles.content__head__left__top}>
                      {authorName}
                      <p className={styles.blog__blandColor}>{category}</p>
                      {createdAt}
                    </div>
                  </div>
                  <div className={styles.content__head__right}>
                    {shareList(styles, blog, asPath)}
                  </div>
                </div>
              </div>
              <div className={styles.content__main}>
                <div className={styles.content__main__topBox}>
                  {topImage(styles, blog)}
                </div>
                <div className={styles.content__main__description}>
                  {contentDesc(styles, blog, descContents)}
                </div>
                <div className={styles.content__main__toc}>
                  {contentBody(styles, blog, bodyContents)}
                </div>
              </div>
            </div>

            <div className={styles.side}>
              <div className={styles.side__content}>
                <div className={styles.side__box}>
                  <div className={styles.side__title}>
                    <p className={styles.side__title__popular} />
                    <p className={styles.side__title__name}>
                      {t.sub.preparationText}
                    </p>
                  </div>
                  <div className={styles.side__list}>
                    {rankingList(
                      styles,
                      ranking,
                      rawRanking,
                      t.sub.preparationText
                    )}
                  </div>
                </div>
                <div className={styles.side__box}>
                  <div className={styles.side__title}>
                    <p className={styles.side__title__relation} />
                    <p className={styles.side__title__name}>
                      {t.sub.relationText}
                    </p>
                  </div>
                  <div className={styles.side__list}>
                    {relatedList(
                      styles,
                      relatedBlogs,
                      rawRelated,
                      t.sub.preparationText
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.footer__feed}>
              {shareList(styles, blog, asPath)}
            </div>
            <div className={styles.footer__content}>
              <div className={styles.footer__content__title}>
                <p>{t.sub.relationTitle}</p>
              </div>
              <div className={styles.footer__content__relate__list}>
                {relatedImageList(
                  styles,
                  relatedBlogs,
                  rawRelated,
                  t.sub.preparationText
                )}
              </div>
            </div>
            <div className={styles.footer__content}>
              <div className={styles.footer__content__title}>
                <p>{t.sub.popularTitle}</p>
              </div>
              <div className={styles.footer__content__list}>
                {rankingList(
                  styles,
                  ranking,
                  rawRanking,
                  t.sub.preparationText
                )}
              </div>
            </div>
          </div>
          <Footer
            projectPath="/#project"
            contactPath="/contact"
            servicePath="/#service"
            blogPath="/blog"
          />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale, params }) {
  const rawdata = await gqlBlogELm(params.id, locale)
  const blogs = rawdata.data.blogs
  const popular = rawdata.data.popularBlogs
  const category = rawdata.data.categories

  return {
    props: {
      staticData: blogs,
      subPopular: popular,
      subCategory: category,
      },
  }
}

export async function getStaticPaths({locales}) {
  const rawData = await gqlBlogList("ja")
  const allBlogs = rawData.data.blogs

  let rawpaths = []

  locales.map((locale) => {
    allBlogs.map((blog) => {
      rawpaths.push({
        params: {
          id: `${blog.blogNumber}`
        },
        locale
      })
    })
  })

  return {
    //paths: allBlogs.map(( blog ) => `/blog/${blog.blogNumber}`) || [],
    paths: rawpaths || [],
    fallback: false,
  }
}
