import React, {useState} from 'react'

export const TodoForm = () => {
    const [value , setValue] = useState ("")
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='What is the task today?' 
        onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='Todo-btn'> Add Task </button>
        </form>
    )
}