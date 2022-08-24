import React, {useState} from 'react'

const App = () => {

	const [todo, setTodo] = useState('')
	const [isChecked, setIsChecked] = useState(false)
	const [todoList, setTodoList] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()

		let newObj = { todo, status: isChecked, id: new Date().getTime().toString() }
		setTodoList([...todoList, newObj])
		setTodo('')
	}

	// const handleChange = () => {
	// 	setIsChecked(!isChecked)
	// }


  return (
      <main>
          <header>
              <h1>ToDo app</h1>
		  </header>
		  
		  <section>
			  <form onSubmit={handleSubmit}>
				  <input
					  type="text"
					  value={ todo }
					  onChange={ (e) => setTodo(e.target.value) }
				  />
			  </form>
		  </section>

		  <section>
			  <article>
				  <ul>
					  { todoList.map((item) => {
						  let { id, todo, status } = item
						  
						  return <li key={ id }>
							  <label htmlFor={ todo }>
								  <input
									  type="checkbox"
									  checked={ status }
									  name={ todo }
									  id={ todo }
									//   TODO: stopped here
										// still can't connect status value with input checked attr
									  onChange={ () => {
										  setIsChecked(!isChecked)
										  console.log(status);
										  item = {...item, status: isChecked}
										  console.log(status);
									  }}
								  />
								  { todo }
							  </label>
							  
						  </li>
					  })}
				  </ul>
			  </article>
		  </section>
          
    </main>
  )
}

export default App