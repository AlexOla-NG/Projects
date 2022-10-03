import React from "react";
import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import LinkParent from "./components/api request/LinkParent";
import MidSegment from "./components/mid segment/MidSegment";

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ pr: 0 }}>
      <ResponsiveAppBar />
      <Hero />

      <Box sx={{ mx: "auto", px: 6 }}>
        <LinkParent />
        <MidSegment />
      </Box>
    </Container>
  );
};

export default HomePage;
