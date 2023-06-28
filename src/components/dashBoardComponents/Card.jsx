import React, { useState } from "react";
import "../../styles/dashboard/card.css";
import "../../styles/cardTransitionGroup.css";
import FullCardViewButton from "./FullCardViewButton";
import { useSelector } from "react-redux";

function Card({ deck, onDoubleClick }) {
	const [isHover, setIsHover] = useState(true);
	const [isCover, setIsCover] = useState(true);
	const [showButton, setShowButton] = useState(true);
	const deckType = useSelector((state) => state.dealData.deckType);
	const backText = useSelector((state) => state.dealData.backText);

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
		showButtonClass = showButton
			? "fullCardViewButton-dashBoard-hidden"
			: "fullCardViewButton-dashBoard-visible";
	};

	fullImageButtonClass();
	const imageStyle = {
		backgroundImage: `url(./img/maso_${deck.deck.deckType}/${deck.deck.id}.jpg)`,
	};

	let coverClass;
	const handleCover = () => {
		isCover ? setIsCover(false) : setIsCover(true);
	};
	if (deck.deck.deckType !== 3) {
		coverClass = isCover ? "cover" : "noCover";
	} else {
		coverClass = "noCover";
	}

	return (
		<div className={`deck deck_${deckType}`} onDoubleClick={onDoubleClick}>
			<div
				className={hoverClass}
				onMouseEnter={handleOnMouseEnterBack}
				onMouseLeave={handleOnMouseLeaveBack}>
				<p>{deck.deck.cardNumber}</p>
				<h1>{deck.deck.backText}</h1>
			</div>
			<div
				className="card-front"
				style={imageStyle}
				onMouseEnter={handleOnMouseEnterFront}
				onMouseLeave={handleOnMouseLeaveFront}>
				<FullCardViewButton
					cardId={deck.deck.id}
					showButtonClass={showButtonClass}
				/>

				<div className={coverClass} onClick={handleCover}></div>
			</div>
		</div>
	);
}

export default Card;
