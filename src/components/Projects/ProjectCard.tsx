import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo },
}: {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
  };
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          style={{ borderRadius: "10px" }}
        />
        <div>
          <h3 className={styles.title} style={{ fontSize: "30px" }}>
            {title}
          </h3>
          <p style={{ fontSize: "20px" }} className={styles.description}>
            {description}
          </p>
        </div>
      </div>
      <ul className={styles.skills}>
        {skills?.map((skill: any, id: number) => {
          return (
            <li key={id} className={styles.skill} style={{ fontSize: "18px" }}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <a
          target="_blank"
          href={demo}
          style={{
            color: "white",
            backgroundColor: "#576cbc",
            padding: "5px",
            borderRadius: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontSize: "14px",
          }}
        >
          Demo
        </a>
        {/* <a href={source} className={styles.link}>
          Source
        </a> */}
      </div>
    </div>
  );
};
