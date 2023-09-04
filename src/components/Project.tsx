import styles from "@/styles/Project.module.css";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cards}>
        <ProjectCard
          name="Expawdition"
          startDate="MAY 2023"
          endDate="PRESENT"
          description={[
            "Expawdition is a smart trip planner designed to streamline the process of organizing outings, eliminating the usual hassles of planning, optimizes travel routes, and maximizes the value of each trip",
            "By answering a few questions about preferences, budget, transportation methods, and accessibility needs, users will receive a personalized hour-by-hour itinerary"
          ]}
          tags={["Node.js", "Express", "React", "Next.js", "Typescript", "Firebase", "GPT-4"]}
          link="https://devpost.com/software/expawdition"
          extra="StormHacks 2023 — 1st Place"
        />

        <ProjectCard
          name="SketchConnect"
          startDate="MAY 2023"
          endDate="AUG 2023"
          description={[
            "SketchConnect is a entertaining and interactive game for groups of four, where players sequentially draw in designated parts of a 2x2 grid",
            "Players can only see a tiny portion of neighbouring sections, and upon completion, all segments merge, revealing the final artwork"
          ]}
          tags={["React", "Redux", "Node.js", "Express", "Javascript", "MongoDB"]}
          link="https://github.com/SketchConnect/sketch-connect"
          extra=""
        />

        <ProjectCard
          name="Grounded"
          startDate="JAN 2022"
          endDate=""
          description={[
            "Grounded is a web app that offers grounding exercises based on panic attack ﬁrst-aid, helping users stabilize their mental state during times of distress"
          ]}
          tags={["Javascript", "Python", "Flask"]}
          link="https://devpost.com/software/grounded-o92aiz"
          extra="Stormhacks 2022 — Best UI/UX"
        />

        <ProjectCard
          name="Materials Inventory"
          startDate="JUL 2021"
          endDate="AUG 2021"
          description={[
            "Designed and developed a web-based database management system to efficiently track inventory for a local jewelry business"
          ]}
          tags={["Python", "Flask", "PostgreSQL"]}
          link="https://devpost.com/software/grounded-o92aiz"
          extra=""
        />
      </div>
    </div>
  );
}
