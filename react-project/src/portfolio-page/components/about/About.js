import React from "react";
import "./about.css";
import ReusableHeader from "./ReusableHeader";
import MoreInfo from "./MoreInfo";
import MySkills from "./MySkills";

// TODO: stopped here
// set div display to grid
// adjust layout accordingly

const About = () => {
  return (
    <section className="about-section-wrapper" id="about">
      <ReusableHeader />
      <div>
        <MoreInfo />
        <MySkills />
      </div>
    </section>
  );
};

export default About;
