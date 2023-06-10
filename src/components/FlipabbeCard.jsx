import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "../styles/flipabbleCard.css";

const FlipabbeCard = () => {
	const [showFront, setShowFront] = useState(true);
	return (
		<div className="flipabble-card-container">
			<CSSTransition in={showFront} timeout={300} classNames="flip">
				<Card
					onClick={() => {
						setShowFront((v) => !v);
					}}
				/>
			</CSSTransition>
		</div>
	);
};

export default FlipabbeCard;
