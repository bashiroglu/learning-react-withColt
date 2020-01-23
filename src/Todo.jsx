import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
    this.HandleButtonToggle = this.HandleButtonToggle.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
  }
  HandleButtonToggle() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  onSubmitUpdate() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <NewTodoForm
            onSubmit={this.onSubmitUpdate}
            button="edit"
            value={message}
          />
        ) : (
          <div>
            <div>{message}</div>
            <button onClick={this.HandleButtonToggle}>edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default Todo;
