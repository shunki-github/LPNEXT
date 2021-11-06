/* eslint-disable */
import { RichText } from "@graphcms/rich-text-react-renderer";
import styles from "./contentbody.module.css"

export default function contentBody(blog, bodyContents) {

    return (
      <>
        {blog.tocVisible ? (
          <>
            <div className={styles.toc}>
                <h2>{blog.title}</h2>
                <nav
                className={`${styles.toc} toc`}
                style={{ paddingLeft: "20px",fontSize: "16px", fontWeight: "500" }}
                />
            </div>
          </>
        ) : (
          <div style={{ height: "50px" }} />
        )}
        <div className={`${styles.content} content__main__body`}>
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
                  <h2 id={children.props.content["0"].text} className={styles.body__h2}>
                      {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 id={children.props.content["0"].text} className={styles.body__h3}>
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 id={children.props.content["0"].text} className={styles.body__h4}>
                    {children}
                  </h4>
                ),
                h5: ({ children }) => (
                  <h5 id={children.props.content["0"].text} className={styles.body__h5}>
                    {children}
                  </h5>
                ),
                h6: ({ children }) => (
                  <h6 id={children.props.content["0"].text} className={styles.body__h6}>
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className={styles.body__p}>
                    {children}
                  </p>
                ),
                bold: ({ children }) => <strong>{children}</strong>,
                a: ({ children, href, openInNewTab }) => (
                    <a href={href} target={openInNewTab ? '_blank' : '_self'} >
                        {children}
                    </a>
                )
              }}
            />
          </div>
        </div>
      </>
    );
}
