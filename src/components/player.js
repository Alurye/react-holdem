import React from 'react';


const Player = (props) => {
  console.log("player:",props);
  const {playerName} = props.player
    return(
      <div id={props.id} style={props.playerStyles} className="player">
        {playerName}
      </div>
    )

}

export default Player;
