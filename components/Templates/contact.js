import Head from "next/head";
import styles from "../../styles/Contact.module.css";

import Header from "../Organisms/other/header"
import OutBlue from "../Atoms/button/OutBlue";
import form from "../Molecules/form"

import en from "../../public/locales/en/common.json";
import ja from "../../public/locales/ja/common.json";

export default function TempContact(asPath, locale, router, sendfunc ) {

    let t = locale === "ja" ? ja : en;

    return (
          <div className={"container"}>
            <Head>
              <title>MAKASERU</title>
              <meta
                name="description"
                content="MAKASERU への問い合わせフォームになります。"
              />
              <link rel="icon" href="/makaseruICO.webp" />
            </Head>
            <main>
                {Header(locale, asPath)}
              <div className={styles.back} onClick={() => router.back()}>
                {OutBlue(t.contact.back)}
              </div>
              <div className={styles.service}>
                <div className={styles.service__title}>
                  <p>{t.contact.contact}</p>
                </div>
                {form(sendfunc, t.contact)}
              </div>
            </main>
          </div>
      );
}
