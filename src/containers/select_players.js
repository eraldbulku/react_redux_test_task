import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame } from "../actions/index";
import { bindActionCreators } from 'redux';

class SelectPlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfPlayers: 2
    };

    this.handleStartingGame = this.handleStartingGame.bind(this); // binding function
    this.selectNumberOfPlayers = this.selectNumberOfPlayers.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
  }

  handleStartingGame(event) {
    event.preventDefault();
    this.props.startGame(this.state.numberOfPlayers);
  }

  selectNumberOfPlayers(event) {
    this.setState({ numberOfPlayers: event.target.value });
  }

  handleResetGame() {
    window.location.reload();
  }

  render() {
    return (
      <div className="row">
        <div className={!this.props.game.isStarted ? 'hideElement' : 'col-md-4'}>
          <br/>
          <button className="btn btn-primary" onClick={this.handleResetGame}>RESET GAME</button>
        </div>
        <div className={this.props.game.isStarted ? 'hideElement' : 'col-md-4'}>
          <p>Select players:</p>
          <div className="input-group">
            <select 
              className="form-control"
              onChange={this.selectNumberOfPlayers}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <span className="input-group-btn">
              <button className="btn btn-primary startGameBtn" onClick={this.handleStartingGame}>Start</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { game: state.game };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startGame: startGame,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayers);
