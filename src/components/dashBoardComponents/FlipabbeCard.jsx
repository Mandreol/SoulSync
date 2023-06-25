import React, { useState } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import "../../styles/flipabbleCard.css";

const FlipabbleCard = (deck) => {
	const [showFront, setShowFront] = useState(true);
	const flippableClass = `flipabble-card-container-maso_${deck.deck.deckType}`;
	const cardsTitle = {
		title_1: "titulo_1",
		title_2: "titulo_2",
		title_3: "titulo_3",
		title_4: "titulo_4",
		title_5: "titulo_5",
		title_6: "titulo_6",
		title_7: "titulo_7",
	};
	const titleId = `title_${deck.deck.id}`;

	const cardTitle = cardsTitle[titleId];

	const handleOnClick = () => {
		setShowFront((prevState) => !prevState);
	};

	return (
		<div className={flippableClass}>
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
