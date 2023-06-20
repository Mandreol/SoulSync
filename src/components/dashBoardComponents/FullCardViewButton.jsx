import React from "react";
import "../../styles/FullCardViewButton.css";
import { useDispatch, useSelector } from "react-redux";
import { setFullCardViewActive } from "../../store/slices/fullCardViewActive.slice";
import { setSelectedFullViewCard } from "../../store/slices/selectedFullViewCard.silce";
import { useNavigate } from "react-router-dom";

const FullCardViewButton = ({ showButtonClass, cardId }) => {
	const dispatch = useDispatch();
	const fullCardViewActive = useSelector((state) => state.fullCardViewActive);

	const handleOnClick = () => {
		if (!fullCardViewActive) {
			dispatch(setSelectedFullViewCard(cardId));
			dispatch(setFullCardViewActive(!fullCardViewActive));
		} else {
			dispatch(setFullCardViewActive(!fullCardViewActive));
		}
	};
	return <div className={`${showButtonClass}`} onClick={handleOnClick}></div>;
};

export default FullCardViewButton;
