import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeck, 
         selectCard,
         getCardFromDeck, 
         startNewRound, 
         calcScores } from "../actions/index";
import { bindActionCreators } from 'redux';
import Notification from "../services/NotificationService";
import { getWinnerNotification } from "../helpers/scores";
import CardContent from "../components/card_content";
import { WINNER,
         LOOSER,
         MSG_WINNER,
         TITLE_WINNER,
         TITLE_LOOSER,
         NEXT_ROUND
       } from "../config/Constants";

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
    const { selectedCards, cards, scores, numberOfPlayers, deckId } = this.props.game;

    if (selectedCards.length > prevProps.game.selectedCards.length) {
      if (selectedCards.length !== Number(numberOfPlayers)) {
        setTimeout(() => {
          this.props.getCardFromDeck(deckId);
        }, 500);
      } else {
        setTimeout(() => {
          this.props.calcScores();
        }, 1000);
        setTimeout(() => {
          if (cards.length === 1) {
            const finalScore = getWinnerNotification(scores);
            if(finalScore.result === WINNER) {
              Notification.success(finalScore.msg, finalScore.title);
            } else {
              Notification.error(finalScore.msg, finalScore.title);
            }
          } else {
            this.setState({ humanCanPlay: true });
            Notification.info(NEXT_ROUND);
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
    fetchDeck,
    selectCard,
    getCardFromDeck,
    startNewRound,
    calcScores
  }, dispatch);
}

function mapStateToProps(state) {
    return { game: state.game };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
