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

export default React.memo(ChildFunc)