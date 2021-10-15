import Link from "next/link";
import Image from 'next/image'

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
          <div className={styles.footer__content__relate__unit}>
            <Image
              className={styles.footer__content__relate__unit__image}
              src={relate.ogpImage.url}
              alt={`${relate.title} topImage`}
              layout="responsive"
              width="100%"
              height="65%"
            />
            <div className={styles.footer__content__relate__unit__textbox}>
              <p>{relate.createdAt.split("T")[0]}</p>
              <h2>{relate.title}</h2>
            </div>
          </div>
        </Link>
      </div>
    ));
  }
}
