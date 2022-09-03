import React, { useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from './appTheme';

// STUB: create global theme context hook
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const useGlobalThemeContext = () => {
	return useContext(ColorModeContext);
};

// STUB: create ColorModeProvider context to hold appTheme & darkmode toggle control
const ColorModeProvider = ({ children }) => {
	const [mode, setMode] = useState('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={{ colorMode, theme }}>
			<CssBaseline />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export { ColorModeProvider, useGlobalThemeContext };
