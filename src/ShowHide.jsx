import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <h2>Hello! Welcome to React.</h2>}
    </div>
  );
}

export default ShowHide;