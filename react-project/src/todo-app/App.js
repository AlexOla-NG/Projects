import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useGlobalThemeContext } from './ColorModeProvider';
import UserInput from './UserInput';
import TodoList from './TodoList';
import { ListActionButtons } from './Footer';
import DesktopDarkImage from './images/bg-desktop-dark.jpg';
import DesktopLightImage from './images/bg-desktop-light.jpg';
import MobileDarkImage from './images/bg-mobile-dark.jpg';
import MobileLightImage from './images/bg-mobile-light.jpg';

const App = () => {
	const { theme } = useGlobalThemeContext();

	return (
		<Box
			sx={{
				backgroundImage: {
					xs: `url(${
						theme.palette.mode === 'dark' ? MobileDarkImage : MobileLightImage
					})`,
					sm: `url(${
						theme.palette.mode === 'dark' ? DesktopDarkImage : DesktopLightImage
					})`,
				},
				backgroundSize: '100% 40%',
				backgroundRepeat: 'no-repeat',
				minHeight: '100vh',
				py: '3em',
			}}
		>
			<Container
				maxWidth='sm'
				sx={{
					width: {
						//dimensions in px
						sm: 450, // theme.breakpoints.up('sm') 600 - 1199px
					},
				}}
			>
				<UserInput />
				<TodoList />

				<Paper
					elevation={3}
					sx={{
						display: { xs: 'block', sm: 'none' },
						mt: 3,
						py: 1,
						width: '100%',
					}}
				>
					<ListActionButtons />
				</Paper>

				<Stack sx={{ color: 'primary', py: 6, textAlign: 'center' }}>
					{/* TODO: stopped here
					change color of caption to same color as btns
					*/}
					<Typography variant='caption' component='p'>
						Drag and drop to reorder list
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
};

export default App;
