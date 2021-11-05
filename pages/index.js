import Head from "next/head";
import styles from "../styles/home/All.module.css";
import Header from "../components/core/home/header.js";
import Body from "../components/core/home/body";
import Footer from "../components/utils/commonFooter"
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import ja from "../public/locales/ja/common.json";
//componentは頭文字が大文字で読み込む必要がある

export default function Home() {
    const { locale, asPath } = useRouter();
    let t = locale === "ja" ? ja : en;

    return (
        <div className={styles.container}>
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
            <main className={styles.main}>
              <Header asPath={asPath} locale={locale} />
              <Body t={t} locale={locale} asPath={asPath} />
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

export async function getServerSideProps({ res }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-if-error=60");

    return {
        props: {},
    };
}
