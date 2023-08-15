import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export default function ExperienceCard({ title, company, logo, startDate, endDate, description }: ExperienceCardProps) {
  return <div></div>;
}
