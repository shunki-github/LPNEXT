import { MdMail } from "react-icons/md";
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from "react-share";
import styles from "@/styles/Molecules/share.module.css";

export function ShareList(data, asPath) {
  if (!data) return <div />;

  return (
    <div className={styles.share}>
      <EmailShareButton url={`dev.oovo.app${asPath}`} body={data.title}>
        <div className={`${styles.icon} ${styles.mail}`}>
          <MdMail color="white" fontSize="1.3rem" />
        </div>
      </EmailShareButton>
      <PinterestShareButton
        url={`dev.oovo.app${asPath}`}
        media={data.ogpImage.url}
        description={data.title}
      >
        <div className={`${styles.icon} ${styles.pinterest}`}>
          <FaPinterestP color="white" fontSize="1.1rem" />
        </div>
      </PinterestShareButton>
      <FacebookShareButton
        url={`dev.oovo.app${asPath}`}
        title={data.title}
        hashtag="oovo"
      >
        <div className={`${styles.icon} ${styles.facebook}`}>
          <FaFacebookF color="white" fontSize="1.1rem" />
        </div>
      </FacebookShareButton>
      <TwitterShareButton
        url={`dev.oovo.app${asPath}`}
        title={data.title}
        hashtags={["oovo", data.category]}
      >
        <div className={`${styles.icon} ${styles.twitter}`}>
          <FaTwitter color="white" fontSize="1.1rem" />
        </div>
      </TwitterShareButton>
      <LinkedinShareButton
        url={`dev.oovo.app${asPath}`}
        source={`dev.oovo.app${asPath}`}
        summary={data.title}
      >
        <div className={`${styles.icon} ${styles.linkedin}`}>
          <FaLinkedinIn color="white" fontSize="1.1em" />
        </div>
      </LinkedinShareButton>
    </div>
  );
}
