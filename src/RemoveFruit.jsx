import React, { useState } from "react";

function RemoveFruit() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Orange"
  ]);

  function removeFruit(fruitToRemove) {
    setFruits(fruits.filter((fruit) => fruit !== fruitToRemove));
  }

  return (
    <div>
      <h2>Remove Fruits</h2>

      {fruits.map((fruit) => (
        <div key={fruit}>
          <span>{fruit}</span>

          <button onClick={() => removeFruit(fruit)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default RemoveFruit;