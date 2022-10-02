import React from "react";
import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import LinkParent from "./components/api request/LinkParent";
import MidSegment from "./components/mid segment/MidSegment";

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      <Hero />

      <Box sx={{ mx: "auto", px: 1.5 }}>
        <LinkParent />
        <MidSegment />
      </Box>
    </Container>
  );
};

export default HomePage;
