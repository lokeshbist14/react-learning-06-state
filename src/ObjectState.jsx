import React, {useState} from 'react'

function ObjectState() {
    const [user, setUser] = useState({
        name: "",
        age: ""
    });

  return (
    <div>
    <h2>Hello, {user.name}</h2>  
    <h3>You are {user.age} years old.</h3>

    <input type="text" placeholder="Enter your name"
    onChange={(event) => setUser({
        ...user,
        name: event.target.value
    })}/>
    <br />

    <input type="text" placeholder="Enter your age"
    onChange={(event) => setUser({
        ...user,
        age: event.target.value
    })}/>
    </div>
  );
}

export default ObjectState
