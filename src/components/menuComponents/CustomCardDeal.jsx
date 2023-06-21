import React from "react";
import "../../styles/customCardDeal.css";
import { useDispatch } from "react-redux";
import { setMenuStatus } from "../../store/slices/menuStatus.slice";

const CustomCardDeal = () => {
	const dispatch = useDispatch();
	const backMenu = () => {
		dispatch(setMenuStatus(1));
	};
	return (
		<div className="customCardDeal">
			{" "}
			<h1>CustomCardDeal</h1>
			<div
				className="dealTypeSelector-element-button"
				onClick={() => backMenu()}></div>
		</div>
	);
};

export default CustomCardDeal;
