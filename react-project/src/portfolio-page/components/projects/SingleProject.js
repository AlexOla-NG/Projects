import React from "react";
import shortlyScreenshot from "../../assests/shortlyScreenshot.png";
import Tag from "../about/Tag";

// TODO: stopped here
// import Tag component, render skills array

const SingleProject = (props) => {
  const getSkills = () => {
    return props.skills.map((skill) => {
      return <Tag key={skill} text={skill} />;
    });
  };

  return (
    <article className="single-project-wrapper">
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="skills-wrapper">{getSkills()}</div>
        <div>
          <button className="btn">
            <a href={props.liveDemo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </button>
          <button className="btn">
            <a href={props.githubRepo} target="_blank" rel="noreferrer">
              Github Repo
            </a>
          </button>
        </div>
      </div>
      <img src={props.img} alt={props.title} />
    </article>
  );
};

export default SingleProject;

SingleProject.defaultProps = {
  title: "URL Shortening API Landing Page",
  description:
    "For when you need to shorten url links. This project is a coding challenge from frontendmentor.io",
  img: shortlyScreenshot,
  liveDemo: "https://u6vmnn.csb.app/",
  githubRepo:
    "https://github.com/AlexOla-NG/React-Project-URL-API-Landing-Page",
  skills: ["React JS", "Material UI", "CSS", "RESTful API"],
};
