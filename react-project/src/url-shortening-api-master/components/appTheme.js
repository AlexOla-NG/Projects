// STUB: create appTheme
// appTheme contains custom palette, typography, components config

const appTheme = {
	palette: {
		primary: {
			main: 'hsl(180, 66%, 49%)', // cyan
		},
		secondary: {
			main: '#fff', // white
			contrastText: 'hsl(257, 27%, 26%)', // dark violet
		},
		violetBg: {
			main: 'hsl(257, 27%, 26%)', // dark violet
			contrastText: '#fff', // white
		},
		neutral: {
			gray: 'hsl(0, 0%, 75%)',
			grayishViolet: 'hsl(257, 7%, 63%)',
			veryDarkBlue: 'hsl(255, 11%, 22%)',
			veryDarkViolet: 'hsl(260, 8%, 14%)',
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
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
