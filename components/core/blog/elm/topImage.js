import Image from "next/image"

export default function topImage(styles, blog) {
  if (blog === undefined) return <div />;

  return (
    <div className={styles.topImageBox}>
      <Image
      src={blog.ogpImage.url}
      className={styles.content__main__topImage}
      alt={`${blog.title} topimage`}
      layout="responsive"
      width="700px"
      height="400px"
      />
    </div>
  );
}

//<Image
//src={blog.ogpImage.url}
//className={styles.content__main__topImage}
//alt={`${blog.title} topimage`}
//layout="responsive"
//width="700px"
//height="400px" />

