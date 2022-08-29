import React from 'react'
import { useGlobalContext, useGlobalThemeContext } from './Context'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


// TODO: stopped here
    // add colorMode toggle to icon btn

const UserInput = () => {
  
  const { todo, setTodo, handleSubmit} = useGlobalContext()
  const { colorMode, theme } = useGlobalThemeContext()

  return (
    <Box
      sx={ {
      mb: 3, //margin bottom
      mx: 'auto',
      // display: 'flex',
      // justifyContent: 'center',
      } }
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        spacing={ 2 }
        sx={ {
          // my: 4,
          mb: 4,
          mx: 'auto'
        } }
      >
        <Typography variant="h4" component="h1">todo</Typography>

        { theme.palette.mode } mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          { theme.palette.mode === 'dark' ?  <LightModeIcon sx={{fontSize: '2.125rem'}}/> :  <DarkModeIcon sx={{fontSize: '2.125rem'}} />}
        </IconButton>
      </Stack>
      
      <form onSubmit={ handleSubmit } style={{borderRadius: theme.shape.borderRadius}}>
        <TextField
          placeholder='Create a new todo...'
          id="userInp"
          fullWidth
          type="text"
          variant='outlined'
          value={ todo }
          onChange={ (e) => { setTodo(e.target.value); } }
          InputProps={ {
            startAdornment: (
              <InputAdornment position='start' sx={{minWidth: 56, mr: 0}}>
                <CircleOutlinedIcon />
              </InputAdornment>
            )
          } }
          // TODO: stopped here
              // finish styling input field for light & dark mode
          sx={ {
            bgcolor: 'background.paper',
            borderRadius: 1,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 0,
              // borderColor: 'transparent'
            },
            '& .MuiOutlinedInput-notchedOutline.Mui-focused': {
              border: 0
            }
          }}
        />
      </form>
    </Box>
  )
}

export default UserInput