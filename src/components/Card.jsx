import React, { useState } from "react";
import "../styles/card.css";
import "../styles/cardTransitionGroup.css";

function Card({ deck, onClick, showClass }) {
	const [isHover, setIsHover] = useState(true);
	const [isCover, setIsCover] = useState(true);

	const handleOnMouseEnter = () => {
		setIsHover(false);
	};
	const handleOnMouseLeave = (e) => {
		e.stopPropagation();
		setIsHover(true);
	};

	const handleCover = (e) => {
		e.stopPropagation();
		isCover ? setIsCover(false) : setIsCover(true);
	};

	const imageStyle = {
		backgroundImage: `url(./img/maso_${deck.deck.mazo}/${deck.deck.id}.jpg)`,
	};
	const hoverClass = isHover ? "card-back" : "card-back card-hover";

	let coverClass;
	if (deck.deck.mazo !== 3) {
		coverClass = isCover ? "cover" : "noCover";
	} else {
		coverClass = "noCover";
	}

	return (
		<div className={showClass} onClick={onClick}>
			<div
				className={hoverClass}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}>
				<p>{deck.deck.id}</p>
				<h1>{deck.deck.text}</h1>
			</div>
			<div className="card-front" style={imageStyle}>
				<div className={coverClass} onClick={handleCover}></div>
			</div>
		</div>
	);
}

export default Card;
