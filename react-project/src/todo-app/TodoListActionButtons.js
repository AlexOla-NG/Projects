import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { useGlobalContext } from './Context';
import TextButton from './TextButton';

const TodoListActionButtons = () => {
	const { todos1, setTodos1, todos2, completed, setCompleted } =
		useGlobalContext();

	const [active, setActive] = useState([]);

	// STUB: reset (main) todos1 with (copy) todos2
	const handleAll = () => {
		setTodos1(todos2);
	};

	// STUB: if todos1 has been altered, set its value to active state value
	// else, set todos1 to activeTodos
	const handleActive = () => {
		if (todos1.length < todos2.length) {
			setTodos1(active);
		} else {
			const activeTodos = todos1.filter((item) => item.completed === false);
			const completedTodos = todos1.filter((item) => item.completed === true);
			setActive(activeTodos);
			setCompleted(completedTodos);
			setTodos1(activeTodos);
		}
	};

	// STUB: if todos1 has been altered, set its value to completed state value
	// else, set todos1 to completedTodos
	const handleCompleted = () => {
		if (todos1.length < todos2.length) {
			setTodos1(completed);
		} else {
			const completedTodos = todos1.filter((item) => item.completed === true);
			const activeTodos = todos1.filter((item) => item.completed === false);
			setCompleted(completedTodos);
			setActive(activeTodos);
			setTodos1(completedTodos);
		}
	};
	return (
		<Stack direction='row' spacing={-1.5} justifyContent='space-evenly'>
			<TextButton onClick={handleAll}>all</TextButton>
			<TextButton onClick={handleActive}>active</TextButton>
			<TextButton onClick={handleCompleted}>completed</TextButton>
		</Stack>
	);
};

export default TodoListActionButtons;
