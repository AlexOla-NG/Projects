import React from "react";
import Tag from "./Tag";

const MySkills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Material UI",
    "GIT",
    "Github",
    "Responsive Design",
    "Terminal",
    "Troubleshooting",
    "Research",
  ];

  const getSkills = () => {
    return skills.map((skill) => <Tag key={skill} text={skill} />);
  };

  return (
    <article className="more-info-wrapper">
      <h3>MySkills</h3>
      <div className="skills-wrapper">{getSkills()}</div>
    </article>
  );
};

export default MySkills;
