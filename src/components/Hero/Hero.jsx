import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rishabh Raj</h1>
        <p className={styles.description}>
          I'm a <span className={styles.color}>full-stack developer</span> with 6 months of internship experience using React and
          NodeJS. Go ahead and explore my work!
        </p>
        <a href="mailto:rajrishabh225@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
