import React, { Component } from 'react';
import './Die.css';

export class Die extends Component {
  render() {
    const numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
    const { dieValue, rolling } = this.props;
    return (
      <div className="Dice">
        <i
          className={`${rolling && 'Dice-animation'} Die fas fa-dice-${
            numArray[dieValue]
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
