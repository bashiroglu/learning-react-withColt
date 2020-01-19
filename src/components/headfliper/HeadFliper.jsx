import React, { Component } from 'react';
import Head from '../head/Head';

export class HeadFliper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipCount: 0,
      sideFirst: 0,
      sideSecond: 0,
      side: null
    };
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random === 1) {
      this.setState(previousState => {
        return {
          side: random,
          flipCount: previousState.flipCount + 1,
          sideFirst: previousState.sideFirst + 1
        };
      });
    } else {
      this.setState(previousState => {
        return {
          side: random,
          flipCount: previousState.flipCount + 1,
          sideSecond: previousState.sideSecond + 1
        };
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.side && <Head side={this.state.side} />}
        <button onClick={this.handleButton}>Flip me</button>
        <p>{`count: ${this.state.flipCount} first: ${this.state.sideFirst} second: ${this.state.sideSecond}`}</p>
      </div>
    );
  }
}

export default HeadFliper;
