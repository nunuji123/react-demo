import React from "react";

import "./button.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log("button theme", this.props.theme, this.props.style);
  }
  render() {
    return (
      <button className={this.props.theme || ""} style={this.props.style || {}}>
        {this.props.children}
      </button>
    );
  }
}
