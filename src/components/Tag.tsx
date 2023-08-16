import React from "react";

interface TagProps {
  skill: keyof typeof logos;
}

const logos = {
  React: "/logos/react.png",
  Node: "/logos/node.png",
  Express: "/logos/express.png"
};

export default function Tag({ skill }: TagProps) {
  const logo = logos[skill];
  return (
    <div className="tag">
      <img src={logo} alt={skill} />
    </div>
  );
}
