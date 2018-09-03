import axios from 'axios';
import { actions } from "../reducers/reducer_game";

export const DECK_CARD_API_URL = 'https://deckofcardsapi.com/api/deck';

export function fetchDeck() {
  const count = 10;
  const request = axios.get(`${DECK_CARD_API_URL}/new/draw/?count=${count}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
          type: actions.GET_DECK,
          payload: data
      });
    });
  };
}

export function startGame(data) {
  return { type: actions.START_GAME, payload: data };
}

export function selectCard(data) {
  return { type: actions.SELECT_CARD, payload: data };
}
