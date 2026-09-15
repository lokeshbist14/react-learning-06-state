import React, { useState } from "react";

function InputState() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Hello, {name}</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default InputState;