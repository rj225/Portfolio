import React from "react";

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
        <li >
          
          <a href="mailto:rajrishabh225@email.com@email.com">
            <img src={getImageUrl("contact/emailIcon.png")} className={styles.gmail} alt="Email icon" />
            </a>
        </li>
        <li >
          <a href="https://www.linkedin.com/in/rishabh-raj-875327282"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon" className={styles.linkedin} />
            </a>
        </li>
        <li >
          <a href="https://www.github.com/rj225">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className={styles.git} />
            </a>
        </li>
      </ul>
    </footer>

    
  );
};
