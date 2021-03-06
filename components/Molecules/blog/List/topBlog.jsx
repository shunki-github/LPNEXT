import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Molecules/blogList.module.css";

export function TopComponent(topBlog) {
  if (!topBlog) return;

  return (
    <div className={styles["article--top"]}>
      <Link href={{ pathname: `blog/${topBlog.blogNumber}/` }}>
        <a>
          <Image
            src={topBlog.ogpImage.url}
            alt={`${topBlog.title} topImage`}
            layout="responsive"
            width="100%"
            height="60%"
          />
          <div className={styles["article__content"]}>
            <p className={styles.article__content__category}>
              {topBlog.category.categoryName}
            </p>
            <p className={styles["article__content__title--top"]}>
              {topBlog.title}
            </p>
            <div className={styles["article__content__other--top"]}>
              <p className={"grey"}>by&nbsp;</p>
              <p className={"brand--light"}>{topBlog.author.authorName}</p>
              <p className={"lightgrey"}>・</p>
              <p className={"grey"}>{topBlog.createdAt.split("T")[0]}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
