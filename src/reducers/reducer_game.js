export const actions = {
  GET_DECK: "GET_DECT",
  START_GAME: "START_GAME"
};

const defaultState = {
  deckId: null,
  cards: [],
  numberOfPlayers: 2,
  activePlayer: 1,
  isStarted: false
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case actions.GET_DECK:
      return { ...state, 
        ['cards']: action.payload.cards,
        ['deckId']: action.payload.deck_id
      };
    case actions.START_GAME:
      return { ...state, ['isStarted']: true };
    default:
      return state;
  }
}
