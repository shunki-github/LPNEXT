import Head from "next/head";

import React, { useEffect } from "react";
import tocbot from "tocbot";

import Body from "../../Organisms/other/elm/body"
import Footer__blog from "../../Organisms/other/elm/footer"

import en from "../../../public/locales/en/common.json";
import ja from "../../../public/locales/ja/common.json";

import Header from "../../Organisms/other/header"

export default function TempBlogDetail(asPath, locale, staticData) {

    let blog = staticData.staticData[0];
    let rawRanking = staticData.subPopular;
    let rawRelated = blog.relatedBlogs;

    let t = locale === "ja" ? ja : en;

    let subText = t.sub

    useEffect(() => {
      tocbot.init({
        tocSelector: ".toc",
        contentSelector: ".content__main__body",
        headingSelector: "h2",

        scrollSmooth: true,
        scrollSmoothDuration: 420,
        orderedList: false,
        includeTitleTags: true,
        hasInnerContainers: false,
      });
      return () => tocbot.destroy();
    }, [blog]);

    let headerTitle = blog.title;
    let headerDesc = blog.headerDescription;

    return (
        <div className={"container"}>
        <Head>
          <title>{headerTitle}</title>
          <meta name="description" content={`${headerDesc}`} />
          <link rel="icon" href="/makaseruICO.webp" />
          <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: `
                        {
                        "@context": "http://schema.org",
                        "@type": "BlogPosting",
                        "name": "MAKASERU",
                        "image": "${blog.ogpImage.url}"
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://dev.oovo.app/"
                        },
                        "headline": "${headerTitle}",
                        "author": {
                            "@type": "Person",
                            "name": "Shunki"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "MAKASERU Blog",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}"
                            }
                        },
                        "description": "${headerDesc}",
                        }`
                    }}
                    />
        </Head>
        <main>
          {Header(locale, asPath)}
          <div>
            <Body asPath={asPath} blog={blog} rawRanking={rawRanking} rawRelated={rawRelated} subText={subText}/>
            <Footer__blog asPath={asPath} blog={blog} rawRanking={rawRanking} rawRelated={rawRelated} subText={subText}/>
          </div>
        </main>
      </div>
    );
}
