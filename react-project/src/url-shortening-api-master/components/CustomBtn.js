import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// TODO: stopped here
// create custombtn that accepts variant, border radius & color prop(controls background & text color, onhover & onselected color)

const ColorButton = styled(Button)(({ theme }) => ({
	borderRadius: 6,
	'&:hover': {
		backgroundColor: "hsla(180, 66%, 49%, 0.6)",
		// backgroundColor: purple[700],
	},
	'&:selected': {
		backgroundColor: theme.palette.secondary,
	},
}));
// const ColorButton = styled(Button)(({ theme }) => ({
// 	color: theme.palette.getContrastText(purple[500]),
// 	backgroundColor: purple[500],
// 	'&:hover': {
// 		backgroundColor: purple[700],
// 	},
// }));

const CustomBtn = () => {
	return <ColorButton />;
};

export default CustomBtn;
