import React from "react";
import "../../styles/FullCardView.css";
import { useSelector } from "react-redux";
import FullCardViewButton from "./FullCardViewButton";

const FullCardView = () => {
	const deckType = useSelector((state) => state.deckType.deckType);
	const fullCardViewActive = useSelector((state) => state.fullCardViewActive);
	const selectedFullViewCard = useSelector(
		(state) => state.selectedFullViewCard
	);

	let fullCardViewActiveClass = {
		display: fullCardViewActive ? "flex" : "none",
	};

	let showButtonClass;
	if (fullCardViewActive) {
		showButtonClass = "fullCardViewButton-fullView";
	} else {
		showButtonClass = "";
	}

	return (
		<div className="FullCardView-container" style={fullCardViewActiveClass}>
			<div
				className={`FullCardView-card-deck-${deckType}`}
				style={{
					backgroundImage: `url(./img/maso_${deckType}/${selectedFullViewCard}.jpg)`,
				}}></div>
			<FullCardViewButton showButtonClass={showButtonClass} />
		</div>
	);
};

export default FullCardView;
