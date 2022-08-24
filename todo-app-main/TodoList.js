import React from 'react'
import { useGlobalContext } from './Context'
import List from '@mui/material/List';
import TodoListItem from './TodoListItem';

// STUB: display user input
const TodoList = () => {

  const { todos1 } = useGlobalContext()

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      { todos1.map((item) => {

        return (
          <TodoListItem
            key={item.id} {...item}
          />
        );
      })}
    </List>
  )
}

export default TodoList;