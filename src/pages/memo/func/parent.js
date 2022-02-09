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
            <button type="button" className="btn btn-primary" onClick={handleClick}>update Parent-Function msg</button>
            {/* 不管是否传递msg 只要ParentFunc rerender Child就会rerender ， 导致无效渲染*/}
            <Child></Child>
            {/* <Child msg={msg}></Child> */}
        </div>
    );
}

