// STUB: contains footer nav links
import React from "react";
import { Avatar, Box, Stack } from "@mui/material";
import FooterLinkList from "./FooterLinkList";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as FacebookLogo } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "../../images/icon-instagram.svg";

// TODO: stopped here
// add footer navlinks
// style background for mobile & desktop screens

const textLinks = [
  {
    title: "Features",
    bodyText: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    bodyText: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    bodyText: ["About", "Our Team", "Careers", "Contact"],
  },
];

const iconLinks = [FacebookLogo, TwitterLogo, PinterestLogo, InstagramLogo];

const containerStyles = {
  backgroundColor: "neutral.veryDarkViolet",
  flexDirection: { xs: "column" },
  py: 6,
  px: 5,
  textAlign: { xs: "center" },
};

const iconListStyles = {
  flexDirection: "row",
  justifyContent: "center",
  py: 3,
};

const Footer = () => {
  return (
    <Stack sx={containerStyles}>
      <Box>
        <Logo fill="white" />
      </Box>
      <Box>
        {textLinks.map((item, index) => {
          return <FooterLinkList key={index} content={item} />;
        })}
      </Box>
      {/* TODO: stopped here
      set each icon to have the same dimensions
      */}
      <Stack sx={iconListStyles}>
        {iconLinks.map((item, index) => {
          return (
            <Avatar
              key={index}
              component={item}
              fill="white"
              variant="square"
              sx={{ backgroundColor: "revert" }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Footer;
