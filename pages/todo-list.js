import React from 'react'
import Todo from '../components/Todo';

let homeTasks = [
    {name: 'laundry', description: '...'},
    {name: 'groceries', description: '...'}
];

let workTasks = [
    {name: 'learn react', description: '...'},
    {name: 'learn nextjs', description: '...'}
];

const TodoListPage = () => (
  <div>
    <h1>Pending tasks for home:</h1>
    <Todo tasks={homeTasks} />
    <h2>Pending tasks for work:</h2>
    <Todo tasks={workTasks} />
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        table, th, td {
          border: 1px dashed blue
        }
      `}</style>
  </div>
)

export default TodoListPage;

