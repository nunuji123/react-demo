import React, { useState } from "react";
export default function ChildClass(props) {
  return (
    <div>
      <h4>Child-Func</h4>
      <h5>{props.msg}</h5>
    </div>
  );
}
