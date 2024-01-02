import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../Features/toDoSlice'



function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    return (

        <>

            {
                todos.map((todo) => {
                    <div key={todo.id}>
                        <input type="text" value={todo} readOnly />
                        <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                    </div>
                })
            }

        </>
    )
}

export default Todo
