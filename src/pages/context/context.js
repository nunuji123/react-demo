/**
 * 使用context，避免通过中间元素传递props
 */

import React, { createContext, Component } from "react";
import Button from "../../component/Button";

const ThemeContext = createContext("light");
console.log("ThemeContext", ThemeContext);

function Toolbar(props) {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
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
