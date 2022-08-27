import React from "react";
import UserInput from "./UserInput";
import TodoList from "./TodoList";
import Footer from "./Footer"
import { useGlobalThemeContext } from './Context'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import DarkImage from './images/bg-desktop-dark.jpg'
import LightImage from './images/bg-desktop-light.jpg'

const App = () => {

  const { theme } = useGlobalThemeContext()

  return (
    <Box
      sx={ {
        // use cssqueryhook to change backgroundImage on smaller screens (sm, xs)
        backgroundImage: `url(${theme.palette.mode === 'dark' ? DarkImage : LightImage})`,
        backgroundSize: '100% 40%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        py: '3em'
      } }
    >
      <Container
        maxWidth='sm'
        sx={ {
          width: { //dimensions in px
            xs: 400, // theme.breakpoints.up('xs') 0-599px
            sm: 450, // theme.breakpoints.up('sm') 600 - 1199px
            // lg: 300, // theme.breakpoints.up('lg') > 1200px
          },
        } }
      >
        <UserInput />
        <Paper elevation={3}>
          <TodoList />
          <Footer />
        </Paper>
      </Container>

    </Box>
  );
}

export default App