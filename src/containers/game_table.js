import React, { Component } from "react";
import { connect } from "react-redux";
import Players from "../components/players";
import Player from "../components/player";

class GameTable extends Component {
  render() {
    const { numberOfPlayers, selectedCards } = this.props.game;
    console.log(selectedCards);
    return (
      <div className="row">
        <div className="col-md-12">
            <Players numberOfPlayers={numberOfPlayers} />
            <div className="game_table">
              <div className="flop">
                {selectedCards.map((card, index) => {
                  if (index === 0) return;
                  return <img key={card.code} src={card.image} />;
                })}
              </div>
            </div>
            <Player human={true} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { game: state.game };
}

export default connect(mapStateToProps)(GameTable);
