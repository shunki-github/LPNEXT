import Link from "next/link";

export default function relatedList(
  styles,
  relatedBlogs,
  rawRelated,
  preparationText
) {
  if (relatedBlogs.length === 0) {
    return (
      <div className={styles.sub__preparation}>
        <p>{preparationText}</p>
      </div>
    );
  } else {
    return rawRelated.map((relate) => (
      <div key={relate.key}>
        <Link href={relate.blogNumber.toString()}>
          <div className={styles.side__unit}>
            <p>{relate.title}</p>
          </div>
        </Link>
      </div>
    ));
  }
}
