import React from "react";
import { Stack } from "@mui/material";
import CustomBox from "./CustomBox";
import ChartSvg from "../../../images/icon-brand-recognition.svg";
import RecordsSvg from "../../../images/icon-detailed-records.svg";
import FullyCustomSvg from "../../../images/icon-fully-customizable.svg";

const contentList = [
  {
    title: "Brand Recognition",
    content: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
    icon: ChartSvg,
  },
  {
    title: "Detailed Records",
    content: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
    icon: RecordsSvg,
  },
  {
    title: "Fully Customizable",
    content: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    icon: FullyCustomSvg,
  },
];

const style = {
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  justifyContent: "center",
  mt: { md: "5em" },
};

// TODO: stopped here
// style benefits stack, add divider prop

const Benefits = () => {
  return (
    <Stack sx={style}>
      {contentList.map((benefit, index) => {
        return <CustomBox key={index} {...benefit} />;
      })}
    </Stack>
  );
};

export default Benefits;
