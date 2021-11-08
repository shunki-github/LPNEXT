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
          <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: `
                        {
                        "@context": "http://schema.org",
                        "@type": "Blog",
                        "name": "MAKASERU Blog",
                        "image": "${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}"
                        "description": "MAKASERU Blogは非開発者向けに情報発信をするメディアです。企画から開発、マーケティングなどのコンテンツを配信中です。",
                        "about": "非開発者向け情報を発信をするメディア"
                        "brand": {
                            "@type": "Brand",
                            "name": "MAKASERU"
                          }
                        }`
                    }}
                    />
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
