import React, { useState } from "react";
import "../../styles/customCardDeal.css";
import { useDispatch } from "react-redux";
import { setMenuStatus } from "../../store/slices/menuStatus.slice";
import { setCardsToDealCount } from "../../store/slices/cardsToDealCount.slice";
import { useNavigate } from "react-router-dom";

const CustomCardDeal = () => {
	const navigate = useNavigate();
	const [isLineDealSelected, setIsLineDealSelected] = useState(false);
	const dispatch = useDispatch();

	const backMenu = () => {
		dispatch(setMenuStatus(1));
	};

	const lineDealSelected = () => {
		setIsLineDealSelected(!isLineDealSelected);
	};
	let customCardDealCalass_1;

	isLineDealSelected
		? (customCardDealCalass_1 = "customCardDealCalass_1-visible")
		: (customCardDealCalass_1 = "customCardDealCalass_1-hidden");

	const goDashboard = () => {
		navigate("/dashboard");
	};
	return (
		<div className="customCardDeal">
			<h1>CustomCardDeal</h1>
			<div className="customCardDeal-container-1">
				<button className="customCardDeal-container-1" onClick={lineDealSelected}>
					<h2>Tirada en linea</h2>
				</button>

				<div className={customCardDealCalass_1}>
					<label htmlFor="cardsToDealAcount">¿Cuantas cartas querés repartir?</label>
					<input
						type="number"
						onChange={(e) => dispatch(setCardsToDealCount(e.target.value))}
					/>
					<button onClick={goDashboard}>Repartir</button>
				</div>
			</div>
			<div className="customCardDeal-container-1"></div>
			<div className="customCardDeal-button" onClick={() => backMenu()}></div>
		</div>
	);
};

export default CustomCardDeal;
