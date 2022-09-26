import React from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// TODO: stopped here
// style SingleOutput component

const style = {
  width: "100%",
  bgcolor: "background.paper",
  // border: "solid blue",
};

const SingleOutput = () => {
  return (
    <Paper sx={{ mt: 2 }}>
      <List sx={style}>
        <ListItem divider>
          <ListItemText
            primary="http://www.frontendmentor.io"
            sx={{ color: "neutral.veryDarkViolet" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="https://rel.link/k4lKyk"
            sx={{ color: "primary.main" }}
          />
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <Button variant="cyanBg" fullWidth>
            copy || copied
          </Button>
        </ListItem>
      </List>
    </Paper>

    // Desktop view
    // <Paper sx={{ mt: 2, p: 2 }}>
    //   <Stack divider={<Divider />}>
    //     <Typography variant="body2" component="p">
    //       http://www.frontendmentor.io
    //     </Typography>

    //     <Stack>
    //       <Typography variant="body2" component="p">
    //         https://rel.link/k4lKyk
    //       </Typography>
    //       <Button>Copy || Copied</Button>
    //     </Stack>
    //   </Stack>
    // </Paper>
  );
};

export default SingleOutput;
