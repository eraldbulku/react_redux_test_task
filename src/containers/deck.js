import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeck, 
         selectCard,
         getCardFromDeck, 
         startNewRound, 
         calcScores } from "../actions/index";
import { bindActionCreators } from 'redux';

import CardContent from "../components/card_content";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 1,
      humanCanPlay: true,
    };
  }

  componentDidMount() {
    this.props.fetchDeck();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.game) return;
    const { game } = this.props;

    if (game.selectedCards.length > prevProps.game.selectedCards.length) {
      if (game.selectedCards.length !== Number(game.numberOfPlayers)) {
        setTimeout(() => {
          this.props.getCardFromDeck(game.deckId);
        }, 500);
      } else {
        setTimeout(() => {
          this.props.calcScores();
        }, 1000);
        setTimeout(() => {
          if (game.cards.length === 1) {
          } else {
            this.setState({ humanCanPlay: true });
          }
          this.props.startNewRound();
        }, 2000);
      }
    }
  }

  updateHumanPlay = humanCanPlay => {
    this.setState({ humanCanPlay });
  };

  render() {
    const { cards,
            isStarted,
            activePlayer,
            scores } = this.props.game;

    const cardsList = cards.map((card, i) => {
        return (
          <CardContent
            index={i}
            key={card.code}
            card={card}
            isStarted={isStarted}
            selectCard={this.props.selectCard}
            activePlayer={activePlayer}
            humanCanPlay={isStarted ? this.state.humanCanPlay : false}
            updateHumanPlay={this.updateHumanPlay}
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
    selectCard: selectCard,
    getCardFromDeck: getCardFromDeck,
    startNewRound: startNewRound,
    calcScores: calcScores
  }, dispatch);
}

function mapStateToProps(state) {
    return { game: state.game };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
