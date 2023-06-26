import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeckType, setDeckSize } from "../../store/slices/deckType.slice";
import "../../styles/menu/deckSelector/deckSelector.css";
import { setMenuStatus } from "../../store/slices/menuStatus.slice";

const DeckSelector = () => {
	const dispatch = useDispatch();
	const [isSelected, setIsSelected] = useState(0);
	const [buttonClass, setButtonClass] = useState("none");
	const menuStatus = useSelector((state) => state.menuStatus);

	const handleClick = (deckType, deckSize) => {
		dispatch(setDeckType(deckType));
		dispatch(setDeckSize(deckSize));
		setIsSelected(deckType);
		setButtonClass("flex");
	};
	useEffect(() => {
		isSelected !== 0 && menuStatus === 0
			? setButtonClass("flex")
			: setButtonClass("none");
	}, [menuStatus]);

	const handleSubmit = () => {
		dispatch(setMenuStatus(1));
	};
	const selected = (option) => (isSelected === option ? "selected" : "");

	return (
		<div className="DeckSelector-container">
			<h1>Elegí el mazo con el que querés trabajar hoy:</h1>
			<div className="elements-container">
				<div className="DeckSelector-element-container">
					<div
						className={`DeckSelector-element ${selected(1)}`}
						onClick={() => handleClick(1, 65)}
						style={{ backgroundImage: "url('./img/maso_1/icono_maso_1.png')" }}></div>

					<h1>Point of view</h1>
				</div>
				<div className="DeckSelector-element-container">
					<div
						className={`DeckSelector-element ${selected(2)}`}
						onClick={() => handleClick(2, 80)}
						style={{ backgroundImage: "url('./img/maso_2/icon_deck_2.png')" }}></div>
					<h1>Fatasy Cards</h1>
				</div>
				<div className="DeckSelector-element-container">
					<div
						className={`DeckSelector-element ${selected(3)}`}
						onClick={() => handleClick(3, 25)}
						style={{ backgroundImage: "url('./img/maso_3/icon_deck_3.png')" }}></div>
					<h1>Principios Ñu</h1>
				</div>
				<div
					className="DeckSelector-element-button"
					style={{ display: buttonClass }}
					onClick={() => handleSubmit()}></div>
			</div>
		</div>
	);
};

export default DeckSelector;
