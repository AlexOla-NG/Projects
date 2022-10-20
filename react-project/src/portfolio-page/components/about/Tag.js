import React from "react";

const Tag = ({ text }) => {
  return <span>{text}</span>;
};

export default Tag;

Tag.defaultProps = {
  text: "HTML",
};
