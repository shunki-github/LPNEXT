import styles from "../../styles/component/Logo.module.css"
import Image from "next/image"
import Link from "next/link"

export default function bigLogo() {

  return (
    <Link
    href={{
      pathname: `/`
    }}
    passHref={true}
    >
      <div className={styles.big}>
        <div className={styles.big__icon}>
          <Image src={`${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}`} alt="Makaseru icon" layout="fill" objectPosition="50% 50%" loading="eager" />
        </div>
        <div className={styles.big__name}>
          <Image src={`${process.env.NEXT_PUBLIC_LOGO_NAME_PATH}`} alt="Makaseru logo" layout="fill" objectPosition="50% 50%" loading="eager" />
        </div>
      </div>
    </Link>
  );
}

export function midiumLogo() {
  return (
    <div className={styles.midium}>
      <div className={styles.midium_icon} >
          <Image src={`${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}`} alt="Makaseru icon" layout="fill" objectPosition="50% 50%" loading="eager" />
      </div>
      <div className={styles.midium__name} >
          <Image src={`${process.env.NEXT_PUBLIC_LOGO_NAME_PATH}`} alt="Makaseru logo" layout="fill" objectPosition="50% 50%" loading="eager" />
      </div>
    </div>
  );
}
