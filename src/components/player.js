import React from "react";

const Player = ({ index, human = false }) => {
  if (human) {
    return <div className="human_player">Player1 (You)</div>;
  }
  return <div>Player{index + 2}</div>;
};

export default Player;
