import React, { Component } from 'react';
import Deck from "../containers/deck";
import SelectPlayers from "../containers/select_players";
import GameTable from "../containers/game_table";

export default class App extends Component {
  render() {
    return (
      <div>
        <SelectPlayers />
        <Deck />
        <GameTable />
      </div>
    );
  }
}
