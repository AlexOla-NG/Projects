import React from "react";
import { Avatar } from "@mui/material";
import ChartSvg from "../images/icon-brand-recognition.svg";

// TODO: stopped here
// give positioning different values based on screen size
// export to CustomBox component

const CustomIcon = () => {
  return (
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
  );
};

export default CustomIcon;
