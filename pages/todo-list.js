import styles from '../styles/TodoListPage.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import Todo from '../components/Todo';
import HelloWorld from '../components/HelloWorld';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NewTask from '../components/NewTask';


let homeTasks = [
    {id: '1', name: 'laundry', description: '...'},
    {id: '2', name: 'groceries', description: '...'}
];

let workTasks = [
    {id: '1', name: 'learn react', description: '...'},
    {id: '2', name: 'learn nextjs', description: '...'}
];

const TodoListPage = () => (
  <div className={styles.todoList}>
    <div className='w-75 mx-auto'>
        <h1 className='body'>Pending tasks for home:</h1>
        <Todo tasks={homeTasks} />
        <h2>Pending tasks for work:</h2>
        <Todo tasks={workTasks} />
        <HelloWorld initialName='Peter' className='container' />
        <br/>
        <NewTask ></NewTask>
    </div>
  </div>
)

export default TodoListPage;

