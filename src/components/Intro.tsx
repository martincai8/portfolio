import styles from "@/styles/Intro.module.css";
import ProfileIcons from "./ProfileIcons";
import { m } from "framer-motion";
import cartoon from "../../public/images/cartoon.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const descriptions = [
  "a 5th year CS student.",
  1000,
  "a software developer.",
  1000,
  "a hackathon organizer.",
  1000,
  "a sports nerd.",
  1000,
  "a photographer.",
  1000
];

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introText}>
        <h1 className={styles.text}>
          Hi, I&apos;m Martin
          <m.div
            className={styles.wave}
            animate={{ rotate: [0, 15, 0] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              type: "tween"
            }}
          >
            👋
          </m.div>
        </h1>

        <TypeAnimation
          className={styles.descriptionText}
          sequence={descriptions}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={25}
        />

        <div className={styles.profileIcons}>
          <ProfileIcons />
        </div>
      </div>

      <Image className={styles.cartoon} src={cartoon} alt="cartoon"></Image>
    </div>
  );
}
