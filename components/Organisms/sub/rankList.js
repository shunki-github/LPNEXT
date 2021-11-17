import Link from "next/link";
import styles from "./sub.module.css";

export default function RankList(rawRanking, from = "") {
  return rawRanking.map((rank) => (
    <div key={rank.key} className={styles["side-unit"]}>
      <Link href={from + rank.blog.blogNumber.toString()}>
        <a>{rank.blog.title}</a>
      </Link>
    </div>
  ));
}
