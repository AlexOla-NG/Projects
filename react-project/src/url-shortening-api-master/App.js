import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import appTheme from "./components/appTheme";
import HomePage from "./HomePage";
import FooterSegment from "./components/footer segment/FooterSegment";

const theme = createTheme(appTheme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
      <FooterSegment />
    </ThemeProvider>
  );
};

export default App;
