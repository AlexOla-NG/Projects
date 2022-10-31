import React from "react";
import "../about/about.css";
import "./projects.css";
import ReusableHeader from "../ReusableHeader";
import SingleProject from "./SingleProject";
import shortlyScreenshot from "../../assests/shortlyDesktopPreview.jpg";
import randomAdviceScreenshot from "../../assests/adviceGenDesktopPreview.jpg";

// TODO: for project description
// add screenshot of project
// reference skills used
// short description

// TODO: stopped here
// style Projects component

const Projects = () => {
  const projectHeaderProps = {
    header: "projects",
    paragraph:
      "Here you will find some of the personal & clients projects that I created with each project containing links to a github repo and live demo",
  };

  const projectContentProps = [
    {
      title: "URL Shortening API Landing Page",
      description: "For when you need to shorten url links.",
      img: shortlyScreenshot,
      liveDemo: "https://u6vmnn.csb.app/",
      githubRepo:
        "https://github.com/AlexOla-NG/React-Project-URL-API-Landing-Page",
      skills: ["React JS", "Material UI", "CSS", "API"],
    },
    {
      title: "Advice Generator",
      description: "Roll the die, get a random advice.",
      img: randomAdviceScreenshot,
      liveDemo:
        "https://alexola-ng.github.io/Projects/advice-generator-app-main/index.html",
      githubRepo:
        "https://github.com/AlexOla-NG/Projects/tree/main/advice-generator-app-main",
      skills: ["HTML", "CSS", "Javascript", "API"],
    },
  ];

  const getProject = () => {
    return projectContentProps.map((project, index) => {
      return <SingleProject key={index} {...project} />;
    });
  };

  return (
    <section className="projects-section-wrapper" id="projects">
      <ReusableHeader {...projectHeaderProps} />
      <div>{getProject()}</div>
    </section>
  );
};

export default Projects;
