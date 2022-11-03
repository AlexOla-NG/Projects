import React from "react";
import SocialMediaList from "./SocialMediaList";
import "./footer.css";

// TODO: stopped here
// style footer

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
