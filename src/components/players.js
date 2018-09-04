import React from "react";
import Player from "./player";

const Players = ({ numberOfPlayers }) => {
  return (
    <div className="players_container">
      {[...Array(numberOfPlayers - 1).keys()].map(index => {
        return <Player key={index} index={index} />;
      })}
    </div>
  );
};

export default Players;
