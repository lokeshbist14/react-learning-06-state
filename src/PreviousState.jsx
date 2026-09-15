import React, { useState } from "react";

function PreviousState() {
  const [count, setCount] = useState(0);

  function increaseTwice() {
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increaseTwice}>
        Increase Twice
      </button>
    </div>
  );
}

export default PreviousState;
