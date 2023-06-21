import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDeckType, setDeckSize } from "../../store/slices/deckType.slice";
import "../../styles/DeckTypeSelector.css";
import { setMenuStatus } from "../../store/slices/menuStatus.slice";

const DeckTypeSelector = () => {
	const dispatch = useDispatch();
	const [isSelected, setIsSelected] = useState(0);
	const [buttonClass, setButtonClass] = useState("none");

	const handleClick = (deckType, deckSize) => {
		dispatch(setDeckType(deckType));
		dispatch(setDeckSize(deckSize));
		setIsSelected(deckType);
		setButtonClass("flex");
	};

	const handleSubmit = () => {
		dispatch(setMenuStatus(1));
		setButtonClass("none");
		setIsSelected("");
	};

	const selected = (option) => (isSelected === option ? "selected" : "");

	return (
		<div className="DeckTypeSelector-container">
			<h1>Elegí el mazo con el que querés trabajar hoy</h1>
			<div className="elements-container">
				<div className="DeckTypeSelector-element-container">
					<div
						className={`DeckTypeSelector-element ${selected(1)}`}
						onClick={() => handleClick(1, 65)}
						style={{ backgroundImage: "url('./img/maso_1/icono_maso_1.png')" }}></div>

					<h1>Point of view</h1>
				</div>
				<div className="DeckTypeSelector-element-container">
					<div
						className={`DeckTypeSelector-element ${selected(2)}`}
						onClick={() => handleClick(2, 80)}
						style={{ backgroundImage: "url('./img/maso_2/icon_deck_2.png')" }}></div>
					<h1>Fatasy Cards</h1>
				</div>
				<div className="DeckTypeSelector-element-container">
					<div
						className={`DeckTypeSelector-element ${selected(3)}`}
						onClick={() => handleClick(3, 25)}
						style={{ backgroundImage: "url('./img/maso_3/icon_deck_3.png')" }}></div>
					<h1>Principios Ñu</h1>
				</div>
				<div
					className="DeckTypeSelector-element-button"
					style={{ display: buttonClass }}
					onClick={() => handleSubmit()}></div>
			</div>
		</div>
	);
};

export default DeckTypeSelector;
