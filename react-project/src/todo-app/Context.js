import React, { useState, useContext } from 'react';

// STUB: create global context hook to share state, functions
const AppContext = React.createContext();
const useGlobalContext = () => {
	return useContext(AppContext);
};

const AppProvider = ({ children }) => {
	const [todo, setTodo] = useState('');
	const [todos1, setTodos1] = useState([]); // main todo
	const [todos2, setTodos2] = useState([]); // backup todo
	const [completed, setCompleted] = useState([]); // hold completed todos

	// STUB: handle todo onsubmit
	const handleSubmit = (e) => {
		e.preventDefault();

		if (todo === '') {
			return;
		}

		// STUB: create todo obj template, todolist
		const obj = { todo, completed: false, id: Date.now().toString() };
		// setTodoID(obj.id)
		setTodos1([...todos1, obj]);
		setTodos2([...todos2, obj]);
		setTodo('');
	};

	// STUB: delete item from main todo list, update 2nd todo list
	const deleteTodo = (id) => {
		setTodos1(todos1.filter((item) => item.id !== id));
		setTodos2(todos2.filter((item) => item.id !== id));
		// setTodos2(todos1)
	};

	return (
		<AppContext.Provider
			value={{
				todo,
				setTodo,
				todos1,
				setTodos1,
				todos2,
				setTodos2,
				handleSubmit,
				deleteTodo,
				completed,
				setCompleted,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, useGlobalContext };
