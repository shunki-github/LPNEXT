import Link from "next/link";
import Image from "next/image";
import styles from "./article.module.css";

export default function BlogList(blogs) {
  return blogs.map((blogelm) => (
    <div key={blogelm.blogNumber} className={styles.article}>
      <Link href={{ pathname: `blog/${blogelm.blogNumber}/` }}>
        <a>
          <Image
            src={blogelm.ogpImage.url}
            alt={`${blogelm.title} topImage`}
            layout="responsive"
            width="100%"
            height="60%"
          />
          <div className={styles.article__content}>
            <p className={styles.article__content__category}>
              {blogelm.category.categoryName}
            </p>
            <p className={styles.article__content__title}>{blogelm.title}</p>
            <div className={styles.article__content__other}>
              <p className={"grey"}>by&nbsp;</p>
              <p className={"brand--light"}>{blogelm.author.authorName}</p>
              <p className={"lightgrey"}>・</p>
              <p className={"grey"}>{blogelm.createdAt.split("T")[0]}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  ));
}
