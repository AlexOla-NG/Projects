import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useGlobalThemeContext } from './ColorModeProvider';
import Form from './Form';

const UserInput = () => {
	const { colorMode, theme } = useGlobalThemeContext();

	return (
		<Box
			sx={{
				mb: 3, //margin bottom
				mx: 'auto',
			}}
		>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				spacing={2}
				sx={{
					mb: 4,
					mx: 'auto',
				}}
			>
				<Typography variant='h4' component='h1'>
					todo
				</Typography>

				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color='inherit'
				>
					{theme.palette.mode === 'dark' ? (
						<LightModeIcon sx={{ fontSize: '2.125rem' }} />
					) : (
						<DarkModeIcon sx={{ fontSize: '2.125rem' }} />
					)}
				</IconButton>
			</Stack>

			<Form />
		</Box>
	);
};

export default UserInput;
