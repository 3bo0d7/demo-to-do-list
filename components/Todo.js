import React from 'react'

function renderTasks(tasks) {
  tasks = tasks || [];

  return tasks.map(task => (<tr><td>{task.name}</td><td>{task.description}</td></tr>))
}

/*
const renderTasks = (tasks) => tasks.map(task => {
  (
    <tr>
      <td>{task.name}</td>
      <td>{task.description}</td>
    </tr>
  )
})
*/

const Todo = ({tasks}) => (
  <table>
     <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
    {renderTasks(tasks)}
    </tbody>
  </table>
)

export default Todo;

/*
  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
    {renderTasks(tasks)}
  </table>
  */