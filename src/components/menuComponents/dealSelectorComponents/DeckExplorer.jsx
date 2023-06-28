import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/menu/dealSelector/deckExplorer.css";
import {
	setCardsToDeal,
	setDealType,
} from "../../../store/slices/dealData.slice";
import { setSelectedDealStatus } from "../../../store/slices/selectedDealStatus.slice";

const DeckExplorer = () => {
	const dispatch = useDispatch();
	const deckSize = useSelector((state) => state.dealData.deckSize);
	const selectedDealStatus = useSelector((state) => state.selectedDealStatus);

	const [selectedClass, setSelectedClass] = useState("");
	const explore = () => {
		dispatch(setCardsToDeal(deckSize));
		dispatch(setSelectedDealStatus(1));
		dispatch(setDealType("fullDeck"));
	};

	useEffect(() => {
		setSelectedClass(selectedDealStatus === 1 ? "selected-1" : "");
	}, [selectedDealStatus]);

	return (
		<div className="deckExplorer-element-container">
			<div
				className={`deckExplorer-element ${selectedClass}`}
				onClick={() => explore()}></div>
			<h1>Explorar el mazo</h1>
		</div>
	);
};

export default DeckExplorer;
