import styles from "@/styles/404.module.css";
import Head from "next/head";
import {BigLogo} from "@/Molecules/logo";
import Link from "next/link";

export default function Custom404() {
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
        <div className={styles.top}>{BigLogo()}</div>
        <div className={styles.project}>
          <div className={styles.project__title}>
            <h1>404</h1>
            <p>
              指定されたページはありません。
              <br />
              既に削除されたページか誤ったURLの可能性があります。
              <br />
              右から他のページへ遷移してください。
              <br />
              <br />
              There is no specified page.
              <br />
              The page may have already been deleted or the URL may be
              incorrect.
              <br />
              Please go to another page from the right.
            </p>
          </div>
          <ul className={styles.project__list}>
            <Link href="/" passHref={true}>
              <li className={styles.bgBlue}>
                <div>
                  <h2>HOME</h2>
                  <div className={styles.textBox}>
                    <h3>
                      MAKASERUのサービスや理念、プロジェクトを見ることができます。
                    </h3>
                    <h3>
                      View MAKASERU&#39;s services, philosophy and projects.
                    </h3>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="/blog" passHref={true}>
              <li className={styles.bgBlue}>
                <div>
                  <h2>BLOG</h2>
                  <div className={styles.textBox}>
                    <h3>MAKASERUのブログを見ることができます</h3>
                    <h3>View the blog of MAKASERU</h3>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="/contact" passHref={true}>
              <li className={styles.bgBlue}>
                <div>
                  <h2>CONTACT</h2>
                  <div className={styles.textBox}>
                    <h3>
                      MAKASERUのサービス利用リクエストや相談等を受け付けている問い合わせフォーム
                    </h3>
                    <h3>
                      Contact form for requesting the use of MAKASERU&#39;s
                      services or for consultation.
                    </h3>
                  </div>
                </div>
              </li>
            </Link>
            <li className={styles.unvisible} />
          </ul>
        </div>
      </main>
    </div>
  );
}
