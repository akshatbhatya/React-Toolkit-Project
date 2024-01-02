
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/toDoSlice'



function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    return (

        <>
            <h2>loop</h2>

            <div>

                {
                    todos.map((todo) => {

                      return  <div key={todo.id}>
                            <input type="text" value={todo.text} readOnly />
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                            <br />
                        </div>
                        
                    })
                }
            </div>
        </>
    )
}

export default Todo
