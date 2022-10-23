import React from "react";
import getEmoji from "../helpers";

// STUB: reusable component to hold header & paragraph text

const ReusableHeader = (props) => {
  return (
    <article className="reusable-header">
      <h2>{props.header}</h2>
      <span>{getEmoji()}</span>
      <p>{props.paragraph}</p>
    </article>
  );
};

export default ReusableHeader;

ReusableHeader.defaultProps = {
  header: "about me",
  paragraph:
    "Here you will find more information about me, what I do, and my current skills mostly in terms of programming & technology",
};
