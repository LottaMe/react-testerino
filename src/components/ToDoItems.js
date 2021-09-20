import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTask(item) {
    console.log(item.key);
    return (
      <li key={item.key} onClick={() => this.delete(item.key)}>
        {item.value}
      </li>
    );
  }
  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTask);
    return <ul className="theList">{listItems}</ul>;
  }
}
export default TodoItems;
