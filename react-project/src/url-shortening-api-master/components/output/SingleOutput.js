import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// TODO: stopped here
// style SingleOutput component

const mobileStyle = {
  width: "100%",
  display: { xs: "block", sm: "none" },
};
const desktopStyle = {
  display: { xs: "none", sm: "flex" },
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  p: 2,
  width: "100%",
};

const SingleOutput = (props) => {
  return (
    <Paper sx={{ mt: 2 }}>
      {/* mobile view */}
      <List sx={mobileStyle}>
        <ListItem divider>
          <ListItemText
            primary={props.original_link}
            sx={{ color: "neutral.veryDarkViolet" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={props.full_short_link}
            sx={{ color: "primary.main" }}
          />
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <Button variant="cyanBg" fullWidth>
            copy || copied
          </Button>
        </ListItem>
      </List>

      {/* Desktop view */}
      <Stack sx={desktopStyle}>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: "neutral.veryDarkViolet", fontSize: "1rem" }}
        >
          {props.original_link}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "primary.main", fontSize: "1rem" }}
          >
            {props.full_short_link}
          </Typography>
          <Button variant="cyanBg" fullWidth>
            Copy || Copied
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SingleOutput;

SingleOutput.defaultProps = {
  original_link: "http://www.frontendmentor.io",
  full_short_link: "https://rel.link/k4lKyk",
};
