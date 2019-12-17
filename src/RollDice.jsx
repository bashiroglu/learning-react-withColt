import React, { Component } from 'react';
import Die from './Die';

export class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieValue1: 0,
      dieValue2: 0
    };
  }
  generateRandomDice = () => {
    const rand1 = Math.floor(Math.random() * 6) + 1;
    const rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({
      dieValue1: rand1,
      dieValue2: rand2
    });
  };

  render() {
    return (
      <div>
        <Die dieValue={this.state.dieValue1} />
        <Die dieValue={this.state.dieValue2} />
        <button onClick={this.generateRandomDice}>Role Dice</button>
      </div>
    );
  }
}

export default RollDice;
