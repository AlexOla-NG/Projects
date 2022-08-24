import React from 'react'
import sunLogo from './images/icon-sun.svg'
import { useGlobalContext } from './Context'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const UserInput = () => {
  
  const { todo, setTodo, handleSubmit } = useGlobalContext()

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
        justifyContent='space-between'
        spacing={ 2 }
        sx={ {
          // my: 4,
          mb: 4,
          mx: 'auto'
        } }
      >
        <Typography variant="h4" component="h1">todo</Typography>
        <span role='img' aria-label='sun emoji'>☀️</span>
        {/* <img src={ sunLogo } alt="" /> */}
      </Stack>
      
      <form onSubmit={ handleSubmit }>
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
              <InputAdornment position='start'>
                <CircleOutlinedIcon />
              </InputAdornment>
            )
          } }
        />
      </form>
    </Box>
  )
}

export default UserInput