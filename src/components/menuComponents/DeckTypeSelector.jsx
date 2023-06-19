import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDeckType, setDeckSize } from "../../store/slices/deckType.slice";
import "../../styles/DeckTypeSelector.css";

const DeckTypeSelector = () => {
	const dispatch = useDispatch();
	const [isSelected, setIsSelected] = useState(0);
	const handleClick = (deckType, deckSize) => {
		dispatch(setDeckType(deckType));
		dispatch(setDeckSize(deckSize));
		setIsSelected(deckType);
	};
	let selected_1;
	let selected_2;
	let selected_3;
	isSelected === 1 ? (selected_1 = "selected") : (selected_1 = "");
	isSelected === 2 ? (selected_2 = "selected") : (selected_2 = "");
	isSelected === 3 ? (selected_3 = "selected") : (selected_3 = "");

	return (
		<div className="DeckTypeSelector-container">
			<div>
				<div
					className={`DeckTypeSelector-element ${selected_1}`}
					onClick={() => handleClick(1, 65)}
					style={{ backgroundImage: "url('./img/maso_1/icono_maso_1.png')" }}></div>
				<h1>Point of view</h1>
			</div>
			<div>
				{" "}
				<div
					className={`DeckTypeSelector-element ${selected_2}`}
					onClick={() => handleClick(2, 80)}
					style={{ backgroundImage: "url('./img/maso_2/icon_deck_2.png')" }}></div>
				<h1>Magic Cards</h1>
			</div>
			<div>
				{" "}
				<div
					className={`DeckTypeSelector-element ${selected_3}`}
					onClick={() => handleClick(3, 25)}
					style={{ backgroundImage: "url('./img/maso_3/icon_deck_3.png')" }}></div>
				<h1>Principios Ñu</h1>
			</div>
		</div>
	);
};

export default DeckTypeSelector;
