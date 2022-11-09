import React, { useState } from 'react';

export default function Hooks1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("shubham");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Name - {name}</p>
      <button onClick={() => setName("SHUBHAM CHAVAN")}>
        Click me
      </button>
    </div>
  );
}
