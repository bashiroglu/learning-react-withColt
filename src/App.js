import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: uuid(), task: 'take children from home' }]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(item) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: item.todoField,
          id: uuid()
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} />
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
