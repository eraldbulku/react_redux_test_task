import React from "react";
import Player from "./player";

const Players = ({ numberOfPlayers, scores }) => {
  return (
    <div className="players_container">
      {[...Array(numberOfPlayers - 1).keys()].map(index => {
        return <Player key={index} index={index} score={scores[index + 1]}/>;
      })}
    </div>
  );
};

export default Players;
