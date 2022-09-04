import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useGlobalThemeContext } from './ColorModeProvider';
import UserInput from './UserInput';
import TodoList from './TodoList';
import TodoListActionButtons from './TodoListActionButtons';
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
				bgcolor: 'background.box',
				m: '0 auto',
				maxHeight: '100vh',
				py: '3em',
			}}
		>
			<Box
				maxWidth='sm'
				sx={{
					m: '0 auto',
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
					<TodoListActionButtons />
				</Paper>

				<Stack sx={{ py: 4, textAlign: 'center' }}>
					<Typography
						variant='caption'
						component='p'
						sx={{ color: 'completed.contrastText' }}
					>
						Drag and drop to reorder list
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export default App;
