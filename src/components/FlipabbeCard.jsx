import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "../styles/flipabbleCard.css";

const FlipabbeCard = (deck) => {
	const [showFront, setShowFront] = useState(true);
	return (
		<div className="flipabble-card-container">
			<CSSTransition in={showFront} timeout={300} classNames="flip">
				<Card
					key={deck.deck.id}
					onClick={() => {
						setShowFront((v) => !v);
					}}
					deck={deck}
				/>
			</CSSTransition>
		</div>
	);
};

export default FlipabbeCard;
