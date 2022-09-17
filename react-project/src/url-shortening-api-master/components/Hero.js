import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeroImage from '../images/illustration-working.svg';

const Hero = () => {
	// TODO: stopped here
	// split grid into two: mobile & desktop screen
	// refactor code, properly set mobile screen
	return (
		<div>
			{/* mobile screen */}
			<Grid
				container
				direction='column'
				// spacing={2}
				sx={{ px: { xs: 0, md: 16 }, py: 8, mx: 'auto' }}
			>
				<Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
					<img
						src={HeroImage}
						alt='presentation'
						style={{ maxWidth: '90%', height: 'auto' }}
					/>
				</Grid>

				<Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
					<Box sx={{ pb: 6, textAlign: 'center' }}>
						<Typography
							variant='h3'
							component='h1'
							sx={{
								color: 'neutral.veryDarkViolet',
								mb: 1.5,
							}}
						>
							More than just shorter links
						</Typography>
						<Typography variant='body2' component='p'>
							Build your brand's recognition and get detailed insights on how
							your links are performing
						</Typography>
					</Box>
					<Button
						variant='cyanBg'
						sx={{
							borderRadius: 8,
							px: 2,
							py: 1,
							minWidth: '20%',
							fontSize: '1.15rem',
						}}
					>
						Get Started
					</Button>
				</Grid>
			</Grid>

			{/* desktop screen */}
			<Grid
				container
				direction='row'
				spacing={2}
				sx={{ px: { xs: 0, md: 16 }, py: 8, mx: 'auto' }}
			>
				<Grid item md={7} sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Box sx={{ pb: 6, maxWidth: '75%' }}>
						<Typography
							variant='h1'
							component='h1'
							sx={{
								color: 'neutral.veryDarkViolet',
								mb: 1.5,
							}}
						>
							More than just shorter links
						</Typography>
						<Typography variant='body1' component='p'>
							Build your brand's recognition and get detailed insights on how
							your links are performing
						</Typography>
					</Box>
					<Button
						variant='cyanBg'
						sx={{
							borderRadius: 8,
							px: 2,
							py: 1,
							minWidth: '20%',
							fontSize: '1.15rem',
						}}
					>
						Get Started
					</Button>
				</Grid>
				<Grid item md={5} sx={{ display: { xs: 'none', sm: 'block' } }}>
					<img
						src={HeroImage}
						alt='presentation'
						style={{ maxWidth: '150%', height: 'auto' }}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Hero;
