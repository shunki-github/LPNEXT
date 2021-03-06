/* eslint-disable */
import { RichText } from "@graphcms/rich-text-react-renderer";
import styles from "@/styles/Molecules/contentDesc.module.css";

export function ContentDesc(descContents) {
  return (
    <div className={styles.desc}>
      <RichText
        content={descContents}
        renderers={{
          h1: ({ children }) => <h1 className={styles.body__h1}>{children}</h1>,
          h2: ({ children }) => <h2 className={styles.body__h2}>{children}</h2>,
          h3: ({ children }) => <h3 className={styles.body__h3}>{children}</h3>,
          h4: ({ children }) => <h4 className={styles.body__h4}>{children}</h4>,
          h5: ({ children }) => <h5 className={styles.body__h5}>{children}</h5>,
          h6: ({ children }) => <h6 className={styles.body__h6}>{children}</h6>,
          p: ({ children }) => <p className={styles.body__p}>{children}</p>,
          bold: ({ children }) => <strong>{children}</strong>,
          code: ({}) => <br />,
        }}
      />
    </div>
  );
}
