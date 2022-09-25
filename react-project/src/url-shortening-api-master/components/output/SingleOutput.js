import React from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";

// TODO: stopped here
// style SingleOutput component

const SingleOutput = () => {
  return (
    <Paper>
      <Stack>
        <Typography>http://www.frontendmentor.io</Typography>

        <Stack>
          <Typography>https://rel.link/k4lKyk</Typography>
          <Button>Copy || Copied</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SingleOutput;
