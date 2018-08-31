import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame } from "../actions/index";
import { bindActionCreators } from 'redux';

class SelectPlayers extends Component {
  constructor(props) {
    super(props);

    this.handleStartingGame = this.handleStartingGame.bind(this); // binding function
  }

  handleStartingGame() {
    this.props.startGame();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <p>Select players:</p>
          <select className="form-control">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="btn btn-primary" onClick={this.handleStartingGame}>
            Start
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startGame: startGame,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectPlayers);
