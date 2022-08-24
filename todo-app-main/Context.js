import React, { useState, useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';


// TODO: stopped here
      // create dark theme
      // refer mui dark theme doc

// STUB: define app theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(236, 9%, 61%)',
      light: '#424242'
    },
  },
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: '0.4em',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.7em',
      textTransform: 'capitalize'
    },
    caption: {
      fontSize: '0.7em',
    }
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      }
    }
  }
})

const AppContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
    
    const [todo, setTodo] = useState("")
    // const [todoID, setTodoID] = useState(null)
    const [todos1, setTodos1] = useState([])
    const [todos2, setTodos2] = useState([]) //create new todos to handle extra functionality

    // STUB: save todo to todos array
    const handleSubmit = (e) => {
        e.preventDefault()

        if (todo === '') {
            return
        }

         // STUB: create todo obj template, todolist
        const obj = { todo, completed: false, id: Date.now().toString() }
        // setTodoID(obj.id)
        setTodos1([...todos1, obj])
        setTodos2([...todos2, obj])
        setTodo("")
    }

    // STUB: delete item from main todo list, update 2nd todo list
    const deleteTodo = (id) => {
        setTodos1(todos1.filter((item) => item.id !== id))
        setTodos2(todos2.filter((item) => item.id !== id))
        // setTodos2(todos1)
    }

  return (
    <AppContext.Provider value={ {
        todo,
        setTodo,
        todos1,
        setTodos1,
        todos2,
        setTodos2,
      //   todoID,
      //   isChecked,
      //   setIsChecked,
        handleSubmit,
        deleteTodo
    } }>
      <CssBaseline />
      <ThemeProvider theme={theme}>
          { children }
      </ThemeProvider>
    </AppContext.Provider>
  )
}
