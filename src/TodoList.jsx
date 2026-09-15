import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  function removeTodo(todoToRemove) {
    setTodos(todos.filter((todo) => todo !== todoToRemove));
  }

  return (
    <div>
      <h2>My Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />

      <button onClick={addTodo}>Add Task</button>

      {todos.map((todo) => (
        <div key={todo}>
          <span>{todo}</span>

          <button onClick={() => removeTodo(todo)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;