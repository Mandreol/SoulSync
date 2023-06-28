import React, { useState } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import "../../styles/dashboard/flipabbleCard.css";
import "../../styles/dashboard/deckCard.css";
import { useDispatch, useSelector } from "react-redux";

const FlipabbleCard = (deck) => {
	const [showFront, setShowFront] = useState(true);
	const flippableClass = `flipabble-card-container-maso_${deck.deck.deckType}`;
	const cardsTexts = useSelector((state) => state.dealData.cardTexts);
	const cardId = `card_${deck.deck.id}`;
	console.log(cardId);
	const cardTitle = cardsTexts[deck.deck.id - 1];

	const handleOnClick = () => {
		setShowFront((prevState) => !prevState);
	};

	return (
		<div className={`flipabble-card-container ${cardId}`}>
			<div className="cardTitle">
				<h1>{cardTitle}</h1>
			</div>
			<CSSTransition in={showFront} timeout={300} classNames="flip">
				<Card key={deck.deck.id} onDoubleClick={handleOnClick} deck={deck} />
			</CSSTransition>
		</div>
	);
};

export default FlipabbleCard;
