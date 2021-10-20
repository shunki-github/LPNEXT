import { RichText } from "@graphcms/rich-text-react-renderer";

export default function contentBody(styles, blog, bodyContents) {
  if (blog === undefined) {
    return <p />;
  } else {
    const toc__style = `
      .toc__list__item li {
          margin-top: 20px;
      }
  `;
    return (
      <>
        {blog.tocVisible ? (
          <>
            <nav
              className={`${styles.toc} toc`}
              style={{ fontSize: "16px", fontWeight: "600" }}
            />
            <style>{toc__style}</style>
          </>
        ) : (
          <div style={{ height: "50px" }} />
        )}
        <div className={`${styles.content__main__body} content__main__body`}>
          <div className={styles.content__main__body__bigBox}>
            <RichText
              content={bodyContents}
              renderers={{
                h1: ({ children }) => (
                  <h1 id={children} className={styles.body__h1}>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 id={children} className={styles.body__h2}>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 id={children} className={styles.body__h3}>
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 id={children} className={styles.body__h4}>
                    {children}
                  </h4>
                ),
                h5: ({ children }) => (
                  <h5 id={children} className={styles.body__h5}>
                    {children}
                  </h5>
                ),
                h6: ({ children }) => (
                  <h6 id={children} className={styles.body__h6}>
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p id={children} className={styles.body__p}>
                    {children}
                  </p>
                ),
                bold: ({ children }) => <strong>{children}</strong>,
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
