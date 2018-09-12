import _ from 'lodash';
import { getUpdatedScore, getInitScores } from "../helpers/scores";

export const actions = {
  GET_DECK: "GET_DECT",
  START_GAME: "START_GAME",
  SELECT_CARD: "SELECT_CARD",
  GET_CARD_FROM_DECK: "GET_CARD_FROM_DECK",
  START_NEW_ROUND: "START_NEW_ROUND",
  CALC_SCORES: "CALC_SCORES"
};

const defaultState = {
  deckId: null,
  cards: [],
  numberOfPlayers: 2,
  activePlayer: 0,
  isStarted: false,
  selectedCards: [],
  scores: []
};

export default function(state = defaultState, {type, payload}) {
  switch(type) {
    case actions.GET_DECK:
      return { ...state, 
        cards: payload.cards,
        deckId: payload.deck_id
      };
    case actions.START_GAME:
      return { ...state,
        isStarted: true,
        numberOfPlayers: payload,
        scores: getInitScores(payload)
      };
    case actions.SELECT_CARD:
      return { ...state,
        selectedCards: [ ...state.selectedCards, payload],
        activePlayer: state.activePlayer === state.numberOfPlayers - 1 ? 0 : state.activePlayer + 1
      };
    case actions.GET_CARD_FROM_DECK:
      return { ...state,
        selectedCards: [ ...state.selectedCards, payload.cards[0]],
        activePlayer: state.activePlayer === state.numberOfPlayers - 1 ? 0 : state.activePlayer + 1
      };
    case actions.START_NEW_ROUND:
      return { ...state,
        cards: _.filter(state.cards, function(card) {
          return card.code !== state.selectedCards[0].code;
        }),
        selectedCards: []
      };
    case actions.CALC_SCORES:
      return { ...state,
        scores: getUpdatedScore(state.scores, state.selectedCards)
      };
    default:
      return state;
  }
}
