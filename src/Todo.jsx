import React, { Component } from 'react';

export class Todo extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <div>{message}</div>
      </div>
    );
  }
}

export default Todo;
