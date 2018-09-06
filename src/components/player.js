import React from "react";

const Player = ({ index, human = false, score }) => {
  if (human) {
    return <div className="human_player">(You) {score}</div>;
  }
  return <div>Player {index + 2} {score}</div>;
};

export default Player;
