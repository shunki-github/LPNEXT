import { JA, EN } from "@/components/Molecules/i18n";
import {BigLogo} from "@/components/Molecules/logo";
import styles from "@/styles/Organisms/unHomeHeader.module.css";

export function Header(locale, asPath) {
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
