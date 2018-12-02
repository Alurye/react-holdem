import React, {Component} from 'react';

class CreatePlayerForm extends Component {

  state = {
    player: {
      playerName:'',
      stakes:'Select Your Stakes',
      buyIn:''
    },
    options:["Select Your Stakes", "1/2", "5/10", "10/20"],
    playerCount:0,
    players:[]
  }

  minBuyIn = () => {

        let bigBlind = parseInt(this.state.player.stakes.split('/')[1]);
        let buyIn = bigBlind * 50;
        this.setState({
          player: {...this.state.player,
            buyIn: buyIn
            }
        });
      }




  clearBuyInField = () => {
    this.setState({
      player: {...this.state.player,
        buyIn: ''
        }
    })
  }


  handleChange = (e) => {
      e.preventDefault();

      this.setState({
       player: {
         ...this.state.player,
         [e.target.name]: e.target.value
       }
     },  () => {
         return this.state.player.playerName !== '' && this.state.options[0] === this.state.player.stakes ? this.clearBuyInField(): this.minBuyIn();
     });
}






  render(){
    console.log(this.props, this.state.player);
    return(
      <form >
      <div>
          <label htmlFor="playerName">Name:</label>
          <input onChange={this.handleChange} name="playerName" value={this.state.player.playerName} type="text" / >

            <br/>
          <br />
            <h2>Stakes</h2>
            <select name="stakes" onChange={this.handleChange}>
              {this.state.options.map((option,i) => {
                    return <option  key={i} value={option} >{option}</option>
              })}
            </select>
            <br/>
          <label htmlFor="playerName">Buy in:</label>

          <input onChange={this.handleChange} name="buyIn" value={this.state.player.buyIn} type="text" />


      </div>

      <button onClick={(e) => {this.props.createPlayer(e, this.state.player)} } >Continue</button>
      </form>
    )
  }
}

export default CreatePlayerForm;
