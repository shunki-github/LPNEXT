import styles from "../styles/404.module.css";
import Head from "next/head";
import bigLogo from "../components/logo";

export default function Custom404() {
  return(
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
        </div>
        <div className={styles.body}>
          <h1>404 - Page Not Found</h1>
        </div>
      </main>
    </div>

  )
}
