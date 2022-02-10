import React from "react";
import Child from "./child";

export default class ParentClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            msg: "ParentClass Msg"
        };
    }

    handleClick = () => {
        this.setState({
            msg: `new ${new Date().getTime()}`
        });
    };
    render () {
        console.log(`ParentClass render`);
        return (
            <div>
                <h4>Parent-Class</h4>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>update Parent-Function msg</button>
                {/* 不管是否传递msg 只要ParentClass rerender Child就会rerender ，导致无效渲染*/}
                <Child></Child>
                {/* <Child msg={this.state.msg}></Child> */}
            </div>
        );
    }
}
