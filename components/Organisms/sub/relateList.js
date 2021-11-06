import Link from "next/link";
import styles from "./sub.module.css"

export default function relatedList(
  rawRelated
) {
    return rawRelated.map((relate) => (
      <div key={relate.key} className={styles["side-unit"]}>
        <Link href={relate.blogNumber.toString()} passHref={true}>
            <div><p>{relate.title}</p></div>
        </Link>
      </div>
    ));
}
