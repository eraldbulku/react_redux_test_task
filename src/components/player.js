import React from "react";

const Player = ({ index, human = false, score }) => {
  if (human) {
    return (
    	<div className="human_player">
    		<b>(You)</b>
    		<br/>Score: {score}
    	</div>
    );
  }
  return (
  	<div>
  		<b>Player {index + 2}</b>
  		<br/>Score: {score}
  	</div>
  );
};

export default Player;
