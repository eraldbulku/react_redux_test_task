import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeck } from "../actions/index";
import { bindActionCreators } from 'redux';

import CardContent from "../components/card_content";

class Deck extends Component {
  componentDidMount() {
    this.props.fetchDeck();
  }

  render() {
    const { cards, isStarted } = this.props.game;

    const cardsList = cards.map((card, i) => {
        return (
            <CardContent
              index={i}
              key={card.code}
              card={card}
              isStarted={isStarted}
            />
        )
    });

    return (
      <div>
        {cardsList}
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
