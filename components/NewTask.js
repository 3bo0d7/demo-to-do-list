import {React, useState} from 'react'

function NewTask() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      // home tasks
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="taskName" class="form-label">Name</label>
          <input type="text" class="form-control" id="taskName" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">Name of the task you have to dom</div>
        </div>
        <label>Enter new HomeTask:
        <input 
          type="text" 
          name="tasktype1" 
          value={inputs.tasktype1 || ""} 
          onChange={handleChange}
        />
        </label>
        <label >Description of Task:
        <input 
          type="text" 
          name="tasktype2" 
          value={inputs.tasktype2 || ""} 
          onChange={handleChange}
        />
        </label>
          <input type="submit" />
  
        <br/>
  
        <label>Enter new workTask:
        <input 
          type="text" 
          name="tasktype3" 
          value={inputs.tasktype3 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Description of Task:
        <input 
          type="text" 
          name="tasktype4" 
          value={inputs.tasktype4 || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />

      </form>
  
      
    )
  }

  export default NewTask;