import Image from "next/image";
import styles from "./topImage.module.css";

export default function TopImage(blog) {
  if (blog === undefined) return <div />;

  return (
    <div className={styles.container}>
      <Image
        src={blog.ogpImage.url}
        alt={`${blog.title} topimage`}
        layout="responsive"
        width="700px"
        height="400px"
      />
    </div>
  );
}
