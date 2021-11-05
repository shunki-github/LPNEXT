import Link from "next/link";
import Image from 'next/image'

export default function categoryList(topBlog, styles, blogs, preparationText) {
  if (topBlog === undefined) {
    return (
      <div className={styles.main__preparation}>
        <p>{preparationText}</p>
      </div>
    );
  } else {
    return blogs.map((blogelm) => (
      <div key={blogelm.blogNumber} className={styles.blog__list__unit}>
        <Link href={{
          pathname: `blog/${blogelm.blogNumber}/`}} passHref={true}>
          <div className={styles.blog__list__unit__card}>
            <Image
              src={blogelm.ogpImage.url}
              className={styles.blog__list__unit__card__image}
              alt={`${blogelm.title} topImage`}
              layout="responsive"
              width="100%"
              height="60%"
            />
            <div className={styles.blog__list__unit__content}>
              <p className={styles.blog__list__unit__card__category}>
                {blogelm.category.categoryName}
              </p>
              <p className={styles.blog__list__unit__card__title}>
                {blogelm.title}
              </p>
              <div className={styles.blog__list__unit__card__bottom}>
                <p className={styles.blog__grey}>by&nbsp;</p>
                <p className={styles.blog__author}>
                  {blogelm.author.authorName}
                </p>
                <p className={styles.blog__lightgrey}>・</p>
                <p className={styles.blog__grey}>
                  {blogelm.createdAt.split("T")[0]}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
  }
}
