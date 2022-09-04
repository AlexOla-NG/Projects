import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useGlobalContext } from './Context';
import { useGlobalThemeContext } from './ColorModeProvider';

const Form = () => {
	const { todo, setTodo, handleSubmit } = useGlobalContext();
	const { theme } = useGlobalThemeContext();

	return (
		<form
			onSubmit={handleSubmit}
			style={{ borderRadius: theme.shape.borderRadius }}
		>
			<TextField
				placeholder='Create a new todo...'
				id='userInp'
				fullWidth
				type='text'
				variant='outlined'
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start' sx={{ minWidth: 56, mr: 0 }}>
							<CircleOutlinedIcon />
						</InputAdornment>
					),
				}}
				sx={{
					bgcolor: 'background.paper',
					borderRadius: 1,
					'& .MuiOutlinedInput-notchedOutline': {
						border: 0,
					},
					'& .MuiOutlinedInput-notchedOutline.Mui-focused': {
						border: 0,
					},
				}}
			/>
		</form>
	);
};

export default Form;
