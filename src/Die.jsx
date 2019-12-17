import React, { Component } from 'react';

export class Die extends Component {
  render() {
    const numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
    const { dieValue } = this.props;
    return (
      <div>
        <i class={`fas fa-dice-${numArray[dieValue]}`}></i>
      </div>
    );
  }
}

export default Die;
