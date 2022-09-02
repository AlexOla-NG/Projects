import React from 'react';
import UserInput from './UserInput';
import TodoList from './TodoList';
import { ListActionButtons } from './Footer';
import { useGlobalThemeContext } from './Context';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
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
						// xs: 400, // theme.breakpoints.up('xs') 0-599px
						sm: 450, // theme.breakpoints.up('sm') 600 - 1199px
						// lg: 300, // theme.breakpoints.up('lg') > 1200px
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
			</Container>
		</Box>
	);
};

export default App;
