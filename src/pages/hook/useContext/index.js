import React, { useState, useEffect, useContext } from "react";
export default function UseContextHook() {
  // 声明一个叫count的state变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount componentDidUpdate componentWillUnmount
  useEffect(() => {
    // 使用浏览器的API更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h6>UseContextHook</h6>
    </div>
  );
}
