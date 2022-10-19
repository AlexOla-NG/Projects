import React from "react";
import getEmoji from "../../helpers";

// STUB: reusable component to hold header & paragraph text

const HeaderParagaph = (props) => {
  return (
    <article className="header-paragraph">
      <h2>{props.header}</h2>
      <span>{getEmoji()}</span>
      <p>{props.paragraph}</p>
    </article>
  );
};

export default HeaderParagaph;

HeaderParagaph.defaultProps = {
  header: "about me",
  paragraph:
    "Here you will find more information about me, what I do, and my current skills mostly in terms of programming & technology",
};
