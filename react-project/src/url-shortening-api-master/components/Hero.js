import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeroImage from '../images/illustration-working.svg';

const Hero = () => {
	return (
		<Grid container direction='row' spacing={2} sx={{ px: 3, pt: 5, pb: 3 }}>
			{/* TODO: reduce heroImage size */}
			<Grid item xs={12} md={8}>
				<Box>
					<Typography
						variant='h2'
						component='h1'
						sx={{ color: 'neutral.veryDarkViolet', fontWeight: 800 }}
					>
						More than just shorter links
					</Typography>
					<Typography variant='body' component='p'>
						Build your brand's recognition and get detailed insights on how your
						links are performing{' '}
					</Typography>
				</Box>
				<Button variant='cyanBg' sx={{ borderRadius: 5 }}>
					SignUp
				</Button>
			</Grid>
			<Grid item xs={12} md={4}>
				<img src={HeroImage} alt='presentation' />
			</Grid>
		</Grid>
	);
};

export default Hero;
