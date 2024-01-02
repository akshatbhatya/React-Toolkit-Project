import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../Features/toDoSlice'

function AddTodo() {

    const dispatch = useDispatch()

    const [input, setInput] = useState(" ")
    console.log(input);
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput(" ")

    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="text"
                    placeholder='type....'
                    value={input}
                    onChange={((e) => setInput(e.currentTarget.value))}

                />
                <button type={'submit'} onClick={submitHandler}>delete</button>
            </form>
        </div>
    )
}

export default AddTodo;
