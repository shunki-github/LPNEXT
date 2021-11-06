import { JA, EN } from "../../Molecules/i18n"
import bigLogo from "../../Molecules/logo"
import styles from "./header.module.css"

export default function Header(locale, asPath) {
    return (
        <div className={styles.container}>
        {bigLogo()}
        <div className={styles.language}>
          <div className={styles.language__JA}>{JA(locale, asPath)}</div>
          <div className={styles.language__EN}>{EN(locale, asPath)}</div>
        </div>
      </div>
    )
}
