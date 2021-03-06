import Image from "next/image";
import styles from "@/styles/Molecules/contentTopImage.module.css";

export function TopImage(blog) {
  if (!blog) return <div />;

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
