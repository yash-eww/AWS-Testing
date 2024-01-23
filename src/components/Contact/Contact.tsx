import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yp87844@email.com">yp87844@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yash-patel-b4baa9268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            linkedin.com/yash-patel
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://github.com/yashpatel06">
            github.com/yashpatel06
          </a>
        </li>
      </ul>
    </footer>
  );
};
