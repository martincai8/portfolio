import React from "react";
import Image from "next/image";
import styles from "@/styles/Tag.module.css";

const logos = {
  React: "/images/react.png",
  "Node.js": "/images/node.png",
  Express: "/images/express.png",
  Firebase: "/images/firebase.png",
  Flask: "/images/flask.png",
  "GPT-4": "/images/gpt.png",
  Javascript: "/images/javascript.png",
  Typescript: "/images/typescript.png",
  MongoDB: "/images/mongodb.png",
  "Next.js": "/images/next.png",
  PostgreSQL: "/images/postgresql.png",
  Python: "/images/python.png",
  Redux: "/images/redux.png"
} as const;

type LogoKeys = keyof typeof logos;

interface TagProps {
  skill: LogoKeys;
}

export default function Tag({ skill }: TagProps) {
  const logo = logos[skill];
  return (
    <div className={styles.tag}>
      <Image src={logo} alt={skill} width={20} height={20} />
      <p className={styles.skill}>{skill}</p>
    </div>
  );
}
