import React, { useState } from "react";
import Button from "./Button";
import "./styles.css";

function initCount() {
  console.log("initial count");
  return 10;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Summer");

  function handleClick(value) {
    setCount((prevState) => {
      return prevState + value;
    });
  }

  return (
    <div className="App">
      <div>{name}</div>
      <div>{count}</div>
      <Button handleClick={handleClick} title="+" value={1} />
      <button onClick={() => handleClick(-1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
