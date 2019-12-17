import React, { Component } from 'react';
import './Die.css';

export class Die extends Component {
  render() {
    const numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
    const { dieValue } = this.props;
    return (
      <div>
        <i className={`Die fas fa-dice-${numArray[dieValue]}`}></i>
      </div>
    );
  }
}

export default Die;
