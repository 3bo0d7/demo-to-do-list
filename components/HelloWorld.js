import {React, useState} from 'react'

function HelloWorld({ initialName }) {

    const [name, setName] = useState(initialName || '');

    const handleNewName = (event) => {
      console.log('event', event);
      const newName = event.target.value;
      setName(newName)
    }

    return (
    <div>
        <input name="aaa" type="text" value={name} onChange={handleNewName}/>
        <h1>Hello {name}</h1>
    </div>
    )
}

export default HelloWorld;