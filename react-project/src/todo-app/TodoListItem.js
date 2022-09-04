import React, { useState } from 'react';
import Draggable from 'react-draggable';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { useGlobalContext } from './Context';
import CheckedIcon from './CheckedIcon';

const TodoListItem = ({ id, todo, completed }) => {
	// STUB: toggle delete button visibility
	const [showBtn, setShowBtn] = useState(false);

	const { todos1, todos2, setTodos1, setTodos2, deleteTodo } =
		useGlobalContext();

	// STUB: toggle completed status of todo
	// completed prop on todos1&2 sets the checkbox state
	const handleToggle = () => {
		// STUB: if todos1 (main) has been altered
		if (todos1.length !== todos2.length) {
			let newTodos = todos2.map((item) => {
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			});

			setTodos1(newTodos);
			setTodos2(newTodos);
		} else {
			let newTodos = todos1.map((item) => {
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			});

			setTodos1(newTodos);
			setTodos2(newTodos);
		}
	};

	const labelId = `checkbox-list-label-${id}`;

	return (
		<Draggable grid={[10, 10]} axis='y' bounds='parent'>
			<ListItem
				onMouseOver={() => setShowBtn(true)}
				onMouseOut={() => setShowBtn(false)}
				secondaryAction={
					<IconButton
						edge='end'
						aria-label='delete-todo'
						onClick={() => deleteTodo(id)}
					>
						{showBtn && <CancelIcon />}
					</IconButton>
				}
				disablePadding
				divider
			>
				<ListItemButton role={undefined} onClick={handleToggle} dense>
					<ListItemIcon>
						<Checkbox
							icon={<RadioButtonUncheckedRoundedIcon />}
							checkedIcon={<CheckedIcon />}
							edge='start'
							checked={completed}
							tabIndex={-1}
							disableRipple
							inputProps={{ 'aria-labelledby': labelId }}
						/>
					</ListItemIcon>
					<ListItemText
						id={labelId}
						primary={todo}
						sx={{
							textDecoration: completed ? 'line-through' : 'none',
							color: completed
								? 'completed.contrastText'
								: 'primary.contrastText',
						}}
					/>
				</ListItemButton>
			</ListItem>
		</Draggable>
	);
};

export default TodoListItem;
