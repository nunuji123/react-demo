/**
 * context官方文档： https://zh-hans.reactjs.org/docs/context.html
 * 无需手动给组件添加props，就能在组件树中进行数据传递
 */
import React from "react";

function Toolbar(props) {
  return (
    <div>
      <ThemeButton theme={props.theme}></ThemeButton>
    </div>
  );
}

class ThemeButton extends React.Component {
  render() {
    return <Button theme={this.props.theme}></Button>;
  }
}

export default class ContextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <h6>ContextClass</h6>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Click me
        </button>
      </div>
    );
  }
}
