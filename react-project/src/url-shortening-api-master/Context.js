import React, { useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import appTheme from "./components/appTheme";

const theme = createTheme(appTheme);

// STUB: create global context hook to share state, functions
const AppContext = React.createContext();
const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const API_URL = "https://api.shrtco.de/v2/shorten?url=";
  const [queryUrl, setQueryUrl] = useState("");
  const [queryHistory, setQueryHistory] = useState([]);

  useEffect(() => {
    const getShortLink = async () => {
      try {
        const response = await fetch(`${API_URL}${queryUrl}`);
        const data = await response.json();
        console.log(data);
        if (data.ok) {
          const { full_short_link, original_link } = data.result;
          setQueryHistory((prevValue) => [
            ...prevValue,
            { full_short_link, original_link },
          ]);
        }

        // TODO: get error message from data if data.ok === false; set as alert msg on snackbar
      } catch (error) {
        throw new Error(error);
      }
    };

    // STUB: call API in 1.5secs
    setTimeout(() => {
      getShortLink();
    }, 1500);
  }, [queryUrl]);

  return (
    <AppContext.Provider value={{ setQueryUrl, queryHistory }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export { AppProvider, useGlobalContext };
