import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const CheckedIcon = () => {
	return (
		<>
			<svg width={0} height={0}>
				<linearGradient id='linearColors' x1={1} y1={0} x2={1} y2={1}>
					<stop offset={0} stopColor='hsl(192, 100%, 67%)' />
					<stop offset={1} stopColor='hsl(280, 87%, 65%)' />
				</linearGradient>
			</svg>
			<CheckCircleRoundedIcon sx={{ fill: 'url(#linearColors)' }} />
		</>
	);
};

export default CheckedIcon;
