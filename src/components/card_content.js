import React from "react";
import Card from "../components/card";
import { Motion, spring } from "react-motion";

const springConfig = {
  stiffness: 340,
  damping: 88,
  precision: 0.0001
};

const getStyle = (x, y) => {
  return {
    transform: `translate3d(${x}px, ${y}px, 0)`
  };
};

const getXY = index => {
  return { y: 500, x: 200 + index * 55 };
};

const Cards = ({ index, card, isStarted }) => {
  const { x, y } = getXY(index);
  const cardTranslation = isStarted
    ? { x: spring(x, springConfig), y: spring(y, springConfig) }
    : { x: 0, y: 0 };
  return (
    <Motion defaultStyle={{ x: 0, y: 0 }} style={cardTranslation}>
      {({ x, y }) => {
        return (
          <div className="card_container" style={getStyle(x, y)}>
            <Card index={index} card={card} />
          </div>
        );
      }}
    </Motion>
  );
};

export default Cards;
