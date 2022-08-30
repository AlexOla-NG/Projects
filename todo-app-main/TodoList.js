import React from 'react'
import { useGlobalContext } from './Context'
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import TodoListItem from './TodoListItem';
import Footer from './Footer';

// STUB: display user input
const TodoList = () => {

  const { todos1 } = useGlobalContext()

  return (
    <Paper elevation={3}>
      <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 1 }}>
        { todos1.map((item) => {

          return (
            <TodoListItem
              key={item.id} {...item}
            />
          );
        })}
      </List>
      <Footer />
    </Paper>
  )
}

export default TodoList;