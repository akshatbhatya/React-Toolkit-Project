
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/toDoSlice'
import { useEffect, useState } from 'react'



function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [update, setUpdate] = useState(" ")
    useEffect(()=>{},[update])
    return (
        <>
            <h2>loop</h2>

            <div>

                {
                    todos.map((todo) => {

                        return <div key={todo.id}>
                            <input type="text" value={update === " " ? todo.text : update} onChange={(e) => setUpdate(e.currentTarget.value)} />

                            <button onClick={() =>dispatch(updateTodo({ id: todo.id, text: update }))}>update</button>
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



