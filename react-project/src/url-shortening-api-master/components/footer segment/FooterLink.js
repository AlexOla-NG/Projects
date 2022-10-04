import React from "react";
import { Typography } from "@mui/material";

const FooterLink = ({ bodyText }) => {
  console.log(bodyText);
  return (
    <Typography
      variant="body2"
      component="p"
      sx={{
        color: "neutral.grayishViolet",
        lineHeight: 1.8,
        py: 0.7,
      }}
    >
      {bodyText}
    </Typography>
  );
};

export default FooterLink;

FooterLink.defaultProps = {
  bodyText: "FooterLink",
};
