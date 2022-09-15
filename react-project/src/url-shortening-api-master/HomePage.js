import React from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Hero from './components/Hero';

const HomePage = () => {
	return (
		<Box sx={{ px: 3, width: '100%' }}>
			<ResponsiveAppBar />
			<Hero />
		</Box>
	);
};

export default HomePage;
