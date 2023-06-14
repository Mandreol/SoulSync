import { useState } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import "../styles/flipabbleCard.css";

const FlipabbleCard = (deck) => {
	const [showFront, setShowFront] = useState(true);
	const [showCard, setShowCard] = useState(false);

	const handleOnClick = (e) => {
		e.stopPropagation();
		setShowFront((prevState) => !prevState);
	};

	const handleDoubleClick = (e) => {
		setShowCard((prevState) => !prevState);
	};

	const showClass = showCard ? "showCard" : "card";
	const flippableClass = `flipabble-card-container-maso_${deck.deck.mazo}`;
	console.log(flippableClass);
	return (
		<div className={flippableClass}>
			<CSSTransition in={showFront} timeout={300} classNames="flip">
				<Card
					key={deck.deck.id}
					onClick={handleOnClick}
					deck={deck}
					onDoubleClick={handleDoubleClick}
					showClass={showClass}
				/>
			</CSSTransition>
		</div>
	);
};

export default FlipabbleCard;
