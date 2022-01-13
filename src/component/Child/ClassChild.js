import React from "react";

export default class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(`ChildClass render`);
    return (
      <div>
        <h4>Child-Class</h4>
        <h5>{this.props.msg}</h5>
      </div>
    );
  }
}
