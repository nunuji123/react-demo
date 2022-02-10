import React, { PureComponent } from "react";

/**
 * PureComponent 和 React.memo 功能是一样的， 都是对props的值的浅比较来决定是否需要更新
 * todo: 浅比较的源码
 */
export default class ChildClass extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }
  // shouldComponentUpdate (nextProps, nextState) {
  //   return true
  // }
  render () {
    console.log(`ChildClass render`);
    return (
      <div>
        <h4>Child-Class</h4>
        {/* <h5>{this.props.msg}</h5> */}
      </div>
    );
  }
}
