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
                <button onClick={this.handleClick}>update Parent-Function msg</button>
                <Child msg={this.state.msg}></Child>
            </div>
        );
    }
}
