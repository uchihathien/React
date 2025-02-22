import React, { useState } from 'react'

export default function AddUserInfor(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor((Math.random() * 100) + 1) + "user",
      Name: name,
      Age: age
    })
  }

  const handleUpdateName = (event) => {
    setName(event.target.value)
  }

  const handleUpdateAge = (event) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <form action="" onSubmit={(event) => { handleOnSubmit(event) }}>
        Your name: <input type="text" onChange={(event) => handleUpdateName(event)} />
        <br />
        Your age: <input type="text" onChange={(event) => handleUpdateAge(event)} />
        <br />
        <button>Submit</button>
      </form>
      
      <button onClick={props.handleDeleteAll}>Delete All</button>
    </div>
  )
}
