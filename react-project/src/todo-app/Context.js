import React, { useState, useContext, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { amber, deepOrange, grey } from '@mui/material/colors';

// TODO: stopped here
      // create dark theme
      // refer mui dark theme doc

// // STUB: define app theme

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: 'hsl(236, 9%, 61%)',
            contrastText: 'hsl(235, 19%, 35%)'
          },
          completed : {
            contrastText: 'hsl(233, 11%, 84%)'
          },
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // palette values for dark mode
          primary: {
            main: 'hsl(233, 14%, 35%)',
            contrastText: 'hsl(234, 39%, 85%)'
          },
          completed : {
            contrastText: 'hsl(234, 11%, 52%)'
          },
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
        }),
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
    },
    // TODO: stopped here
        // override backgroundImage of paper on dark mode
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundImage: 'none',
          // backgroundColor: '#121212'
        }
      }
    },
  }
});


const AppContext = React.createContext()

// STUB: create global context hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
    
  const [todo, setTodo] = useState("")
  // const [todoID, setTodoID] = useState(null)
  const [todos1, setTodos1] = useState([])
  const [todos2, setTodos2] = useState([]); //create new todos to handle extra functionality
  const [completed, setCompleted] = useState([]) //hold completed todos


  
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
      deleteTodo,
      completed,
      setCompleted
    } }
    >
      { children }
      {/* <CssBaseline />
      <ThemeProvider theme={theme}>
          { children }
      </ThemeProvider> */}
    </AppContext.Provider>
  )
}

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

// STUB: create global theme context hook
export const useGlobalThemeContext = () => {
    return useContext(ColorModeContext)
}

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={ { colorMode, theme } }>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}