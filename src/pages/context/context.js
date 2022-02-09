/**
 * 使用context，避免通过中间元素传递props
 */

import React, { createContext, Component } from "react";
import Button from "../../component/Button";

const ThemeContext = createContext("light");

function Toolbar(props) {
  return (
    <div>
      <ThemeButton></ThemeButton>
    </div>
  );
}

class ThemeButton extends React.Component {
  static context = ThemeContext;
  render() {
    return <Button theme={this.context}></Button>;
  }
}

export default class ContextDemo extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
