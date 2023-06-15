import React from 'react'

function renderTasks(tasks) {
  tasks = tasks || [];

  return tasks.map(task => (<tr key={task.id}><td>{task.name}</td><td>{task.description}</td></tr>))
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
  <div>
    <table className='table table-striped'>
     <tbody>
       <tr>
         <th><div className="body">Name</div></th>
          <th>Description</th>
       </tr>
       {renderTasks(tasks)}
     </tbody>
    </table>
   
    <form className="g-3 mt-2 w-50 mx-auto">
      <h3 className="mt-4">Create new task</h3>
      <div class="mb-3">
        <label for="taskName" className="form-label">Name</label>
        <input type="text" className="form-control" id="taskName" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">Name of the task you have to do</div>
      </div>
      <div class="mb-3">
        <label for="taskDescription" className="form-label">Description</label>
        <input type="text" className="form-control" id="taskDescription" aria-describedby="emailHelp" />
        <div id="descriptionHelp" class="form-text">Description of the task you have to do</div>
      </div>
      <button type="submit" class="btn btn-primary">Create task</button>
    </form>
  
  </div>
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