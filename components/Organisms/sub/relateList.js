import Link from "next/link";
import styles from "./Sub.module.css";

export default function RelateList(rawRelated, from = "") {
  return rawRelated.map((relate) => (
    <div key={relate.key} className={styles["side-unit"]}>
      <Link href={from + relate.blogNumber.toString()} passHref={true}>
        <div>
          <p>{relate.title}</p>
        </div>
      </Link>
    </div>
  ));
}
