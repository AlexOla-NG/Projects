import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import appTheme from './components/appTheme';

const theme = createTheme(appTheme);

// STUB: create global context hook to share state, functions
const AppContext = React.createContext();
const useGlobalContext = () => {
	return useContext(AppContext);
};

const AppProvider = ({ children }) => {
	return (
		<AppContext.Provider value={{}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export { AppProvider, useGlobalContext };
