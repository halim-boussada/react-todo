import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello",
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler() {
    this.setState({ msg: "good Bye" });
    console.log(this);
  }

  // eventHandler = () => {
  //   this.setState({ msg: "good Bye" });
  //   console.log(this);
  // };

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={this.eventHandler.bind(this)}>click me</button> */}
        {/* <button onClick={() => this.eventHandler()}>
          click me
        </button> */}
        <button onClick={this.eventHandler}>click me</button>
      </div>
    );
  }
}

export default Message;
