import React from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Hero from './components/Hero';

// TODO: stopped here
// build custom icon component

const HomePage = () => {
	return (
		<Box sx={{ px: { xs: 0, md: 3 }, width: '100%' }}>
			<ResponsiveAppBar />
			<Hero />
		</Box>
	);
};

export default HomePage;
