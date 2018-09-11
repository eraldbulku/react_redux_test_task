import React, { PureComponent } from "react";
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
  return { y: 420, x: 250 + index * 55 };
};



class CardContent extends PureComponent {
  state = {
    rotationY: 0,
    selectedCard: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.isStarted && !prevProps.isStarted) {
      setTimeout(() => this.flipCard(), 500 + prevProps.index);
    }
  }

  flipCard() {
    const rotationY = this.state.rotationY === 0 ? 180 : 0;
    this.setState({ rotationY });
  }

  handleCardSelected = () => {
    // if not human's turn, return
    if (!this.props.humanCanPlay) {
      return;
    }
    this.setState({ selectedCard: this.props.index });
    this.props.selectCard(this.props.card);
    this.props.updateHumanPlay(false);
  };

  getCardTranslation() {
    // if the card is clicked, send it to the table
    if (this.state.selectedCard === this.props.index) {
      return {
        x: spring(350, springConfig),
        y: spring(205, springConfig)
      };
      // else if the game has started deal the cards
    } else if (this.props.isStarted) {
      const { x, y } = getXY(this.props.index);
      return {
        x: spring(x, springConfig),
        y: spring(y, springConfig)
      };
    } else {
      return { x: 0, y: 0 };
    }
  }

  render() {
    return (
      <Motion defaultStyle={{ x: 0, y: 0 }} style={this.getCardTranslation()}>
        {({ x, y }) => {
          return (
            <div
              className="card_container"
              style={getStyle(x, y)}
              onClick={this.handleCardSelected}
            >
              <Card
                rotationY={this.state.rotationY}
                index={this.props.index}
                card={this.props.card}
              />
            </div>
          );
        }}
      </Motion>
    );
  }
}

export default CardContent;
