/* eslint-disable */

import Head from "next/head";
import styles from "../styles/blog/Blog.module.css";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import ja from "../public/locales/ja/common.json";
import React, { useRef } from "react";
import Footer from "../components/utils/commonFooter";
import gqlBlogList from "../lib/graphQL/getBlogList"

import { JA, EN } from "../components/utils/i18n";

import topComponent from "../components/core/blog/List/topBlog";
import rankingList from "../components/core/sub/rankingList";
import blogList from "../components/core/blog/List/blogList";

import bigLogo from "../components/utils/logo";

export default function Blog(staticData) {
  const { locale, asPath } = useRouter();
  let t = locale === "ja" ? ja : en;

  const renderFlgRef = useRef(false)

  //const [rawdata, setRaw] = useState([]);

  //When I don't use staticData, use this.
  //useEffect(() => {
  //  gqlBlogList(locale).then((blog) => setRaw(blog));
  //}, [locale]);
  //if (rawdata.length === 0 || rawdata.data.blogs.length === 0) {
  //} else {
  //  var rawBlogs = rawdata.data.blogs;
  //  var rawRanking = rawdata.data.popularBlogs;
  //}


  if(staticData.staticData.length !== 0 && !renderFlgRef.current){
    var rawBlogs = staticData.staticData
    var rawRanking = staticData.subPopular
  }

  //useEffect(() => {
  //  if (!renderFlgRef.current){
  //    renderFlgRef.current = true
  //    return
  //  }
//
  //  //if(firstLocale === locale ){
  //  //  //pro
  //  //  //rawBlogs = staticData.staticData
  //  //  //rawRanking = staticData.subPopular
  //  //  //dev
  //  //  rawBlogs = firstData.staticData
  //  //  rawRanking = firstData.subPopular
  //  //  return
  //  //} else if (dynamicData !== undefined){
  //  //  rawBlogs = dynamicData.blog
  //  //  rawRanking = dynamicData.popularBlogs
  //  //  return
  //  //}
  //  //else {
  //  //  gqlBlogList(locale).then((blog) => setRaw(blog))
  //  //  console.log("only one")
  //  //}
  //}, [locale]);


  //useEffect(() => {
  //  if (rawdata.length === 0 || rawdata.data.blogs.length === 0) return
  //  rawBlogs = rawdata.data.blogs;
  //  rawRanking = rawdata.data.popularBlogs;
  //  var dynamicData = rawdata
  //}, [rawdata]);



  //if (rawdata.length === 0 || rawdata.data.blogs.length === 0) {
  //  gqlBlogList(locale).then((blog) => setRaw(blog))
  //} else {
  //  var rawBlogs = rawdata.data.blogs;
  //  var rawRanking = rawdata.data.popularBlogs;
  //}

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
    <div className={styles.container}>
      <Head>
        <title>MAKASERU</title>
        <meta
          name="description"
          content="MAKASERU Blog はビジネスマン向けのモバイルアプリやWebアプリ、AIなどのシステム開発やマーケティングに関連したコンテンツを配信しています。"
        />
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
          <div className={styles.blog}>
            {topComponent(styles, topBlog)}
            <div className={styles.blog__list}>
              {blogList(topBlog, styles, blogs, t.sub.preparationText)}
            </div>
            <div className={styles.none} />
          </div>
          <div className={styles.side}>
            <div className={styles.side__content}>
              <div className={styles.side__box}>
                <div className={styles.side__title}>
                  <p className={styles.side__title__popular} />
                  <p className={styles.side__title__name}>
                    {t.sub.popularTitle}
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
            </div>
          </div>
        </div>
        <Footer
          projectPath="/#project"
          contactPath="/contact"
          servicePath="/#service"
          blogPath="/blog"
        />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {

  const rawdata = await gqlBlogList(context.locale)
  const blogs = rawdata.data.blogs
  const popular = rawdata.data.popularBlogs
  const category = rawdata.data.categories

  return {
    props: {
      staticData: blogs,
      subPopular: popular,
      subCategory: category
      },
    //staticData contains all
  }
}
