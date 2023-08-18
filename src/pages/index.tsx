import Head from "next/head";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
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
      <Navbar />
      <Intro />
    </>
  );
}
