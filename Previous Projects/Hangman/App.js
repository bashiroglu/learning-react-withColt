import React, { Component } from 'react';
import './App.css';
import Hangman from './Hangman';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman maxGuesses="6" />
      </div>
    );
  }
}

export default App;
