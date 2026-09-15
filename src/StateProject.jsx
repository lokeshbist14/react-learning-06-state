import React, { useState } from "react";

function StateProject() {
  // 1. Counter state
  const [count, setCount] = useState(0);

  // 2. Name state
  const [name, setName] = useState("");

  // 3. Show/Hide state
  const [showMessage, setShowMessage] = useState(false);

  // 4. Todo state
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  function removeTodo(todoToRemove) {
    setTodos(todos.filter((item) => item !== todoToRemove));
  }

  return (
    <div>
      <h2>My State Project</h2>

      {/* Counter */}
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      {/* Name */}
      <h3>Hello, {name}</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <hr />

      {/* Show / Hide */}
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {showMessage && <p>This message is visible!</p>}

      <hr />

      {/* Todo List */}
      <h3>My Todo List</h3>

      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button onClick={addTodo}>
        Add Task
      </button>

      {todos.map((item) => (
        <div key={item}>
          <span>{item}</span>

          <button onClick={() => removeTodo(item)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default StateProject;