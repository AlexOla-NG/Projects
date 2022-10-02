import React from "react";
import { Box, Avatar, Paper, Typography } from "@mui/material";
import ChartSvg from "../../../images/icon-brand-recognition.svg";

// STUB: The CustomIcon component will accept three props:
// icon, title & body
// we will render multiple CustomIcon components by using an array that holds different values for the specified props

const CustomBox = (props) => {
  return (
    <>
      {/* mobile view */}
      <Paper
        sx={{
          display: { xs: "flex", md: "none" },
          maxWidth: "clamp(14.6em, 30vw, 40vw)", // toggles size of Paper depending on screen width
          p: 4,
          mt: "3em",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "violetBg.main",
            height: "clamp(3.9em, 8vh, 5vh)",
            width: "clamp(3.9em, 5.5vw, 3.5vw)",
            position: "absolute",
            top: "-40px",
            right: "50%",
            transform: "translate(50%)",
          }}
        >
          <img src={props.icon} alt="" role="presentation" />
        </Avatar>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "neutral.veryDarkViolet", fontWeight: 800, mb: 1.5 }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: "neutral.grayishViolet",
              lineHeight: 1.8,
            }}
          >
            {props.content}
          </Typography>
        </Box>
      </Paper>

      {/* desktop view */}
      <Paper
        sx={{
          display: { xs: "none", md: "flex" },
          maxWidth: "14.6em", // toggles size of Paper depending on screen width
          p: 4,
          mr: 4,
          position: "relative",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "violetBg.main",
            height: "clamp(3.9em, 8vh, 5vh)",
            width: "clamp(3.9em, 5.5vw, 3.5vw)",
            position: "absolute",
            top: "-40px",
            left: "1.9em",
          }}
        >
          <img src={props.icon} alt="" role="presentation" />
        </Avatar>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "neutral.veryDarkViolet", fontWeight: 800, mb: 1.5 }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: "neutral.grayishViolet",
              lineHeight: 1.8,
            }}
          >
            {props.content}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default CustomBox;

CustomBox.defaultProps = {
  title: "Brand Recognition",
  content: `Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.`,
  icon: ChartSvg,
};
