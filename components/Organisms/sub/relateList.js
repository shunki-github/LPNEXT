import Link from "next/link";
import styles from "./sub.module.css";

export default function RelateList(rawRelated, from = "") {
  return rawRelated.map((relate) => (
    <div key={relate.key} className={styles["side-unit"]}>
      <Link href={from + relate.blogNumber.toString()}>
        <a>
          <p>{relate.title}</p>
        </a>
      </Link>
    </div>
  ));
}
