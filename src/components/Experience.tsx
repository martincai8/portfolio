import styles from "@/styles/Experience.module.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.cards}>
        <ExperienceCard
          company="Later"
          logo="/images/later.png"
          roles={[
            {
              title: "Backend Developer Intern",
              startDate: "MAY 2022",
              endDate: "DEC 2022",
              description: [
                "Engineered a reusable and scalable media pipeline using Ruby on Rails and AWS S3 to efficiently process and store thousands of user-uploaded images, slashing future development time from days to mere hours",
                "Boosted customer engagement by 15%+ through the implementation of personalized transactional emails, notifying brands of new applicants to their campaigns",
                "Led successful upgrade of the backend codebase from Ruby 2 to 3, updating 50+ gem dependencies and refactoring outdated code for improved performance and maintainability",
                "Developed new features for Later.com's web application by creating custom backend controllers, endpoints, and services"
              ]
            }
          ]}
        />

        <ExperienceCard
          company="nwPlus"
          logo="/images/nwplus.png"
          roles={[
            {
              title: "Co-President",
              startDate: "APR 2023",
              endDate: "PRESENT",
              description: [
                "Leading and managing 50 members of 8 subteams to enable the execution of 3 of Western Canada's largest hackathons (HackCamp, nwHacks, and cmd-f)"
              ]
            },
            {
              title: "nwHacks Logistics Director",
              startDate: "APR 2022",
              endDate: "MAR 2023",
              description: [
                "Successfully led a team of 5 to organize nwHacks 2023, Western Canada's largest hackathon, attracting 650+ participants and 131 project submissions"
              ]
            }
          ]}
        />
      </div>
    </div>
  );
}
