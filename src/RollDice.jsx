import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieValue1: 1,
      dieValue2: 1,
      rolling: false
    };
  }
  generateRandomDice = () => {
    const rand1 = Math.floor(Math.random() * 6) + 1;
    const rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({
        dieValue1: rand1,
        dieValue2: rand2,
        rolling: false
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Die dieValue={this.state.dieValue1} />
        <Die dieValue={this.state.dieValue2} />
        <button className="btn" onClick={this.generateRandomDice}>
          {this.state.rolling ? 'rolling' : 'Role Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
