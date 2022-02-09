import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log("button theme", this.props.theme);
  }
  render() {
    return <button className={this.props.theme}></button>;
  }
}
