import React from "react";
import "./about.css";
import HeaderParagaph from "./HeaderParagaph";
import MoreInfo from "./MoreInfo";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="about-section-wrapper" id="about">
      <HeaderParagaph />
      <div>
        <MoreInfo />
        <Skills />
      </div>
    </section>
  );
};

export default About;
