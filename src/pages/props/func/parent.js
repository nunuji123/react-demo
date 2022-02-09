import React, { useState } from "react";
import Child from "./child";

export default function ParentFunc () {
    const [msg, setMsg] = useState("Parent Function");

    function handleClick () {
        setMsg(`new ${new Date().getTime()}`);
    }

    console.log(`Parent-Function render`);
    return (
        <div>
            <h4>Parent-Function</h4>
            <button onClick={handleClick}>update Parent-Function msg</button>
            <Child msg={msg}></Child>
        </div>
    );
}
