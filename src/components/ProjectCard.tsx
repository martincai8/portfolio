import React from "react";

interface ProjectCardProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: string[];
  link: string;
  extra: string;
}

export default function ProjectCard({
  title,
  startDate,
  endDate,
  description,
  tags,
  extra
}: ProjectCardProps) {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
