import React, { Component } from 'react';
import './App.css';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
