import React from "react";
import { Box, Typography } from "@mui/material";
import mobileBackgroundShorten from "../../images/bg-shorten-mobile.svg";
import desktopBackgroundShorten from "../../images/bg-shorten-desktop.svg";

// TODO: stopped here
// style BoostBox in mobile & desktop view

const style = {
  // border: "3px solid",
  backgroundImage: {
    xs: `url(${mobileBackgroundShorten})`,
    sm: `url(${desktopBackgroundShorten})`,
  },
  backgroundSize: {
    xs: "70% auto",
    sm: "cover",
  },
  backgroundRepeat: "no-repeat",
  backgroundPosition: {
    xs: "right top",
    sm: "bottom",
  },
  bgcolor: "violetBg.main",
  borderRadius: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "100%",
  px: 6,
  py: 4,
};

const BoostBox = () => {
  return (
    <Box sx={style}>
      <Typography variant="h3">Boost your links today</Typography>
    </Box>
  );
};

export default BoostBox;
