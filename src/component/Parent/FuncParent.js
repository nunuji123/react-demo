import React, { useState } from "react";
import ClassChild from "../Child/ClassChild";

export default function ParentClass() {
  const [msg, setMsg] = useState("Parent Function");

  function handleClick() {
    setMsg(`new ${new Date().getTime()}`);
  }

  return (
    <div>
      <h4>Parent-Function</h4>
      <button onClick={handleClick}>update Parent-Function msg</button>
      <ClassChild msg={msg}></ClassChild>
    </div>
  );
}
