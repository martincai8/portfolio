import React from "react";
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
          extra="StormHacks 2023 (1st Place)"
        />
      </div>
    </div>
  );
}
