import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  //useEffect(() => {
  //  console.log("in useEffect: will log with every rerender.");
  //});

  //useEffect(() => {
  //  console.log("in useEffect: will log will only run once.");
  //}, []);

  useEffect(() => {
    console.log("in useEffect: will run when every count changes.");
  }, [message]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
