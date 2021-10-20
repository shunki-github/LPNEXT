import Link from "next/link";
import Image from 'next/image'

export default function topComponent(styles, topBlog) {
  if (topBlog === undefined) return;

  return (
    <div className={styles.blog__top}>
      <Link
      href={{
        pathname: `blog/${topBlog.blogNumber}/`
      }}
      passHref={true}
      >
          <div className={styles.blog__list__unit__card}>
        <div className={styles.blog__top__card}>
          <Image src={topBlog.ogpImage.url} className={styles.blog__top__image} alt={`${topBlog.title} topImage`} layout="responsive"
              width="100%"
              height="60%"/>
          <div className={styles.blog__top__content}>
            <p className={styles.blog__top__category}>
              {topBlog.category.categoryName}
            </p>
            <p className={styles.blog__top__title}>{topBlog.title}</p>
            <div className={styles.blog__top__bottom}>
              <p className={styles.blog__grey}>by&nbsp;</p>
              <p className={styles.blog__author}>{topBlog.author.authorName}</p>
              <p className={styles.blog__lightgrey}>・</p>
              <p className={styles.blog__grey}>
                {topBlog.createdAt.split("T")[0]}
              </p>
            </div>
          </div>
        </div>
        </div>
      </Link>
    </div>
  );
}
