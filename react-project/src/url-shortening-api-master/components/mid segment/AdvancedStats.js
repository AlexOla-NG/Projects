import React from "react";
import { Box, Typography } from "@mui/material";

const mobileStyle = {
  display: {
    xs: "block",
    md: "none",
  },
};
const desktopStyle = {
  display: {
    xs: "none",
    md: "block",
  },
  mt: "5em",
};

const AdvancedStats = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* mobile screen */}
      <Box sx={mobileStyle}>
        <Typography
          component="h2"
          sx={{
            color: "neutral.veryDarkViolet",
            my: 1.5,
            lineHeight: 1,
            fontWeight: 800,
            fontSize: "1.6rem",
          }}
        >
          Advanced Statistics
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            color: "neutral.grayishViolet",
            lineHeight: 1.73,
          }}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </Box>

      {/* desktop screen */}
      <Box sx={desktopStyle}>
        <Typography
          component="h2"
          sx={{
            color: "neutral.veryDarkViolet",
            my: 1.5,
            lineHeight: 1,
            fontWeight: 800,
            fontSize: "2.1rem",
          }}
        >
          Advanced Statistics
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            color: "neutral.grayishViolet",
            lineHeight: 1.73,
            fontSize: "1rem",
          }}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </Box>
    </div>
  );
};

export default AdvancedStats;
