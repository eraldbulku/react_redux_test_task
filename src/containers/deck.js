import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeck, selectCard } from "../actions/index";
import { bindActionCreators } from 'redux';

import CardContent from "../components/card_content";

class Deck extends Component {
  componentDidMount() {
    this.props.fetchDeck();
  }

  render() {
    const { cards, isStarted, activePlayer } = this.props.game;

    const cardsList = cards.map((card, i) => {
        return (
          <CardContent
            index={i}
            key={card.code}
            card={card}
            isStarted={isStarted}
            selectCard={this.props.selectCard}
            activePlayer={activePlayer}
          />
        )
    });

    return (
      <div className="row">
        <div className="col-md-12">
          {cardsList}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDeck: fetchDeck,
    selectCard: selectCard
  }, dispatch);
}

function mapStateToProps(state) {
    return { game: state.game };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
