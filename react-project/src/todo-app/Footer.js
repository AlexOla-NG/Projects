import React, { useState } from 'react'
import { useGlobalContext } from './Context'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'



const TextButton = styled(Button)(({ theme }) => ({
  color: 'primary',
  size: 'small',
  variant: 'text',

  '&:hover': {
  // color: 'onHover.main',
  color: `${theme.palette.mode === 'dark' ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)'}`,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    color: 'hsl(220, 98%, 61%)',
  }
}))

// TODO: stopped here
    // set display of btn container for mobile & desktop
    // we can toggle display when a breakpoint is reached


export const ListActionButtons = () => {
  const { todos1, setTodos1, todos2, completed, setCompleted } = useGlobalContext()

    const [active, setActive] = useState([])

    // STUB: reset (main) todos1 with (copy) todos2
    const handleAll = () => {
        setTodos1(todos2)
    }
    
    // STUB: if todos1 has been altered, set its value to active state value 
       // else, set todos1 to activeTodos
    const handleActive = () => {
        if (todos1.length < todos2.length) {
            setTodos1(active)
        } else {
            const activeTodos = todos1.filter((item) => item.completed === false)
            const completedTodos = todos1.filter((item) => item.completed === true)
            setActive(activeTodos)
            setCompleted(completedTodos)
            setTodos1(activeTodos)
        }
    }

     // STUB: if todos1 has been altered, set its value to completed state value 
        // else, set todos1 to completedTodos
    const handleCompleted = () => {
        if (todos1.length < todos2.length) {
            setTodos1(completed)
        } else {
            const completedTodos = todos1.filter((item) => item.completed === true);
            const activeTodos = todos1.filter((item) => item.completed === false)
            setCompleted(completedTodos)
            setActive(activeTodos)
            setTodos1(completedTodos)
        }
    }
  return (
    <Stack
        direction='row'
        spacing={-1.5}
        justifyContent='space-evenly'
      >
        <TextButton onClick={ handleAll }>all</TextButton>
        <TextButton onClick={ handleActive }>active</TextButton>
        <TextButton onClick={ handleCompleted }>completed</TextButton>
    </Stack>
  )  
}

const Footer = () => {

    const { todos1, setTodos1, todos2, setTodos2, setCompleted } = useGlobalContext()

    const clearCompleted = () => {
      setCompleted([])
      const tempTodos = todos2.filter((item) => item.completed === false )
      setTodos1(tempTodos)
      setTodos2(tempTodos)
    }
    
    
  return (
    <Box>
      <Stack
        // spacing={ 2 }
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        px={2}
        >
        {/* <Typography variant='caption' component='p'>
          {`${todos1.length > 0 ? ${todos1.length 'items left'} : 'No task available'}`}
        </Typography> */}
        { todos1.length > 0
        ? <Typography variant='caption' component='p' color='completed.contrastText'>{`${todos1.length}`} items left</Typography>
        : <Typography variant='caption' component='p' color='completed.contrastText'>No task available</Typography> }
        
        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          <ListActionButtons />
        </Box>
        

        <TextButton onClick={ clearCompleted } sx={{color:'completed.contrastText'}}>clear completed</TextButton>
      </Stack>
    </Box>
  )
}

export default Footer