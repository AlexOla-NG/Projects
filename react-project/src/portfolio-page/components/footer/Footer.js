import React from "react";

import "./footer.css";
import SocialMediaList from "./SocialMediaList";

const Footer = () => {
  return (
    <section className="footer-section-wrapper">
      <div className="article">
        <h1>alexander oweka</h1>
        <p>
          Front End Developer with an eye for design and deep understanding of
          usability goals.
        </p>
      </div>
      <SocialMediaList />
    </section>
  );
};

export default Footer;
