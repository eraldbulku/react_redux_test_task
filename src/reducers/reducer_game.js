export const actions = {
  GET_DECK: "GET_DECT",
  START_GAME: "START_GAME",
  SELECT_CARD: "SELECT_CARD"
};

const defaultState = {
  deckId: null,
  cards: [],
  numberOfPlayers: 2,
  activePlayer: 0,
  isStarted: false,
  selectedCards: []
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case actions.GET_DECK:
      return { ...state, 
        ['cards']: action.payload.cards,
        ['deckId']: action.payload.deck_id
      };
    case actions.START_GAME:
      return { ...state,
        ['isStarted']: true,
        ['numberOfPlayers']: action.payload
      };
    case actions.SELECT_CARD:
      return { ...state,
        ['selectedCards']: state.selectedCards.push(action.payload),
        ['activePlayer']: state.activePlayer === state.numberOfPlayers - 1 ? 0 : state.activePlayer + 1
      };
    default:
      return state;
  }
}
