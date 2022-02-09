import React from "react";

import "./button.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log("button theme", this.props.theme, this.props.privateStyle);
  }
  render() {
    return (
      <button
        className={this.props.theme || ""}
        style={this.props.privateStyle || {}}
      >
        {this.props.children}
      </button>
    );
  }
}
