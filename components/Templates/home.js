import Head from "next/head";
import Header from "../Organisms/home/header"
import Body from "../Organisms/home/body"
import Footer from "../Organisms/footer"

export default function TempHome(asPath, locale) {

    return (
        <div className={"container"}>
            <Head>
              <title>MAKASERU</title>
              <meta
                name="description"
                content="MAKASERU はビジネスに寄り添った形でモバイルアプリやWebアプリ、AIなどのシステム開発やその後のサポートをします。MAKASERUの魅力は技術選定とその後のサポートです。余計な予算を削ぎ落とし、マーケティング面までサポートします。"
              />
              <link rel="icon" href="/makaseruICO.webp" />
              <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: `
                        {
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "MAKASERU",
                        "image": "${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}"
                        "description": "MAKASERUにはシステム開発とそのマーケティングの全てを'任せる'ことができます。モバイルアプリ、業務アプリ、業務ツール、AIなど幅広い製品に対応可能です。",
                        "brand": {
                            "@type": "Brand",
                            "name": "MAKASERU"
                          }
                        }`
                    }}
                    />
            </Head>
            <main>
              <Header locale={locale} asPath={asPath} />
              <Body locale={locale} asPath={asPath} />
              <Footer
                projectPath="#project"
                contactPath="/contact"
                servicePath="#service"
                blogPath="/blog"
              />
            </main>
        </div>
    );
}
