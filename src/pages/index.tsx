import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Cai</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.display}`}>Display: Lorem, ipsum dolor sit amet</h1>
        <h1 className={`${styles.h1}`}>Heading 1: Lorem, ipsum dolor sit amet</h1>
        <h2 className={`${styles.h2}`}>Heading 2: Lorem, ipsum dolor sit amet</h2>
        <h3 className={`${styles.h3}`}>Heading 3: Lorem, ipsum dolor sit amet</h3>
        <p className={`${styles.body}`}>Body: Lorem, ipsum dolor sit amet</p>
        <p className={`${styles.bodyAlt}`}>Body Alt: Lorem, ipsum dolor sit amet</p>
        <div className={`${styles.box1}`}>Box 1</div>
        <div className={`${styles.box2}`}>Box 2</div>
        <div className={`${styles.box3}`}>Box 3</div>
      </main>
    </>
  );
}
