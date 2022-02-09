import React from "react";
export default function ChildClass (props) {
    console.log(`Child-Func render`);
    return (
        <div>
            <h4>Child-Func</h4>
            <h5>{props.msg}</h5>
        </div>
    );
}
