import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from './Context';
import TextButton from './TextButton';
import TodoListActionButtons from './TodoListActionButtons';

const Footer = () => {
	const { todos1, setTodos1, todos2, setTodos2, setCompleted } =
		useGlobalContext();

	const clearCompleted = () => {
		setCompleted([]);
		const tempTodos = todos2.filter((item) => item.completed === false);
		setTodos1(tempTodos);
		setTodos2(tempTodos);
	};

	let msg;
	if (todos1.length > 0) {
		msg = `${todos1.length} items left`;
	} else {
		msg = `No task available`;
	}

	return (
		<Box>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				px={2}
			>
				<Typography
					variant='caption'
					component='p'
					color='completed.contrastText'
				>
					{msg}
				</Typography>

				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<TodoListActionButtons />
				</Box>

				<TextButton
					onClick={clearCompleted}
					sx={{ color: 'completed.contrastText' }}
				>
					clear completed
				</TextButton>
			</Stack>
		</Box>
	);
};

export default Footer;
