/* eslint-disable */
//import Image from "next/image"

import Link from "next/link";
import styles from "./Logo.module.css";

export default function BigLogo() {
  return (
    <Link
      href={{
        pathname: `/`,
      }}
      passHref={true}
    >
      <div className={styles.big}>
        <div className={styles.big__icon}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_LINK}/MakaseruICON.webp`} alt="Makaseru アイコン" />
        </div>
        <div className={styles.big__name}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_LINK}/MakaseruNAME.webp`} alt="Makaseru ネーム" />
        </div>
      </div>
    </Link>
  );
}

//<Image src={`${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}`} alt="Makaseru アイコン" layout="fixed" width="45px" height="45px" objectPosition="50% 50%" loading="eager" />
//<Image src={`${process.env.NEXT_PUBLIC_LOGO_NAME_PATH}`} alt="Makaseru ネーム" layout="fixed" width="200px" height="60px" objectPosition="50% 50%" loading="eager" />

/*
export function midiumLogo() {
  return (
    <div className={styles.midium}>
      <div className={styles.midium_icon} >
          <Image src={`${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}`} alt="Makaseru アイコン" layout="fixed" width="30px" height="30px" objectPosition="50% 50%" loading="eager" />
      </div>
      <div className={styles.midium__name} >
          <Image src={`${process.env.NEXT_PUBLIC_LOGO_NAME_PATH}`} alt="Makaseru ネーム" layout="fixed" width="150px" height="45px" objectPosition="50% 50%" loading="eager" />
      </div>
    </div>
  );
}
*/
