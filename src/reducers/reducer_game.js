export const actions = {
  GET_DECK: "GET_DECT"
};

const defaultState = {
  deckId: null,
  cards: [],
  numberOfPlayers: 2,
  activePlayer: 1,
  isStarted: false
};

export default function(state, action) {
  switch(action.type) {
    case actions.GET_DECK:
      return state;
     default:
      return null;
  }
}