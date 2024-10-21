import styles from "@/styles/Experience.module.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.cards}>
        <ExperienceCard
          company="Shopify"
          logo="/images/shopify.svg"
          roles={[
            {
              title: "(Incoming) Software Engineer Intern",
              startDate: "JAN 2025",
              endDate: "APR 2025",
              description: ["more details to come!"]
            }
          ]}
        />
        <ExperienceCard
          company="SAP"
          logo="/images/sap.png"
          roles={[
            {
              title: "Full-Stack Software Engineer Intern",
              startDate: "JAN 2024",
              endDate: "AUG 2024",
              description: [
                "Engineered React components and Go REST APIs to enable the phased rollout of SAP Concur's redesigned homepage, enhancing the user experience for 66 million users globally and driving a 12% boost in user satisfaction",
                "Developed customer-facing features using React, Redux, and Typescript for Concur's AI-assisted hotel booking ﬂow, streamlining the reservation process",
                "Implemented robust analytics tracking for the homepage and created dashboards to monitor user behavior, enabling data-driven decisions throughout rollout phases"
              ]
            }
          ]}
        />
        <ExperienceCard
          company="Later"
          logo="/images/later.png"
          roles={[
            {
              title: "Backend Engineer Intern",
              startDate: "MAY 2022",
              endDate: "DEC 2022",
              description: [
                "Architected and implemented a robust media pipeline using Ruby on Rails and AWS S3 to efﬁciently process and store high volumes of user-uploaded images, slashing implementation time for future projects by 92%",
                "Leveraged the media pipeline to allow over 800 brands to add images to their inﬂuencer marketing campaigns",
                "Boosted customer engagement by 15%+ through the implementation of personalized transactional emails, notifying brands of new applicants to their campaigns",
                "Led successful upgrade of the backend codebase from Ruby 2 to 3, updating 50+ gem dependencies and refactoring outdated code for improved performance and maintainability"
              ]
            }
          ]}
        />
        <ExperienceCard
          company="nwPlus UBC"
          logo="/images/nwplus.png"
          roles={[
            {
              title: "Software Developer",
              startDate: "APR 2024",
              endDate: "PRESENT",
              description: ["Building tools to support 3000+ students annually"]
            },
            {
              title: "Co-President",
              startDate: "APR 2023",
              endDate: "MAR 2024",
              description: [
                "Led and managed 50 members in 8 subteams to enable the execution of 3 of Western Canada's largest hackathons (HackCamp, nwHacks, and cmd-f)"
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
