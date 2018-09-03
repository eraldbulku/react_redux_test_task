import React from "react";

const Card = ({ card, index, rotationY }) => (
  <div id="card" style={{ transform: `rotateY(${rotationY}deg)` }}>
    <img className="front" src="public/images/card_back_blue.png" />
    <img className="back" src={card.image} />
  </div>
);

export default Card;
