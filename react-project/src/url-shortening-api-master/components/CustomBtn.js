import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// TODO: stopped here
// create custombtn that accepts variant & color prop(controls background & text color)

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	'&:hover': {
		backgroundColor: purple[700],
	},
}));

const CustomBtn = () => {
	return <div>CustomBtn</div>;
};

export default CustomBtn;
