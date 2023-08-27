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
          I&apos;m Martin, a full-stack developer with a passion for building products to improve the lives of those
          around me. I&apos;m currently pursuing a degree in Computer Science as a 4th year student at the University of
          British Columbia.
        </p>
        <p className={styles.description}>
          I&apos;m passionate about harnessing my skills to empower others and create positive impacts in the community.
          This passion shines through in my personal projects as well as in the hackathons I&apos;ve had the pleasure of
          organizing with my friends at nwPlus.
        </p>
        <p className={styles.description}>
          Outside of my academic and professional life, you can often find me playing ultimate frisbee 🥏, exploring the
          beauty of nature through hiking 🏔️, or whisking up a matcha latte 🍵!
        </p>
      </div>
    </div>
  );
}
