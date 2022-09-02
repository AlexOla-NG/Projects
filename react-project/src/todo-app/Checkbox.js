import React from 'react'
import { useGlobalContext } from './Context'

const Checkbox = ({ label, id, completed }) => {

  // NOTE: we didnt use the state value because it was affecting the toggle effect, and functionality of the footer components
  // const [isChecked, setIsChecked] = useState(false)
	
  const { todos1, todos2, setTodos1, setTodos2 } = useGlobalContext();
  
  // TODO: stopped here
      // fix bug that resets todos1 after toggling checkbox in active/completed tab

	// STUB: toggle status of todo & checkbox
  const handleChange = () => {
    
    // STUB: if todos1 (main) has been altered
    if (todos1.length !== todos2.length) {
      let newTodos = todos2.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item
      });
      
      setTodos1(newTodos)
      setTodos2(newTodos)
    }

    else {
      let newTodos = todos1.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      
      setTodos1(newTodos)
      setTodos2(newTodos)
    }
		
  }

    return (
      <label>
            <input
                type="checkbox"
                checked={ completed }
                onChange={ handleChange }
            />
          <span>{ label }</span>
      </label>
  )
}

export default Checkbox