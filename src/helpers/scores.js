export function getInitScores(nrPlayers) {
	let scores = [];
	while(nrPlayers > 0) {
		scores.push(0);
		--nrPlayers;
	}
	return scores;
}

export function getUpdatedScore(scores, cards) {
  const index = getIndexOfRoundWinner(cards);
  const score = calculateScore(cards);
  scores[index] += score;
  
  return scores;
}

function calculateScore(cards) {
  return cards.reduce(
    (total, card) => total + getCardNumericValue(card.value),
    0
  );
}

function getCardNumericValue(cardValue) {
  const cardValueMap = {
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14
  };
  return cardValueMap.hasOwnProperty(cardValue)
    ? cardValueMap[cardValue]
    : parseInt(cardValue);
}

function getIndexOfRoundWinner(cards) {
  let max = getCardNumericValue(cards[0].value);
  let maxIndex = 0;

  for (let i = 1; i < cards.length; i++) {
    let cardValue = getCardNumericValue(cards[i].value);
    if (cardValue >= max) {
      maxIndex = i;
      max = cardValue;
    }
  }

  return maxIndex;
}
