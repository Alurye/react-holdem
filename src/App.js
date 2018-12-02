import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokerTable from './components/poker_table';
import CreatePlayerForm from './components/create_player_form';

class App extends Component {

  state = {
    players: [],
    rooms: []
  }


  createPlayer = (e,player) => {
    e.preventDefault();
    this.setState({
        players:[...this.state.players, player],
        playerCount: this.state.players.length
    }, () => {
      this.setState({
        player: {
          playerName:'',
          stakes:'',
          buyIn:''
        }
      })
    })
  }





  render() {
    return (
      <div className="App">
        <CreatePlayerForm createPlayer={this.createPlayer} />
        <PokerTable  players={this.state.players}/>
      </div>
    );
  }
}

export default App;
