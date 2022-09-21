import React from "react";
import { Box, Avatar, Paper, Typography } from "@mui/material";
import ChartSvg from "../images/icon-brand-recognition.svg";

// STUB: The CustomIcon component will accept three props:
// icon, title & body
// we will render multiple CustomIcon components by using an array that holds different values for the specified props

const CustomBox = () => {
  return (
    <Paper
      sx={{
        border: "solid",
        maxWidth: "clamp(14.6em, 30vw, 40vw)", // toggles size of Paper depending on screen width
        p: 4,
        position: "relative",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "neutral.veryDarkViolet",
          height: "clamp(3.9em, 8vh, 5vh)",
          width: "clamp(3.9em, 5.5vw, 3.5vw)",
          position: "absolute",
          top: "-40px",
          left: "30px",
        }}
      >
        <img src={ChartSvg} alt="" role="presentation" />
      </Avatar>

      <Box sx={{ mt: 3 }}>
        <Typography
          variant="h5"
          sx={{ color: "neutral.veryDarkViolet", fontWeight: 800, mb: 1.5 }}
        >
          Brand Recognition
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            color: "neutral.grayishViolet",
            fontSize: "1.1rem",
          }}
        >
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </Typography>
      </Box>
    </Paper>

    // desktop view

    // <Paper sx={{ maxWidth: "30vw", px: 4, py: 4, position: "relative" }}>
    //   <Avatar
    //     sx={{
    //       bgcolor: "neutral.veryDarkViolet",
    //       height: "8vh",
    //       width: "5.5vw",
    //       position: "absolute",
    //       top: "-40px",
    //       left: "30px",
    //     }}
    //   >
    //     <img src={ChartSvg} alt="" role="presentation" />
    //   </Avatar>

    //   <Box sx={{ mt: 3 }}>
    //     <Typography
    //       variant="h5"
    //       sx={{ color: "neutral.veryDarkViolet", fontWeight: 800, mb: 1.5 }}
    //     >
    //       Brand Recognition
    //     </Typography>
    //     <Typography
    //       variant="body2"
    //       component="p"
    //       sx={{
    //         color: "neutral.grayishViolet",
    //         fontSize: "1.1rem",
    //       }}
    //     >
    //       Boost your brand recognition with each click. Generic links don't mean
    //       a thing. Branded links help instil confidence in your content.
    //     </Typography>
    //   </Box>
    // </Paper>
  );
};

export default CustomBox;
