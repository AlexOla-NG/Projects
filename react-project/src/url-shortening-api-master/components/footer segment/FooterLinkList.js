import React from "react";
import { Stack, Typography } from "@mui/material";
import FooterLink from "./FooterLink";

// TODO: render list of FooterLinks here
// define defaultProps

const FooterLinkList = ({ content }) => {
  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Typography variant="h6" sx={{ color: "secondary.main", py: 2 }}>
        {content.title}
      </Typography>
      {content.bodyText.map((item) => (
        <FooterLink key={item} bodyText={item} />
      ))}
    </Stack>
  );
};

export default FooterLinkList;

FooterLinkList.defaultProps = {
  content: {
    title: "Features",
    bodyText: ["Link Shortening", "Branded Links", "Analytics"],
  },
};
