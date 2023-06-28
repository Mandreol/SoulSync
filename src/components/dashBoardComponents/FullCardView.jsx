import React, { useState } from "react";
import "../../styles/dashboard/FullCardView.css";
import { useSelector } from "react-redux";
import FullCardViewButton from "./FullCardViewButton";

const FullCardView = () => {
	const [isCover, setIsCover] = useState(true);
	const deckType = useSelector((state) => state.dealData.deckType);
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
	const handleCover = () => {
		isCover ? setIsCover(false) : setIsCover(true);
	};
	let coverClass = "";

	if (deckType !== 3) {
		coverClass = isCover ? "cover" : "noCover";
	} else {
		coverClass = "noCover";
	}
	return (
		<div className="FullCardView-container" style={fullCardViewActiveClass}>
			<div
				className={`FullCardView-card-deck-${deckType}`}
				style={{
					backgroundImage: `url(./img/maso_${deckType}/${selectedFullViewCard}.jpg)`,
				}}>
				<div className={coverClass} onClick={() => handleCover(isCover)}></div>
			</div>

			<FullCardViewButton showButtonClass={showButtonClass} />
		</div>
	);
};

export default FullCardView;
