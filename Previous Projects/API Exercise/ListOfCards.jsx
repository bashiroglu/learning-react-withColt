import React, { Component } from 'react';
import axios from 'axios';

export class ListOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCards: [],
      listId: ''
    };
    this.HandleGetCard = this.HandleGetCard.bind(this);
  }
  async componentDidMount() {
    const response = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/shuffle/'
    );
    const ListId = response.data.deck_id;
    this.setState({ ...this.state, listId: ListId });
  }
  async HandleGetCard() {
    const response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.listId}/draw/`
    );
    const CountOfRemainingCards = response.data.remaining;
    if (response.data.success) {
      // we have to this because in 51 response we already get
      //remaing left 0
      const newCard = response.data.cards[0];
      const newCards = [...this.state.listOfCards];
      newCards.push(newCard);
      this.setState({ ...this.state, listOfCards: newCards });
      console.log(newCards);
    } else {
      console.log('we finished');
    }
  }
  render() {
    return (
      <div>
        hello
        <button onClick={this.HandleGetCard}>Give me card</button>
        {this.state.listOfCards.map(card => (
          <img
            src={card.image}
            alt={`${card.suit}-${card.value}`}
            key={`${card.suit}-${card.value}`}
          />
        ))}
      </div>
    );
  }
}

export default ListOfCards;
