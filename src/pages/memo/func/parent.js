import React, { useCallback, useState } from "react";
import Child from "./child";

export default function ParentFunc () {
    const [msg, setMsg] = useState("Parent Function");
    const [text, setText] = useState("Parent Function");

    function handleClick () {
        setMsg(`new ${new Date().getTime()}`);
    }

    console.log(`Parent-Function render`);
    /**
     * useCallback 配合 memo使用
     */
    const changeText = useCallback((newtext) => {
        setText(newtext)
    }, []) //父组件无关紧要的更新不会导致 Child的rerender
    return (
        <div>
            <h4>Parent-Function</h4>
            <button type="button" className="btn btn-primary" onClick={handleClick}>update Parent-Function msg</button>
            <p>{msg}</p>
            {/* 不管是否传递msg 只要ParentFunc rerender Child就会rerender ， 导致无效渲染*/}
            {/* <Child></Child> */}
            <Child text={text} changeText={changeText}></Child>
        </div>
    );
}

