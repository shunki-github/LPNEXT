import styles from "./sub.module.css"

export default function rankingList(
  rawRanking
) {
    return rawRanking.map((rank) => (
      <div key={rank.key} className={styles["side-unit"]}>
        <p>{rank.blog.title}</p>
      </div>
    ));
}
