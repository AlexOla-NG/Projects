import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const TextButton = styled(Button)(({ theme }) => ({
	color: 'primary',
	size: 'small',
	variant: 'text',

	'&:hover': {
		color: `${
			theme.palette.mode === 'dark'
				? 'hsl(234, 39%, 85%)'
				: 'hsl(235, 19%, 35%)'
		}`,
		backgroundColor: 'transparent',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
	},
	'&:focus': {
		color: 'hsl(220, 98%, 61%)',
	},
}));

export default TextButton;
