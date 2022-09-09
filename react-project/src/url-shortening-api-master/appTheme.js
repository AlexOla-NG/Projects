// STUB: create getDesignTokens function to hold appTheme
// appTheme contains custom palette, typography, components config
// getDesignTokens will toggle palette contents depending on mode

const appTheme = {
	palette: {
		primary: {
			main: 'hsl(180, 66%, 49%)', // cyan
			// contrastText: 'hsl(235, 19%, 35%)',
		},
		secondary: {
			contrastText: 'hsl(257, 27%, 26%)', // dark violet
		},
		neutral: {},
	},
	typography: {
		fontFamily: "'Josefin Sans', sans-serif",
		h4: {
			fontWeight: 700,
			letterSpacing: '0.4em',
			textTransform: 'uppercase',
		},
		button: {
			fontSize: '0.7rem',
			textTransform: 'capitalize',
		},
		caption: {
			fontSize: '0.7rem',
		},
	},
	components: {
		// Name of the component ⚛️
		MuiButtonBase: {
			defaultProps: {
				// The props to apply
				disableRipple: true, // No more ripple, on the whole application 💣!
			},
		},
		MuiPaper: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					backgroundImage: 'none', // remove box-shadow in dark-mode
					// backgroundColor: '#121212'
				},
			},
		},
	},
};

export default appTheme;
