import React from "react";
import styles from "@/styles/SocialIcons.module.css";

function LinkedInIcon() {
  return <img src="/images/l.svg" alt="LinkedIn" />;
}

function GitHubIcon() {
  return <img src="/images/g.svg" alt="GitHub" />;
}

function EmailIcon() {
  return <img src="/images/m.svg" alt="Email" />;
}

export default function SocialIcons() {
  return (
    <div className={styles.icons}>
      <a href="https://www.linkedin.com/in/martincai-ubc/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/martincai8" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
      <a href="mailto:martincai46@gmail.com">
        <EmailIcon />
      </a>
    </div>
  );
}
