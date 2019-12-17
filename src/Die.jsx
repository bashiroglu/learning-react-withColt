import React, { Component } from 'react';

export class Die extends Component {
  render() {
     
    return (
      <div>
        <h1>{this.props.dieValue}</h1>
      </div>
    );
  }
}

export default Die;
