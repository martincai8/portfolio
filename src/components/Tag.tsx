import Image from "next/image";
import styles from "@/styles/Tag.module.css";
import reactLogo from "../../public/images/react.png";
import nodeLogo from "../../public/images/node.png";
import expressLogo from "../../public/images/express.png";
import firebaseLogo from "../../public/images/firebase.png";
import flaskLogo from "../../public/images/flask.png";
import gptLogo from "../../public/images/gpt.png";
import javascriptLogo from "../../public/images/javascript.png";
import typescriptLogo from "../../public/images/typescript.png";
import mongoDBLogo from "../../public/images/mongodb.png";
import nextLogo from "../../public/images/next.png";
import postgresqlLogo from "../../public/images/postgresql.png";
import pythonLogo from "../../public/images/python.png";
import reduxLogo from "../../public/images/redux.png";

const logos = {
  React: reactLogo,
  "Node.js": nodeLogo,
  Express: expressLogo,
  Firebase: firebaseLogo,
  Flask: flaskLogo,
  "GPT-4": gptLogo,
  Javascript: javascriptLogo,
  Typescript: typescriptLogo,
  MongoDB: mongoDBLogo,
  "Next.js": nextLogo,
  PostgreSQL: postgresqlLogo,
  Python: pythonLogo,
  Redux: reduxLogo
} as const;

type LogoKeys = keyof typeof logos;

interface TagProps {
  skill: LogoKeys;
}

export default function Tag({ skill }: TagProps) {
  const logo = logos[skill];
  return (
    <div className={styles.tag}>
      <Image src={logo} alt={skill} className={styles.logo} />
      <p className={styles.skill}>{skill}</p>
    </div>
  );
}
