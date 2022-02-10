import React from "react";
function ChildFunc (props) {
    console.log(`Child-Func render`);
    return (
        <div>
            <h4>Child-Func</h4>
            <h5>{props.msg}</h5>
        </div>
    );
}

//使用 React.memo包裹 函数组件后，父组件（Parent）的props的更新不会导致子组件（Child）的更新
export default React.memo(ChildFunc)