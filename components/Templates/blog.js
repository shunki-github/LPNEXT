import Head from "next/head";

import React, {useRef} from "react";
import Header from "../Organisms/other/header"
import Footer from "../Organisms/footer"

import Body from "../Organisms/other/list/body"

export default function TempBlog(asPath, locale, staticData) {

    const renderFlgRef = useRef(false)

    if(staticData.staticData.length !== 0 && !renderFlgRef.current){
        var rawBlogs = staticData.staticData
        var rawRanking = staticData.subPopular
    }

    return (
        <div className={"container"}>
        <Head>
          <title>MAKASERU</title>
          <meta
            name="description"
            content="「MAKASERU Blog」は経営者、事業主等意思決定者向けに、モバイルアプリやWebアプリ、AIなどのシステム開発やマーケティングに関連したコンテンツを配信しています。"
          />
          <link rel="icon" href="/makaseruICO.webp" />
        </Head>
        <main>

            {Header(locale, asPath)}
            <Body locale={locale} asPath={asPath} rawBlogs={rawBlogs} rawRanking={rawRanking}/>


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
