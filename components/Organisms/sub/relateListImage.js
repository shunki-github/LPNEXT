import Link from "next/link";
import Image from "next/image";
import styles from "./Sub.module.css";

export default function RelateListImage(rawRelated, from = "") {
  return rawRelated.map((relate) => (
    <div key={relate.key} className={styles["card-image"]}>
      <Link href={from + relate.blogNumber.toString()} passHref={true}>
        <div>
          <Image
            src={relate.ogpImage.url}
            alt={`${relate.title} topImage`}
            layout="responsive"
            width="100%"
            height="65%"
          />
          <div className={styles["card-image__text-box"]}>
            <p>{relate.createdAt.split("T")[0]}</p>
            <h4>{relate.title}</h4>
          </div>
        </div>
      </Link>
    </div>
  ));
}
