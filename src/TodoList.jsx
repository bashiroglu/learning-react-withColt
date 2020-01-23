import React, { Component } from 'react';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} message={todo.task} />
        ))}
      </div>
    );
  }
}

export default TodoList;
