import React, { useState } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import "../../styles/dashboard/flipabbleCard.css";
import "../../styles/dashboard/deckCard.css";
import { useSelector } from "react-redux";

const FlipabbleCard = (deck) => {
	const [showFront, setShowFront] = useState(true);
	const cardsTexts = useSelector((state) => state.dealData.cardTexts);
	const cardId = `card_${deck.deck.id}`;
	const dealType = useSelector((state) => state.dealData.dealType);
	const cardTitle = cardsTexts[deck.deck.id - 1];

	const handleOnClick = () => {
		setShowFront((prevState) => !prevState);
	};

	return (
		<div className={`flipabble-card-container-${dealType} ${cardId}`}>
			{cardsTexts.some((elemento) => elemento !== "") ? (
				<div className="cardTitle"> {cardTitle} </div>
			) : null}

			<CSSTransition in={showFront} timeout={300} classNames="flip">
				<Card key={deck.deck.id} onDoubleClick={handleOnClick} deck={deck} />
			</CSSTransition>
		</div>
	);
};

export default FlipabbleCard;
