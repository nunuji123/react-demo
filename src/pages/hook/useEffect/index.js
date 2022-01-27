import React, { useState, useEffect } from "react";
export default function UseStateHook() {
  // 声明一个叫count的state变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount componentDidUpdate
  useEffect(() => {
    // 使用浏览器的API更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h6>useEffect</h6>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
