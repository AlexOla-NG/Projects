import React from "react";
import shortlyScreenshot from "../../assests/shortlyScreenshot.png";

// TODO: stopped here
// import Tag component, render skills array

const SingleProject = (props) => {
  return (
    <article>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div>
        <button>
          <a href={props.liveDemo}>Live Demo</a>
        </button>
        <button>
          <a href={props.githubRepo}>Github Repo</a>
        </button>
      </div>
    </article>
  );
};

export default SingleProject;

SingleProject.defaultProps = {
  title: "URL Shortening API Landing Page",
  description: "This ",
  img: shortlyScreenshot,
  liveDemo: "https://u6vmnn.csb.app/",
  githubRepo:
    "https://github.com/AlexOla-NG/React-Project-URL-API-Landing-Page",
  skills: ["React JS", "Material UI", "CSS", "RESTful API"],
};
