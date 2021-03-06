import Head from "next/head";
import styles from "@/styles/Templates/contact.module.css";

import {Header} from "@/components/Organisms/other/header";
import {OutBlue} from "@/components/Atoms/button/OutBlue";
import {Form} from "@/components/Molecules/form";

import en from "@/public/locales/en/common.json";
import ja from "@/public/locales/ja/common.json";

export function TempContact(asPath, locale, router, sendfunc) {
  let t = locale === "ja" ? ja : en;

  return (
    <div className={"container"}>
      <Head>
        <title>MAKASERU</title>
        <meta
          name="description"
          content="MAKASERU への問い合わせフォームになります。"
        />
        <link rel="icon" href="/MakaseruICO.webp" />
        <script type="application/ld+json">
          {JSON.stringify(
            {"@context": "http://schema.org",
            "@type": "ContactPage",
            "name": "MAKASERU",
            "image": `${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}`,
            "mainEntity": {
                "@type": "WebPage",
                "@id": "https://dev.oovo.app/"
            },
            "headline": "MAKASERU Contact Page",
            "description": "MAKASERUのコンタクトページです",
        })}
        </script>
      </Head>
      <main>
        {Header(locale, asPath)}
        <div className={styles.back} onClick={() => router.back()}>
          {OutBlue(t.contact.back)}
        </div>
        <div className={styles.body}>
          <div className={styles.body__title}>
            <p>{t.contact.contact}</p>
          </div>
          {Form(sendfunc, t.contact)}
        </div>
      </main>
    </div>
  );
}
