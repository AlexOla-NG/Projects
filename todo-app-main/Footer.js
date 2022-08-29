import React, { useState } from 'react'
import { useGlobalContext, useGlobalThemeContext } from './Context'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'


// const {theme} = useGlobalThemeContext

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

const Footer = () => {

    const { todos1, setTodos1, todos2, setTodos2 } = useGlobalContext()

    // TODO: stopped here
        // fix functionality to switch between tabs
    // const [tempTodos, setTempTodos] = useState(todos1)
    const [active, setActive] = useState([])
    const [completed, setCompleted] = useState([])

    // STUB: reset (main) todos1 with (copy) todos2
    const handleAll = () => {
        // const tempTodos = all
        // setAll(tempTodos)
        setTodos1(todos2)
    }
    
    // const activeTodos = todos1.filter((item) => item.completed === false)
    // const completedTodos = todos1.filter((item) => item.completed === true)

    // const activeTodos = tempTodos.filter((item) => item.completed === false)
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

    // TODO: stopped here
            // fix functionality to add to completed and active state array values when both array.length > 0
    // const completedTodos = tempTodos.filter((item) => item.completed === true)
    
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

    const clearCompleted = () => {

        setCompleted([])
        const tempTodos = todos2.filter((item) => item.completed === false )
        setTodos1(tempTodos)
        setTodos2(tempTodos)
    }
    
    
  return (
    <Stack
      // spacing={ 2 }
      direction='row'
      alignItems='center'
      justifyContent='space-around'
      >
      { todos1.length > 0
      ? <Typography variant='caption' component='p'>{`${todos1.length}`} items left</Typography>
      : <Typography variant='caption' component='p'>No task available</Typography> }
      
      <Stack
        direction='row'
        spacing={-1.5}
        justifyContent='space-evenly'
      >
        <TextButton onClick={ handleAll }>all</TextButton>
        <TextButton onClick={ handleActive }>active</TextButton>
        <TextButton onClick={ handleCompleted }>completed</TextButton>
      </Stack>

      <TextButton onClick={ clearCompleted }>clear completed</TextButton>
    </Stack>
  )
}

export default Footer