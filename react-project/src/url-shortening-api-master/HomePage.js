import React from "react";
import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import LinkForm from "./components/form/LinkForm";
import SingleOutput from "./components/output/SingleOutput";

// TODO: stopped here
// build custom icon component

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      <Hero />

      <Box sx={{ mx: "auto", px: 1.5 }}>
        <LinkForm />
        <SingleOutput />
      </Box>
    </Container>
  );
};

export default HomePage;
