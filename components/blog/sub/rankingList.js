export default function rankingList(
  styles,
  ranking,
  rawRanking,
  preparationText
) {
  if (ranking.length === 0) {
    return (
      <div className={styles.sub__preparation}>
        <p>{preparationText}</p>
      </div>
    );
  } else {
    return rawRanking.map((rank) => (
      <div key={rank.key} className={styles.side__unit}>
        <p>{rank.blog.title}</p>
      </div>
    ));
  }
}
