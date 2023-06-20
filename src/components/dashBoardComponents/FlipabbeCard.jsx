import { useState } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import "../../styles/flipabbleCard.css";
const styles = "mi estilo";

const FlipabbleCard = (deck) => {
	const [showFront, setShowFront] = useState(true);
	const flippableClass = `flipabble-card-container-maso_${deck.deck.deckType}`;

	const handleOnClick = () => {
		setShowFront((prevState) => !prevState);
	};

	return (
		<div className={flippableClass}>
			<CSSTransition in={showFront} timeout={300} classNames="flip">
				<Card key={deck.deck.id} onDoubleClick={handleOnClick} deck={deck} />
			</CSSTransition>
		</div>
	);
};

export default FlipabbleCard;
