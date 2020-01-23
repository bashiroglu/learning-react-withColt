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
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todoField" onChange={this.handleChange} />
          <button type="submit">add todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
