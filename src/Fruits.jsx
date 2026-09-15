import React, { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Orange"
  ]);

  return (
    <div>
      <h2>My Fruits</h2>

      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}

export default Fruits;