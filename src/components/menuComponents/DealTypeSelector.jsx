import React from "react";
import "../../styles/dealTypeSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { setCardsToDealCount } from "../../store/slices/cardsToDealCount.slice";
import { useNavigate } from "react-router-dom";

const DealTypeSelector = () => {
	const dispatch = useDispatch();
	const deckSize = useSelector((state) => state.deckType.deckSize);
	const navigate = useNavigate();

	const explore = () => {
		dispatch(setCardsToDealCount(deckSize));
		navigate("/dashboard");
	};
	return (
		<div className="dealTypeSelector-container">
			<div className="dealTypeSelector-element-container">
				<div
					className="dealTypeSelector-element"
					onClick={() => explore()}
					style={{ backgroundImage: "url('./img/assets/explorar.png')" }}></div>
				<h1>Explorar el mazo</h1>
			</div>
			<div className="dealTypeSelector-element-container">
				<div
					className="dealTypeSelector-element"
					onClick={() => handleClick(2, 80)}
					style={{ backgroundImage: "url('./img/assets/tirada.png')" }}></div>
				<h1>Elegir una tirada</h1>
			</div>
			<div className="dealTypeSelector-element-container">
				<div
					className="dealTypeSelector-element"
					onClick={() => handleClick(3, 25)}
					style={{ backgroundImage: "url('./img/assets/personalizar.png')" }}></div>
				<h1>Personalizar tirada</h1>
			</div>
		</div>
	);
};

export default DealTypeSelector;
