import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeck } from "../actions/index";
import { bindActionCreators } from 'redux';

class Deck extends Component {
  componentDidMount() {
    this.props.fetchDeck();
  }

  render() {
    const { cards, isStarted } = this.props.game;
    console.log(this.props.game);
    return (
      <div>
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDeck: fetchDeck
  }, dispatch);
}

function mapStateToProps(state) {
    return { game: state.game };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
