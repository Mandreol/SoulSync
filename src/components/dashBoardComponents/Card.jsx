import React, { useState } from "react";
import "../../styles/card.css";
import "../../styles/cardTransitionGroup.css";
import "../../styles/fullImageButtonTransitionGroup.css";
import FullSizeImageButton from "./FullSizeImageButton";
import { CSSTransition } from "react-transition-group";

function Card({ deck, onDoubleClick, showClass }) {
	const [isHover, setIsHover] = useState(true);
	const [isCover, setIsCover] = useState(true);
	const [showButton, setShowButton] = useState(true);

	const handleOnMouseEnterBack = () => {
		setIsHover(false);
	};
	const handleOnMouseLeaveBack = () => {
		setIsHover(true);
	};

	const hoverClass = isHover ? "card-back" : "card-back card-hover";

	const handleOnMouseEnterFront = () => {
		setShowButton(false);
	};
	const handleOnMouseLeaveFront = () => {
		setShowButton(true);
	};
	let showButtonClass;

	const fullImageButtonClass = () => {
		if (showButton) {
			showButtonClass = { visibility: "hidden" };
		} else {
			showButtonClass = { visibility: "visible" };
		}
	};
	fullImageButtonClass();
	const imageStyle = {
		backgroundImage: `url(./img/maso_${deck.deck.deckType}/${deck.deck.cardNumber}.jpg)`,
	};

	let coverClass;
	const handleCover = () => {
		isCover ? setIsCover(false) : setIsCover(true);
	};
	if (deck.deck.deckType !== "3") {
		coverClass = isCover ? "cover" : "noCover";
	} else {
		coverClass = "noCover";
	}

	return (
		<div className={showClass} onDoubleClick={onDoubleClick}>
			<div
				className={hoverClass}
				onMouseEnter={handleOnMouseEnterBack}
				onMouseLeave={handleOnMouseLeaveBack}>
				<p>{deck.deck.id}</p>
				<h1>{deck.deck.backText}</h1>
			</div>
			<div
				className="card-front"
				style={imageStyle}
				onMouseEnter={handleOnMouseEnterFront}
				onMouseLeave={handleOnMouseLeaveFront}>
				<FullSizeImageButton showButtonClass={showButtonClass} />

				<div className={coverClass} onClick={handleCover}></div>
			</div>
		</div>
	);
}

export default Card;
