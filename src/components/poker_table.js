import React, { Component } from 'react';
import Player from './player';





class PokerTable extends Component {

  state = {
    gameStarted: false,
    playerCount: 0,
    playerPosition:[],
    cardCount: 52,
    foldedCards: [],
    burnCards:[],
    highCards:[],
    muckPile:[],
    deck:[]
  }

   buildDeck = ()  => {
    const deck = [];
    const suits = ["s","h","c","d"];
    const cards = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

        suits.forEach((suit) => {
            return cards.forEach((card) => {
                return deck.push(card + suit);
             }) ;
        });

        this.setState({
          deck: deck
        });

  }

  startGame = () => {
    this.setState({
      gameStarted: !this.state.gameStarted
    });
  }

  positionPlayers = () => {
    const radius = 360
    const numOfPlayers  = this.props.players.length;
    const playerPos = radius / numOfPlayers;

    return this.props.players.map((player,i) => {
            const playerStyles = {
                  transform: "rotate(" + playerPos * i  + "deg)"
          }
          return  <Player playerStyles={playerStyles} id={i} key={i} player={player} />
    });

  }

   randomCard = () => {
  return Math.floor(Math.random() * (this.state.deck.length));

}

   shuffleDeck = () => {
      const shuffledDeck = [];
              while(this.state.deck.length !== 0) {
                 shuffledDeck.push(this.state.deck.splice(this.randomCard(),1)[0]);
              }

              this.setState({
                deck: shuffledDeck
              });


}


  render(){
    console.log("deck:",this.state.deck);
    return (
          <div className="poker_table felt">
            <button onClick={this.buildDeck} >buildDeck</button>
              <button onClick={this.shuffleDeck} >shufleDeck</button>
            <div>
              {this.props.players !== undefined ? this.positionPlayers(): null}
              </div>
          </div>
    )
  }
}

export default PokerTable;
