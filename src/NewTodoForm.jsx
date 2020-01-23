import React, { Component } from 'react';

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ todoField: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.props.value}
            type="text"
            name="todoField"
            onChange={this.handleChange}
          />
          <button type="submit">
            {this.props.button === 'edit' ? 'edit' : 'add todo'}
          </button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
