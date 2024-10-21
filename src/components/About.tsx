import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import headshot from "../../public/images/headshot.jpg";
export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.about}>
      {isMobile && <h1 className={styles.h1}>About</h1>}
      <Image src={headshot} alt="headshot" className={styles.headshot}></Image>

      <div className={styles.text}>
        {!isMobile && <h1 className={styles.h1}>About</h1>}
        <h3 className={styles.h3}>Hello there!</h3>
        <p className={styles.description}>
          I&apos;m Martin, a full-stack developer with a passion for building smart solutions to real-world problems.
          I&apos;m currently a 5th year Computer Science student at the University of British Columbia.
        </p>
        <p className={styles.description}>
          Outside of my academic and professional life, you can often find me organizing hackathons with my friends at{" "}
          <a className={styles.link} href="https://nwplus.io" target="_blank" rel="noopener noreferrer">
            nwPlus
          </a>
          , turning fleeting moments into lasting memories with my camera 📸, or whisking up a matcha latte 🍵!
        </p>
      </div>
    </div>
  );
}
