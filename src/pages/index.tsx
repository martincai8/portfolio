import Head from "next/head";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import styles from "@/styles/Home.module.css";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

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
      <div className="container">
        <div id="intro">
          <Intro />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Project />
        </div>
      </div>
    </>
  );
}
