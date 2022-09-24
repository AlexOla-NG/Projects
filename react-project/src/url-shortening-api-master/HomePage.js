import React from "react";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import LinkForm from "./components/form/LinkForm";

// TODO: stopped here
// build custom icon component

const HomePage = () => {
  return (
    <Box sx={{ px: { xs: 0, md: 3 }, width: "100%" }}>
      <ResponsiveAppBar />
      <Hero />
      <LinkForm />
    </Box>
  );
};

export default HomePage;
