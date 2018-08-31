import React from "react";

const Card = ({ card, index }) => (
  <div id="card">
    <img className="front" src="public/images/card_back_blue.png" />
    <img className="back" src={card.image} />
  </div>
);

export default Card;
