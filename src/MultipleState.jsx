import React, {useState} from 'react'

function MultipleState() {
    const [name, setName] = useState("");
    const[age, setAge] = useState("");

  return (
    <div>
    <h2>Hello! {name}</h2>  
    <h3>You are {age} years old.</h3>

    <input type="text" placeholder="Enter your name"
    onChange={(events) => setName(event.target.value)}/>
    <br />

    <input type="text" placeholder="Enter your age"
    onChange={(event) => setAge(event.target.value)}/>
    </div>
  )
}

export default MultipleState
