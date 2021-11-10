import { JA, EN } from "../../Molecules/I18n";
import BigLogo from "../../Molecules/logo";
import styles from "./Header.module.css";

export default function Header(locale, asPath) {
  return (
    <div className={styles.container}>
      {BigLogo()}
      <div className={styles.language}>
        <div className={styles.language__JA}>{JA(locale, asPath)}</div>
        <div className={styles.language__EN}>{EN(locale, asPath)}</div>
      </div>
    </div>
  );
}
