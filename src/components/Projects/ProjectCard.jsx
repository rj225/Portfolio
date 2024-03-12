import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  // console.log(id);
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <h5 className={styles.flex}>
      {skills.map((skill, id) => {
          return (
            <p key={id} className={styles.stack}>
              {skill}
            </p>
            
          );
        })}
      </h5>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
