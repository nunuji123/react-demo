import React, { useState } from "react";
export default function UseStateHook() {
  // 声明一个叫count的state变量
  const [count, setCount] = useState(0);
  return (
    <div>
      <h6>useState</h6>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
