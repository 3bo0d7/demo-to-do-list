import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value , setValue] = useState ("")
    const handleSubmit = e => {
        e.preventDefault();

        console.log(value)
        addTodo(value)
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='What is the task today?' 
        onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='Todo-btn'> Add Task </button>
        </form>
    )
}