import React from "react";
import "../about/about.css";
import ReusableHeader from "../ReusableHeader";

// TODO: for project description
// add screenshot of project
// reference skills used
// short description
// add resume link to about section

const Projects = () => {
  const projectProps = {
    header: "projects",
    paragraph:
      "Here you will find some of the personal & clients projects that I created with each project containing links to a github repo and live demo",
  };

  return (
    <section className="about-section-wrapper" id="projects">
      <ReusableHeader {...projectProps} />
      <div>
        {/* <MoreInfo />
        <MySkills /> */}
      </div>
    </section>
  );
};

export default Projects;
