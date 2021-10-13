import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [
        { id: 1, todo: "prepare a lecture" },
        { id: 2, todo: "go to gym" },
      ],
    };
    this.takeInputValue = this.takeInputValue.bind(this);
  }
  takeInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }
  addTodos = () => {
    var todosList = this.state.todos;
    todosList.push({ id: 3, todo: this.state.inputValue });
    this.setState({ todos: todosList });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="put some todo's"
          onChange={this.takeInputValue}
        />
        <button onClick={this.addTodos}>add</button>
        <ul>
          {this.state.todos.map((e, i) => (
            <li key={i}>
              {e.todo} <button>delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
