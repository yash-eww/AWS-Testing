import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} style={{ minHeight: "90vh" }}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash</h1>
        <p className={styles.description}>
          Hi there! 👋 I'm a front-end developer with 1.6 years of coding
          experience. I specialize in creating captivating and intuitive user
          interfaces. If you're curious about my journey or want to discuss the
          latest in front-end development, I'm always open for a chat. Let's
          connect!
        </p>
        <a href="mailto:yp87844@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/yash.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{ maxWidth: "350px" }}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
