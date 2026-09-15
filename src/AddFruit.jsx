import React, { useState } from "react";

function AddFruit() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [newFruit, setNewFruit] = useState("");

  return (
    <div>
      <h2>Add Fruits</h2>

      <input
        type="text"
        placeholder="Enter a fruit"
        onChange={(event) => setNewFruit(event.target.value)}
      />

      <button
        onClick={() => {
          setFruits([...fruits, newFruit]);
          setNewFruit("");
        }}
      >
        Add Fruit
      </button>

      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}

export default AddFruit;