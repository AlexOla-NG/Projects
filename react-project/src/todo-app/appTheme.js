// STUB: create getDesignTokens function to hold appTheme
// appTheme contains custom palette, typography, components config
// getDesignTokens will toggle palette contents depending on mode

const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: 'hsl(236, 9%, 61%)',
						contrastText: 'hsl(235, 19%, 35%)',
					},
					completed: {
						contrastText: 'hsl(233, 11%, 84%)',
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: 'hsl(233, 14%, 35%)',
						contrastText: 'hsl(234, 39%, 85%)',
					},
					completed: {
						contrastText: 'hsl(234, 11%, 52%)',
					},
			  }),
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
});

export default getDesignTokens;
