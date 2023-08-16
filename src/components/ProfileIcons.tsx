import React from "react";
import styles from "@/styles/ProfileIcons.module.css";

export default function ProfileIcons() {
  return (
    <div className={styles.icons}>
      <a href="https://www.linkedin.com/in/martincai-ubc/" target="_blank" rel="noreferrer">
        <img src="/images/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/martincai8" target="_blank" rel="noreferrer">
        <img src="/images/github.svg" alt="GitHub" />
      </a>
      <a href="mailto:martincai46@gmail.com">
        <img src="/images/mail.svg" alt="Email" />
      </a>
    </div>
  );
}
