/**
 * context(上下文)官方文档： https://zh-hans.reactjs.org/docs/context.html
 * 无需手动给组件添加props，就能在组件树中进行数据传递
 */
import React from "react";
import ContextDemo from "./context";

export default class ContextClass extends React.Component {
  render() {
    return <ContextDemo></ContextDemo>;
  }
}
