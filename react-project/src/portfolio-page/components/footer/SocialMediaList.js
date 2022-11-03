import React from "react";

import "./footer.css";
import { ReactComponent as Linkedin } from "../../assests/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assests/icons/github.svg";
import { ReactComponent as Twitter } from "../../assests/icons/twitter.svg";
import { ReactComponent as Medium } from "../../assests/icons/medium.svg";

const SocialMediaList = () => {
  const svgIconsStyle = {
    transform: "translateY(10%)",
  };
  return (
    <ul className="social-media-list">
      <li>
        <a
          href="https://www.linkedin.com/in/alexander-oweka-6bb086166/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <Linkedin style={svgIconsStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/AlexOla-NG"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <Github style={svgIconsStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/OwekaAlexander"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <Twitter style={svgIconsStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@alexanderolalekanoweka"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <Medium style={svgIconsStyle} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaList;
